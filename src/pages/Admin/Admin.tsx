/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonLeaf from "../../components/ButtonLeaf";
import Footer from "../../components/Footer";
import IconAdmin from "./Icon/IconAdmin";
import ApiAccountAdmin from "./db.json";
import { FaHeart } from "react-icons/fa";
import Header from "../../components/Header";
import ControlAdmin from "./ControlAdmin/ControlAdmin";

function Admin() {
  const [accountTerm, setAccountTerm] = useState(""); // state account đang nhâp
  const [failAccount, setFailAccount] = useState(0); // 0 : là chưa nhập hoặc chưa click đăng nhập, 1 là sai mật khẩu
  const [accessAdmin, setAccessAdmin] = useState("");
  // handle xac nhận tài khoản khi log in -> return 1 nếu login fail, else login thành công
  function logInFail(accountCurr: any) {
    let flag = 1;
    ApiAccountAdmin.account.forEach((value) => {
      if (value.AccountAdmin === accountCurr) {
        flag = 0;
      }
    });
    return flag;
  }
  // xử lí sau khi login, nếu log in fail, tiến hành set state, ngược lại thông báo log in thành công
  const handleLogIn = () => {
    if (logInFail(accountTerm) === 1) {
     
      setFailAccount(1);
     
    } else {
      setAccessAdmin("admin control");
    }
  };

  // xử lí khi nhấn enter ở khung input tài khoản admin
  const hadleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleLogIn();
    }
  };
  return (
    <>
      {/* // intro admin page */}
    <div className="relative">
      <Header />
      <div className="text-center py-28 bg-[#E5FAFF]">
        <h1 className="font-inter font-bold text-6xl text-[#00C5FF]">
          Truy cập quyền admin
        </h1>
        <h2 className="mt-10 font-inter font-medium text-xl">
          Admin có quyền đăng tải / xóa tài liệu, đề thi
        </h2>
      </div>

      <div className="flex justify-center items-center mt-20">
        <img src="./logo.png" alt="" className="w-[7rem] " />
      </div>

      <div className={"" + accessAdmin == "" ? "" : "hidden"}>
        <h1 className="text-center mt-10 font-bold font-inter text-3xl text-[#12B0DF]">
          Nhập tài khoản để truy cập với quyền admin
        </h1>
        <h2 className="text-center text-[#5E6475] mt-2">
          Quyền thêm/xóa tài liệu, đề thi
        </h2>
        <h1 className={"text-center mt-9 -mb-11 font-semibold " +(failAccount === 1 ? "text-[#eb5757]" : "invisible")}>
          ! Tài khoản admin vừa nhập không chính xác
        </h1>

        <div className="relative flex justify-center items-center mt-14">
          <div
            className="flex border-[2px]  rounded-xl border-[#12B0DF]" >
            <input
              id="input-account"
              type="text"
              placeholder=""
              className="border-none  rounded-md  w-[25rem] h-10 outline-none ml-2"
              value={accountTerm}
              onChange={(e) => {
                setAccountTerm(e.target.value);
                if (failAccount == 1) setFailAccount(0);
              }}
              onKeyDown={hadleKeyDown}
             
            />
            <div className="mt-1 mr-1 cursor-pointer">
              <IconAdmin />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center  ">
          <h1
            className="mt-6 font-inter font-bold  cursor-pointer bg-[#12B0DF] text-center py-1 w-[28rem]  rounded-md text-white "
            onClick={() => {handleLogIn();}}>
            Truy cập admin
          </h1>
        </div>
      </div>
      <div className={""+accessAdmin=="admin control"?"":"hidden"}>
        <div className="flex justify-center items-center">
        <button className=" my-5 p-2 font-inter bg-[#00C5FF] rounded-lg border-2 text-lg text-white    hover:border-cyan-800" 
            onClick={()=>{
              setAccessAdmin("");
              setAccountTerm("");
            }}>
            Đăng xuất</button>
        </div>
              
        <ControlAdmin nameAdmin={accountTerm} />
      </div>
              
        <Footer />
      </div>
    </>
  );
}

export default Admin;
