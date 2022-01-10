import React from "react";

function HowLearn() {
  return (
    <div className="grid grid-cols-2">
      <img src="./HowLearn.png" alt="" className="" />
      <div className="bg-how-learn bg-contain pl-16 ">
        <h1 className="text-[#12B0DF]  font-inter font-bold text-4xl pt-16 ">
          Học Như Thế Nào ?
        </h1>
        <div className="flex my-10">
          <div className=" bg-[#12B0DF] w-11 h-11 rounded-full flex justify-center items-center text-white font-bold text-3xl  outline outline-4 outline-offset-4 outline-[#12B0DF]">
            1
          </div>
          <h2 className="ml-6 mt-2 font-bold text-2xl">
            Xây dựng lộ trình học tập riêng biệt
          </h2>
        </div>
        <div className="flex my-10">
          <div className=" bg-[#12B0DF] w-11 h-11 rounded-full flex justify-center items-center text-white font-bold text-3xl  outline outline-4 outline-offset-4 outline-[#12B0DF]">
            2
          </div>
          <h2 className="ml-6 mt-2 font-bold text-2xl">
            Học bám xát tài liệu{" "}
          </h2>
        </div>
        <div className="flex my-10">
          <div className=" bg-[#12B0DF] w-11 h-11 rounded-full flex justify-center items-center text-white font-bold text-3xl  outline outline-4 outline-offset-4 outline-[#12B0DF]">
            3
          </div>
          <h2 className="ml-6 mt-2 font-bold text-2xl">Ôn lại kiến thức</h2>
        </div>
        <div className="flex my-10">
          <div className=" bg-[#12B0DF] w-11 h-11 rounded-full flex justify-center items-center text-white font-bold text-3xl  outline outline-4 outline-offset-4 outline-[#12B0DF]">
            4
          </div>
          <h2 className="ml-6 mt-2 font-bold text-2xl">Kiểm tra quá trình</h2>
        </div>
      </div>
    </div>
  );
}

export default HowLearn;
