import Facebook from "../../components/icon/Facebook";
import Linkedin from "../../components/icon/Linkedin";
import Github from "../../components/icon/Github";
import { useState } from "react";

function Members() {
  const [imgHover, setImgHover] = useState(0);

  return (
    <div className="my-44">
      {/* chỉnh sửa : size text "thành viên .. " height and width avatar*/}
      <h2 className="text-center text-[30px] font-bold my-16 text-[#12B0DF]">
        Thành Viên Đội Ngũ Fun Dev Team
      </h2>

      <div className="grid grid-cols-3 max-w-7xl mx-auto">
        {/* Hong Tan */}
        <div className="col-span-1 max-w-xs text-center mx-auto">
          <div className="relative">
            <img
              src="./imgAbout/HongTan.jpg"
              alt="HongTan"
              className="max-w-xs rounded-3xl opacity-90  w-80 h-[350px]
                            hover:border-4 hover:border-cyan-400 hover:opacity-100"
              onMouseOver={() => {
                setImgHover(1);
              }}
              onMouseOut={() => {
                setImgHover(0);
              }}
            />
            <div className={(imgHover !== 1 ? "hidden" : "transition-transform")} >
              <div
                className="absolute w-full h-10 rounded-3xl
                            bg-sky-400 opacity-70 bottom-[4px]"
              >
                <h4 className="text-xl font-bold text-white leading-10 opacity-100">
                  Leader
                </h4>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold my-5">Nguyễn Hồng Tấn</h3>

          <div className="flex max-w-[150px] mx-auto">
            <a
              href="https://www.facebook.com/hongtan1422002/"
              className="mx-auto hover:animate-bounce"
              target="_blank" rel="noreferrer"
            >
              <Facebook />
            </a>
            <a href="https://www.linkedin.com/in/nguyenhongtan/"
              className="mx-auto hover:animate-bounce"
              target="_blank" rel="noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/TanKaka123"
              className="mx-auto hover:animate-bounce"
              target="_blank" rel="noreferrer"
            >
              <Github />
            </a>
          </div>
          <p className="font-medium mt-5">
            "Cách tốt nhất để dự đoán tương lai là kiến tạo ra nó"
            <br></br>
            -Abraham Lincoln-
          </p>
        </div>

        {/* Huu Loc */}
        <div className="col-span-1 max-w-xs text-center mx-auto">
          <div className="relative">
            <img
              src="./imgAbout/HuuLoc.jpg"
              alt="HuuLoc"
              className="max-w-xs rounded-3xl opacity-90  w-80 h-[350px]
                            hover:border-4 hover:border-cyan-400 hover:opacity-100"
              onMouseOver={() => {
                setImgHover(2);
              }}
              onMouseOut={() => {
                setImgHover(0);
              }}
            />
            <div
              className={(imgHover !== 2 ? "hidden" : "transition-transform")} >
              <div
                className="absolute w-full h-10 rounded-3xl
                            bg-sky-400 opacity-70 bottom-[4px]"
              >
                <h4 className="text-xl font-bold text-white leading-10 opacity-100">
                  Member
                </h4>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold my-5">Huỳnh Hữu Lộc</h3>

          <div className="flex max-w-[150px] mx-auto">
            <a
              href="https://www.facebook.com/huynh.h.loc.92/"
              className="mx-auto hover:animate-bounce"
              target="_blank" rel="noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://www.linkedin.com/in/hu%E1%BB%B3nh-h%E1%BB%AFu-l%E1%BB%99c-130030221/"
              className="mx-auto hover:animate-bounce"
              target="_blank" rel="noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/huynhhuuloc129"
              className="mx-auto hover:animate-bounce"
              target="_blank" rel="noreferrer"
            >
              <Github />
            </a>
          </div>
          <p className="font-medium mt-5">
            "Mọi chuyện xảy ra đều có lý do của nó"
            <br></br>
            -Huu Loc-
          </p>
        </div>

        {/* Duy Khuong */}
        <div className="col-span-1 max-w-xs text-center mx-auto">
          <div className="relative">
            <img
              src="./imgAbout/DuyKhuong.jpg"
              alt="DuyKhuong"
              className="max-w-xs rounded-3xl opacity-90 w-80 h-[350px]
                            hover:border-4 hover:border-cyan-400 hover:opacity-100"
              onMouseOver={() => {
                setImgHover(3);
              }}
              onMouseOut={() => {
                setImgHover(0);
              }}
            />
            <div
              className={(imgHover !== 3 ? "hidden" : "transition-transform")} >
              <div
                className="absolute w-full h-10 rounded-3xl
                            bg-sky-400 opacity-70 bottom-[4px]"
              >
                <h4 className="text-xl font-bold text-white leading-10 opacity-100">
                  Member
                </h4>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold my-5">Trần Duy Khương</h3>

          <div className="flex max-w-[150px] mx-auto">
            <a
              href="https://www.facebook.com/profile.php?id=100014937931401"
              className="mx-auto hover:animate-bounce"
              target="_blank" rel="noreferrer"
            >
              <Facebook />
            </a>
            <a href="#"
              className="mx-auto hover:animate-bounce"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/tranduykhuong"
              className="mx-auto hover:animate-bounce"
              target="_blank" rel="noreferrer"
            >
              <Github />
            </a>
          </div>
          <p className="font-medium mt-5">
            "Đừng phấn đấu để thành công mà hãy phấn đấu để mình có ích"
            <br></br>
            -Albert Einstein-
          </p>
        </div>
      </div>
    </div>
  );
}

export default Members;
