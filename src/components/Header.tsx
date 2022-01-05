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
        <ul className="grid grid-cols-8  m-4  mb-5" >
        <li className=" col-span-2 grid grid-cols-3 ">
             <Link to="/"  className={"cursor-pointer hover:text-[#12B0DF] hover:underline-offset-4 hover:underline font-bold text-xl "
             +(path == "/" ? " text-[#12B0DF] underline-offset-4 underline" : "")  } 
             onClick={() => setPath('/')} ><Logo/></Link> 
             
          </li>
          <li className="mt-[15px] text-right">
             <Link to="/"  className={" hover:text-[#12B0DF] hover:underline-offset-4 hover:underline font-bold text-xl cursor-pointer "
             +(path == "/" ? " text-[#12B0DF] underline-offset-4 underline" : "")  } 
             onClick={() => setPath('/')}
              >Trang Chủ </Link> 
          </li>
          {/*  */}
          <li className="mt-[15px] text-right">
            <Link to="/about" className={"hover:text-[#12B0DF] hover:underline-offset-4 hover:underline font-bold text-xl cursor-pointer "
             +(path == "/about" ? " text-[#12B0DF] underline-offset-4 underline" : "")  }  onClick={() => setPath('/about')}>About </Link> 
          </li>

          <li className="mt-[15px] text-right">
            <Link to="/thiThu" className={"hover:text-[#12B0DF] hover:underline-offset-4 hover:underline font-bold text-xl cursor-pointer"
             +(path == "/thiThu" ? " text-[#12B0DF] underline-offset-4 underline" : "")  }  onClick={() => setPath('/thiThu')}>Thi Thử </Link> 
          </li>
          <li className="mt-[15px] text-right">
            <Link to="/taiLieu" className={"hover:text-[#12B0DF] hover:underline-offset-4 hover:underline font-bold text-xl cursor-pointer "
             +(path == "/taiLieu" ? " text-[#12B0DF] underline-offset-4 underline" : "")  }  onClick={() => setPath('/taiLieu')}>Tài Liệu </Link> 
          </li>
          
          <li className="mt-[18px] ml-[4em] ">
             <Link to="/admin" className=" cursor-pointer text-[#0b6a86] font-bold bg-[#c4ebf7] p-2 rounded-bl-3xl rounded-tr-3xl px-[55px] py-[10px] hover:bg-[#12B0DF] hover:text-white" onClick={() => setPath('/admin')}>Admin </Link>
              
          </li>
          <li className="flex ">
          <a className="cursor-pointer mt-[12px] ml-[4em]"   href="https://www.linkedin.com/" target="_blank" >
              <IconLinkedin/>
          </a>
          <a className="cursor-pointer mt-[12px] ml-[2em]" href="https://github.com/FunDev-Team" target="_blank">
          <IconGithub/>
          </a>
          </li>
         
        </ul>
    </div>

  );
}

export default Header;
