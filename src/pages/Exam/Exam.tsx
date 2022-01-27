import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {IconSearch} from "../TaiLieu/icon/IconTaiLieuPage";
import { IconDOP, IconExams, IconFields, IconPoster } from './icon/IconsExamPage'
import { BackgroundModal } from './Modal/BackgroundModal';
import { TestModal } from './Modal/TestModal';
import examsApi from '../../api/examsApi';

function Exam() {
  // state search
  const [searchTest, setSearchTest] = useState("");

  // state khi over mouse môn học
  const [idxExam, setIdxExam] = useState(0);

  // Modal test
  const [isModalOpen, setModal] = useState(false)

  // Get exams from api
  const [examList, setExamList] = useState(Object);

  // Fetch API
  useEffect(() => {
    const fetchExamList = async () => {
      try {
        const api = await examsApi.getAll();
        setExamList(api);
      }catch (err){
        console.log('Failed to fetch exams API: ', err);
      }
    }

    fetchExamList();
  }, [])

  return (
    <div className='relative'>

      {/* Modal Test */}
      {isModalOpen && <TestModal closeModal={setModal} Exam={examList.data.exams[idxExam]} />}
      <BackgroundModal isOpen={isModalOpen} exitDimmer={setModal} zIndex={10} blur={1} />

      {/* Header */}
      <Header />

      {/* Title */}
      <div className="text-center py-28 bg-[#E5FAFF]">
        <h1 className="font-inter font-bold text-6xl text-[#00C5FF]">
          Kiểm tra Quá trình
        </h1>
        <h2 className="mt-10 font-inter font-medium text-xl">
          Chúng tôi mang đến sự tiện lợi và đơn giản
        </h2>
      </div>

      {/* Search */}
      <div className=" flex justify-center items-center  mt-16 flex-col relative">
        <div className="flex border-[#12B0DF] border-2  rounded-xl ">
          <div className="pt-2 border-solid px-3 bg-[#12B0DF] cursor-pointer 
            rounded-tl-xl rounded-bl-xl -ml-[0.1rem] -my-[0.1rem]">
            <IconSearch />
          </div>
          <input
            type="text"
            placeholder="Nhập bài kiểm tra cần tìm kiếm"
            className="border-none  rounded-md  w-[25rem] h-10 outline-none ml-2"
            onChange={(e) => {
              // set state giá trị vừa nhập ở bar search
              setSearchTest(e.target.value);
            }}
          />
        </div>

        {/* Exam Items */}
        <div className="grid grid-cols-3 mt-16 gap-x-20 gap-y-10">
          {Object.keys(examList).length !== 0 && examList.data.exams
            .filter((item: any) => {
              // nếu searchTest "" thì tiến thanh return tất cả item
              if (searchTest === "")
                return item;
              // nếu subject có từ khóa vừa nhập thì sẽ được return và render ra
              else if (item.subject.toLowerCase().includes(searchTest.toLowerCase())) {
                return item;
              }
            }).map((item: any, key: number) => {
              return (
                // render môn học
                <div className="" key={key}>
                  <div
                    className="border-2 rounded-xl border-[#7ce0ff] w-80 h-64 
                      hover:border-[#5fc9e9] hover:bg-cyan-100 font-inter
                      transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200"
                    onMouseOver={() => {
                      setIdxExam(key);                      
                    }}
                  >
                    <div className='font-inter'>
                      <div className="text-center mt-5 font-bold">
                        {item.subject}
                      </div>
                      <div className="flex mt-8 ml-4">
                        <IconFields />
                        <h1 className="ml-3">{item.fields}</h1>
                      </div>
                      <div className="flex mt-4  ml-4">
                        <IconPoster />
                        <h1 className="ml-3">{item.poster}</h1>
                      </div>
                      <div className='flex'>
                        <div className="flex mt-4  ml-4">
                          <IconExams />
                          <h1 className="ml-3">{item.totalExams}</h1>
                        </div>
                        <div className="flex mt-4  ml-16">
                          <IconDOP />
                          <h1 className="ml-3">{item.DOP}</h1>
                        </div>
                      </div>

                      <button
                        className={
                          "ml-3 mt-5 font-inter bg-[#12B0DF] w-24 h-9 rounded-lg text-white text-sm" +
                          (idxExam === key
                            ? "hover:text-sky-600 hover:border-2 hover:border-cyan-800" : "")
                        }
                        onClick={() => setModal(prevState => !prevState)}
                      >
                        Bắt đầu
                      </button>

                    </div>
                  </div>
                </div>
              );
            })}
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Exam;
