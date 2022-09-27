import  { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import IconLinkedin from "./icon/Linkedin";
import IconGithub from "./icon/Github";
import Logo from "./icon/Logo";


function Header() {
  const location = useLocation().pathname;
  const newPath = location.toString();
  const [path, setPath] = useState(newPath);

  return (
    <div>
     
      <ul className=" w-full pl-20 flex justify-around items-center pr-20">
        <li className="py-[17px] flex-1 ">
          <Link
            to="/"
            className="cursor-pointer"
            onClick={() => {
              setPath("/");
            }}
          >
            <Logo />
          </Link>
        </li>

        <li className=" flex-1  flex justify-around items-center  ">
          <div className="">
            <Link to="/" className={ "heading" + (path == "/" ? " heading_hover" : "") } onClick={() => setPath("/")} >
              Trang Chủ
            </Link>
          </div>

          <div className="">     
            <Link to="/about" className={ "heading" + (path == "/about" ? " heading_hover" : "") } onClick={() => setPath("/about")} >
              About
            </Link>
          </div>

          <div className="">
            <Link to="/test" className={ "heading" + (path == "/test" ? " heading_hover" : "") } onClick={() => setPath("/test")} >
              Thi Thử
            </Link>
          </div>

          <div className="">
            <Link to="/document" className={ "heading" + (path == "/document" ? " heading_hover" : "") } onClick={() => setPath("/document")} >
              Tài Liệu
            </Link>
          </div>

          <div className="">
            <Link to="/admin" className={ "heading" + (path == "/admin" ? " heading_hover" : "") } onClick={() => setPath("/admin")} >
              Admin
            </Link>
          </div>

          <div className="flex "> 
            <a  className="cursor-pointer ml-[2em]" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"  >
              <IconLinkedin />
            </a>
            <a  className="cursor-pointer  ml-[2em] "  href="https://github.com/FunDev-Team" target="_blank" rel="noreferrer" >
              <IconGithub />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
