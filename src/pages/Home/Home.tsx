import React from "react";
import { Link } from "react-router-dom"
import WorkCanDone from "./WorkCan"
import HowLearn from "./HowLearn";
import Blog from "./Blog";
import { Button } from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header />

      <div className="grid  grid-cols-5  bg-[#f3fbfd] w-full pl-20  ">
        <div className="pt-32  col-span-2">
          <p className=" font-inter font-bold text-6xl text-[#12B0DF]">SLST</p>
          <p className="font-inter font-bold text-3xl max-w-xl mt-4">
            Nền tảng chia sẻ tài liệu và làm bài thi dành cho sinh viên
          </p>
          <p className="mt-3 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eleifend sem rutrum elementum dictum. Aenean ultrices ante leo, ut
            condimentum leo rhoncus id.
          </p>
          <Link to='/thiThu' className='flex m-auto mt-11'>
            <Button content='Get started' />
          </Link>
        </div>
        <img
          alt="Thumbnail"
          src="./thumbnailAdmin.png"
          className="pt-6 pl-10  col-span-3 max-h-[31.8rem]"
        />
      </div>

      <img alt="Layout" src="./Layout.png" className="" />

      <WorkCanDone />

      <div className="mt-56">
        <HowLearn />
      </div>
      <div className="my-56 mx-12">
        <Blog />
      </div>

      <Footer />
    </>
  );
}

export default Home;
