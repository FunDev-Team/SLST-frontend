import React from "react";
import {Link} from "react-router-dom"
import WorkCanDone from "./WorkCan"
import HowLearn from "./HowLearn";
import Blog from "./Blog";

function Home() {
  return (
    <>
      <div className="grid  grid-cols-5  bg-[#f3fbfd] w-full ">
          <div className="pt-32 pl-[5em] col-span-2">
          <p className=" font-inter font-bold text-6xl text-[#12B0DF]">SLST</p>
          <p className="font-inter font-bold text-3xl max-w-xl mt-4">
            Nền tảng chia sẻ tài liệu và làm bài thi dành cho sinh viên{" "}
          </p>
          <p className="mt-3 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eleifend sem rutrum elementum dictum. Aenean ultrices ante leo, ut
            condimentum leo rhoncus id.{" "}
          </p>
          <Link to="/" className="py-4 px-14 rounded-tl-3xl rounded-br-3xl text-white font-bold bg-[#12B0DF] mt-8  inline-block cursor-pointer">Get Started</Link>
        </div>
        <img alt="Thumbnail" src="./thumbnailHome.png" className="pt-6  col-span-3" />
      </div>

      <img alt="Layout" src="./Layout.png" className="" />

      <WorkCanDone/>
      
      <div className="mt-56">
        <HowLearn/>
      </div>
      <div className="mt-56 mx-12">
        <Blog/>
      </div>
    </>
  );
}

export default Home;
