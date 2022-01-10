/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Blog() {
  return (
    <div>
      <div className="flex justify-between">
      
          <h1 className="float-left font-inter text-[#12B0DF] font-bold text-2xl">
            Blog SLST
          </h1>
          <a
            href="#"
            className="float-right  font-inter text-[#12B0DF] text-2xl hover:font-bold hover:underline"
          >
            Xem tất cả Blog &#x2192;
          </a>
      </div>
      <h1 className="mt-7 font-inter font-bold text-3xl">
        Blog SLST về chủ đề học tập
      </h1>
      <h1 className="mt-4 text-[#5E6475] text-xl">Nơi chia sẻ kinh nghiệm tự học</h1>
      <div className="grid grid-cols-3">
        <div className="">
          
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Blog;
