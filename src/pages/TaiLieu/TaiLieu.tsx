import React, { useEffect, useState } from "react";
import JSON from "./db.json";
import IconSearch from "./Icon/IconSearch";
import IconTeacher from "./Icon/IconTeacher";
import IconDOC from "./Icon/IconDOC";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import docs from "../../api/docs"
import axios from "axios";

interface fill {
  API: string;
}
function TaiLieu() {
  // state khi nhập giá trị search
  const [searchTearm, setSearchTearm] = useState("");
  // state khi over mouse môn học
  const [underlineGet, setUnderlineGet] = useState(0);

  useEffect(()=>{
    async function fetchPostList(){
      try{
        const resquestUrl="https://slst-backend.herokuapp.com/api/docs";
        const response = await fetch(resquestUrl);
        const responeJson= await response.json();
        console.log({responeJson})
      }catch(error : any)
      {
        console.log('error is ',error.message)
      }
    }
    fetchPostList();
  },[]);
 

  return (
    <>
      <Header />

      <div className="text-center py-28 bg-[#E5FAFF]">
        <h1 className="font-inter font-bold text-6xl text-[#00C5FF]">
          Tài Liệu Học Tập
        </h1>
        <h2 className="mt-10 font-inter font-medium text-xl">
          Chúng tôi mang đến sự tiện lợi và đơn giản
        </h2>
      </div>
      <div className=" flex justify-center items-center  mt-16 flex-col relative">
        <div className="flex border-[#12B0DF] border-2  rounded-xl ">
          <div className="pt-2 border-solid px-3   bg-[#12B0DF] cursor-pointer rounded-tl-xl rounded-bl-xl -ml-[0.1rem] -my-[0.1rem]">
            <IconSearch />
          </div>
          <input
            type="text" placeholder="Nhập môn học cần tìm kiếm"
            className="border-none  rounded-md  w-[25rem] h-10 outline-none ml-2"
            onChange={(e) => {
              setSearchTearm(e.target.value);
              // set state giá trị vừa nhập ở bar search
            }}
          />
        </div>
        <div className="grid grid-cols-3 mt-16 gap-x-20 gap-y-10">
          {JSON.document
            .filter((val) => {
              // nếu searchTearm " " thì tiến thanh return tất cả value
              if (searchTearm == "") return val;
              else if (
                val.subject
                  .toLowerCase()
                  .includes(searchTearm.toLowerCase())) 
              {
                // nếu subject có từ khóa vừa nhập thì sẽ được return và render ra
                return val;
              }})
            .map((val, key) => {
              return (
                // render môn học
                <div className="" key={key}>
                  <div
                    className="border border-[3px] rounded-md border-[#7ce0ff] w-72 h-44 hover:border-[#5fc9e9] hover:border-4 font-inter"
                    onMouseOver={() => {
                      setUnderlineGet(val.id);
                    }}
                    onMouseOut={() => {
                      setUnderlineGet(0);
                    }}
                  >
                    <a
                      href="https://drive.google.com/drive/folders/1kJ82ZZhrPsNpZkEOXifTAuu1XzT3vKGD"
                      target="_blank"
                      className="" rel="noreferrer"
                    >
                      <div className="text-center mt-5 font-inter font-bold">
                        {val.subject}
                      </div>
                      <div className="flex mt-8 ml-4">
                        <IconTeacher />
                        <h1 className="ml-3 font-inter">{val.teacher}</h1>
                      </div>
                      <div className="flex mt-4  ml-4">
                        <IconDOC />
                        <h1 className="ml-3 font-inter">{val.DOC}</h1>
                      </div>
                      <h1
                        className={
                          "text-right font-inter  " +
                          (underlineGet === val.id
                            ? "text-[#12B0DF] underline"
                            : "")
                        }
                      >
                        Lấy tài liệu &rarr;{" "}
                      </h1>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default TaiLieu;
