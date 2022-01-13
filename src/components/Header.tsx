import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import IconLinkedin from "./icon/Linkedin";
import IconGithub from "./icon/Github";
import Logo from "./icon/Logo";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation().pathname;
  const newPath = location.toString();
  const [path, setPath] = useState(newPath);

  return (
    <div>
      <ul className=" mx-auto  w-full pl-20">
        <div className="flex">
        <li className="  py-[17px]">
          <Link
            to="/"
            className={
              "m cursor-pointer hover:text-[#12B0DF] hover:underline-offset-4 hover:underline font-bold text-xl " +
              (path == "/"
                ? " text-[#12B0DF] underline-offset-4 underline"
                : "")
            }
            onClick={() => {
              setPath("/");
              console.log(location);
            }}
          >
            <Logo />
          </Link>
        </li>

        <li className="mt-[1.9em] ml-[18rem]">
          <Link
            to="/"
            className={
              " hover:text-[#12B0DF] hover:underline-offset-4 hover:underline  font-inter font-[700] text-xl cursor-pointer " +
              (path == "/"
                ? " text-[#12B0DF] underline-offset-4 underline"
                : "")
            }
            onClick={() => setPath("/")}
          >
            Trang Chủ{" "}
          </Link>
        </li>

        <li className="mt-[1.9em] ml-[4rem]">
          <Link
            to="/about"
            className={
              "hover:text-[#12B0DF] hover:underline-offset-4 hover:underline  font-[700] text-xl cursor-pointer " +
              (path == "/about"
                ? " text-[#12B0DF] underline-offset-4 underline"
                : "")
            }
            onClick={() => setPath("/about")}
          >
            About{" "}
          </Link>
        </li>

        <li className="mt-[1.9em] ml-[4rem] ">
          <Link
            to="/thiThu"
            className={
              "hover:text-[#12B0DF] hover:underline-offset-4 hover:underline  font-[700] text-xl cursor-pointer" +
              (path == "/thiThu"
                ? " text-[#12B0DF] underline-offset-4 underline"
                : "")
            }
            onClick={() => setPath("/thiThu")}
          >
            Thi Thử{" "}
          </Link>
        </li>
        <li className="mt-[1.9em] ml-[4rem]">
          <Link
            to="/taiLieu"
            className={
              "hover:text-[#12B0DF] hover:underline-offset-4 hover:underline  font-[700] text-xl cursor-pointer " +
              (path == "/taiLieu"
                ? " text-[#12B0DF] underline-offset-4 underline"
                : "")
            }
            onClick={() => setPath("/taiLieu")}
          >
            Tài Liệu
          </Link>
        </li>

        <li className="mt-[2.1em] ml-[4em] ">
          <Link
            to="/admin"
            className=" cursor-pointer text-[#0b6a86] font-[800]  bg-[#c4ebf7] p-2 rounded-bl-3xl rounded-tr-3xl px-[55px] py-[13px] hover:bg-[#12B0DF] hover:text-white"
            onClick={() => setPath("/admin")}
          >
            Admin{" "}
          </Link>
        </li>
        <li className="flex ">
          <a
            className="cursor-pointer mt-[2.1em] ml-[2em]"
            href="https://www.linkedin.com/"
            target="_blank" rel="noreferrer"
          >
            <IconLinkedin />
          </a>
          <a
            className="cursor-pointer mt-[2.1em]  ml-[2em] "
            href="https://github.com/FunDev-Team"
            target="_blank" rel="noreferrer"
          >
            <IconGithub />
          </a>
        </li>
        </div>
      </ul>
    </div>
  );
}

export default Header;
