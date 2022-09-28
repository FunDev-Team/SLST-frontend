import { Link } from "react-router-dom"
import WorkCanDone from "./WorkCan"
import HowLearn from "./HowLearn";
import Blog from "./Blog";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Button } from "../../components/Button";

function Home() {
  return (
    <>
      <Header />

      <div className="grid  grid-cols-7  bg-[#f3fbfd] w-full pl-20  ">
        <div className="pt-32  col-span-3">
          <p className=" font-inter font-bold text-6xl text-[#12B0DF]">SLST</p>
          <p className="font-inter font-bold text-3xl max-w-xl mt-4">
            Nền tảng chia sẻ tài liệu và làm bài thi dành cho sinh viên
          </p>
          <p className="mt-3 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend sem rutrum elementum dictum. 
            Aenean ultrices ante leo, ut condimentum leo rhoncus id.
          </p>
          <Link to='/thiThu' className='flex m-auto mt-11'>
            <Button content='Get started' />
          </Link>
        </div>
        <img
          alt="Thumbnail"
          src={require("../../assets/images/thumbnailAdmin.png")} 
          className="pt-6 col-span-4 max-h-[31.8rem]"
        />
      </div>
      <img alt="Layout" src={require("../../assets/images/backgroundBottom.png")} className="" />
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
