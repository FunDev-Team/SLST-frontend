import React, { useState } from "react";

import { Routes,Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import IconLinkedin from "./icon/Linkedin"
import IconGithub from "./icon/Github"
import Logo from "./icon/Logo"

function Header() {
  const [path, setPath] = useState('');
 
  return (
    <div>
        <ul className="flex" >
        <li className=" ml-[2em] py-[17px]">
             <Link to="/"  className={"m cursor-pointer hover:text-[#12B0DF] hover:underline-offset-4 hover:underline font-bold text-xl "
             +(path == "/" ? " text-[#12B0DF] underline-offset-4 underline" : "")  } 
             onClick={() => setPath('/')} ><Logo/></Link> 
             
          </li>

          <li className="mt-[1.7em] ml-[25rem]">
             <Link to="/"  className={" hover:text-[#12B0DF] hover:underline-offset-4 hover:underline font-[797] text-[1.4rem] cursor-pointer "
             +(path == "/" ? " text-[#12B0DF] underline-offset-4 underline" : "")  } 
             onClick={() => setPath('/')}
              >Trang Chủ </Link> 
          </li>
        
          <li className="mt-[1.7em] ml-[4rem]">
            <Link to="/about" className={"hover:text-[#12B0DF] hover:underline-offset-4 hover:underline font-[797] text-[1.4rem] cursor-pointer "
             +(path == "/about" ? " text-[#12B0DF] underline-offset-4 underline" : "")  }  onClick={() => setPath('/about')}>About </Link> 
          </li>

          <li className="mt-[1.7em] ml-[4rem] ">
            <Link to="/thiThu" className={"hover:text-[#12B0DF] hover:underline-offset-4 hover:underline font-[797] text-[1.4rem] cursor-pointer"
             +(path == "/thiThu" ? " text-[#12B0DF] underline-offset-4 underline" : "")  }  onClick={() => setPath('/thiThu')}>Thi Thử </Link> 
          </li>
          <li className="mt-[1.7em] ml-[4rem]">
            <Link to="/taiLieu" className={"hover:text-[#12B0DF] hover:underline-offset-4 hover:underline font-[797] text-[1.4rem] cursor-pointer "
             +(path == "/taiLieu" ? " text-[#12B0DF] underline-offset-4 underline" : "")  }  onClick={() => setPath('/taiLieu')}>Tài Liệu</Link> 
          </li>
          
          <li className="mt-[2em] ml-[4em] ">
             <Link to="/admin" className=" cursor-pointer text-[#0b6a86] font-[800]  bg-[#c4ebf7] p-2 rounded-bl-3xl rounded-tr-3xl px-[55px] py-[13px] hover:bg-[#12B0DF] hover:text-white" onClick={() => setPath('/admin')}>Admin </Link>
              
          </li>
          <li className="flex ">
          <a className="cursor-pointer mt-[2em] ml-[2em]"   href="https://www.linkedin.com/" target="_blank" >
              <IconLinkedin/>
          </a>
          <a className="cursor-pointer mt-[2em]  ml-[2em]" href="https://github.com/FunDev-Team" target="_blank">
          <IconGithub/>
          </a>
          </li>
         
        </ul>
    </div>

  );
}

export default Header;
