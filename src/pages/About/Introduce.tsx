import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

function Introduce() {
  return (
    <div className="relative">
      <div className="grid  grid-cols-2  bg-[#f3fbfd] w-full">
        <div className="pt-32 pl-[5em] pr-4 col-span-1">
          <h1 className="text-6xl font-bold text-[#12B0DF]">About - SLST</h1>
          <h3 className="text-3xl font-bold my-3">
            Mục tiêu của chúng tôi là tạo ra giá trị cho cộng đồng
          </h3>
          <p className="text-lg opacity-80 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eleifend sem rutrum elementum dictum. Aenean ultrices ante leo, ut
            condimentum leo rhoncus id.
          </p>
          <Link to="/thiThu" className="flex m-auto mt-11">
            <Button content="Get started" />
          </Link>
        </div>

        <img src={require("../../assets/images/thumbnailAbout.png")} className="px-28 py-6 col-span-1" />
      </div>

      <img src={require("../../assets/images/backgroundBottom.png")} className="block w-full" />
    </div>
  );
}

export default Introduce;
