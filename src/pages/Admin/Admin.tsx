import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonLeaf from "../../components/ButtonLeaf";
import Footer from "../../components/Footer";
import IconAdmin from "./IconAdmin";
import AccountAdmin from "./db.json"

function Admin() {
  const [accountTerm, setAccountTerm] = useState("");
  const input = document.getElementById("idAdmin");
  
  return (
    <>
      {/* // intro admin page */}

      <div className="grid  grid-cols-5  bg-[#f3fbfd] w-full pl-20  ">
        <div className="pt-32  col-span-2">
          <p className=" font-inter font-bold text-6xl text-[#12B0DF]">
            Admin SLST
          </p>
          <p className="font-inter font-bold text-3xl max-w-xl mt-4">
            Nền tảng chia sẻ tài liệu và làm bài thi dành cho sinh viên{" "}
          </p>
          <p className="mt-3 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eleifend sem rutrum elementum dictum. Aenean ultrices ante leo, ut
            condimentum leo rhoncus id.{" "}
          </p>
          <Link to="/thiThu" className="flex m-auto mt-11">
            <ButtonLeaf title="Get started" />
          </Link>
        </div>
        <img
          alt="Thumbnail"
          src="./thumbnailAdmin.png"
          className="pt-6 pl-10  col-span-3 max-h-[31.8rem]"
        />
      </div>

      <img alt="Layout" src="./Layout.png" className="" />

      <div className="flex justify-center items-center mt-20">
        {" "}
        <img src="./logo.png" alt="" className="w-[7rem] " />
      </div>
      <h1 className="text-center mt-10 font-bold font-inter text-3xl text-[#12B0DF]">
        Nhập tài khoản để truy cập với quyền admin{" "}
      </h1>
      <h2 className="text-center text-[#5E6475] mt-2">
        Quyền thêm/xóa tài liệu, đề thi
      </h2>
      <div className="relative flex justify-center items-center mt-14">
        <div className="flex border-[#12B0DF] border-[3px]  rounded-xl ">
          <input
          id="idAdmin"
            type="text"
            placeholder=""
            className="border-none  rounded-md  w-[25rem] h-10 outline-none ml-2"
            onChange={(e)=>{
              setAccountTerm(e.target.value);
            }}
          />
          <div className="mt-1 mr-1 cursor-pointer">
            {" "}
            <IconAdmin />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center  ">
        <h1 className="mt-6 font-inter font-bold  cursor-pointer bg-[#12B0DF] text-center py-1 w-[28rem]  rounded-md text-white "
        onClick={()=>{

        }}>Truy cập admin</h1>
      </div>

      <Footer />
    </>
  );
}

export default Admin;
