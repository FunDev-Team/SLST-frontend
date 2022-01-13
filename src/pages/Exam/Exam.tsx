import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IconSearch from '../TaiLieu/Icon/IconSearch';
import JSON from './db.json'
import IconDOP from './icon/IconDOP';
import IconExams from './icon/IconExams';
import IconFields from './icon/IconFields';
import IconPoster from './icon/IconPoster';
import { ReactDimmer } from './ReactDimmer';
import { TestModal } from './TestModal';

function Exam() {
  // state khi nhập giá trị search
  const [searchTest, setSearchTest] = useState("");

  // state khi over mouse môn học
  const [underlineGet, setUnderlineGet] = useState(0);

  // state index test exam
  const [idxExam, setIdxExam] = useState(-1)

  // Modal test
  const [isModalOpen, setModal] = useState(false)

  const handleClick = (idx: any) => {
    setIdxExam(idx)
    setModal(prevState => !prevState)
  }

  return (
    <div className='relative'>

      {isModalOpen && <TestModal closeModal={setModal} idx={idxExam} />}
      <ReactDimmer isOpen={isModalOpen} exitDimmer={setModal} zIndex={10} blur={1} />

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

        {/* Test Items */}
        <div className="grid grid-cols-3 mt-16 gap-x-20 gap-y-10">
          {JSON.test
            .filter((item) => {
              // nếu searchTest "" thì tiến thanh return tất cả item
              if (searchTest == "")
                return item;
              // nếu subject có từ khóa vừa nhập thì sẽ được return và render ra
              else if (item.subject.toLowerCase().includes(searchTest.toLowerCase())) {
                return item;
              }
            }).map((item, key) => {
              return (
                // render môn học
                <div className="" key={key}>
                  <div
                    className="border-2 rounded-xl border-[#7ce0ff] w-80 h-64 
                      hover:border-[#5fc9e9] hover:bg-cyan-100 font-inter
                      transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200"
                    onMouseOver={() => {
                      setUnderlineGet(parseInt(item.id));
                    }}
                    onMouseOut={() => {
                      setUnderlineGet(0);
                    }}
                  >
                    <div>
                      <div className="text-center mt-5 font-inter font-bold">
                        {item.subject}
                      </div>
                      <div className="flex mt-8 ml-4">
                        <IconFields />
                        <h1 className="ml-3 font-inter">{item.fields}</h1>
                      </div>
                      <div className="flex mt-4  ml-4">
                        <IconPoster />
                        <h1 className="ml-3 font-inter">{item.poster}</h1>
                      </div>
                      <div className='flex'>
                        <div className="flex mt-4  ml-4">
                          <IconExams />
                          <h1 className="ml-3 font-inter">{item.totalExams}</h1>
                        </div>
                        <div className="flex mt-4  ml-16">
                          <IconDOP />
                          <h1 className="ml-3 font-inter">{item.DOP}</h1>
                        </div>
                      </div>
                      <button
                        className={
                          "ml-3 mt-5 font-inter bg-[#12B0DF] w-24 h-9 rounded-lg text-white text-sm" +
                          (underlineGet === parseInt(item.id)
                            ? "hover:text-sky-600 hover:border-2 hover:border-cyan-800" : "")
                        }
                        onClick={() => handleClick(key)}
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
