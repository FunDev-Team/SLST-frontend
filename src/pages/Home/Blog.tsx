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
      <h1 className="mt-4 text-[#5E6475] text-xl">
        Nơi chia sẻ kinh nghiệm tự học
      </h1>
      <div className="mt-5 grid grid-cols-3 gap-x-8">
        <a href="#" className="mx-2 hover:mx-0 cursor-pointer">
          <img src="./Blog/BlogAlgorithm.png" alt="" className="rounded-3xl" />
          <h1 className="mt-5 text-[#12B0DF] text-xl">Thuật Toán</h1>
          <h1 className="   font-bold font-inter  my-1 text-2xl">
            Tầm Quan Trọng Thuật Toán
          </h1>
          <p className="">Quá trình học thuật toán từ cấp ba đến đại học ?</p>
        </a>
        <a href="#" className="mx-2 hover:mx-0 cursor-pointer">
          <img src="./Blog/BlogWeb.png" alt="" className="rounded-3xl" />
          <h1 className="mt-5 text-[#12B0DF] text-xl">Website</h1>
          <h1 className="   font-bold font-inter  my-1 text-2xl">
          Làm Dự Án Website Ra Sao ?
          </h1>
          <p className="">Tự học thiết kế website từ năm nhất như thế nào thì hiệu quả </p>
        </a>
        <a href="#" className="mx-2 hover:mx-0 cursor-pointer">
          <img src="./Blog/BlogMath.png" alt="" className="rounded-3xl" />
          <h1 className="mt-5 text-[#12B0DF] text-xl">Toán Học</h1>
          <h1 className="   font-bold font-inter  my-1 text-2xl">
          Môn Toán Đại Cương Có Gì ?
          </h1>
          <p className="">Môn toán giúp ích như thế nào khi theo học ngành công nghệ thông tin ?</p>
        </a>
      </div>
    </div>
  );
}

export default Blog;
