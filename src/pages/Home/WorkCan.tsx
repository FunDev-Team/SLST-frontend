import React, { useState } from "react";
import {LogoDoc,LogoQuestion,LogoUpdate,LogoObject} from "./logo/IconHomePage";

function WorkCan() {

  const [colors, setColor] = useState(0);

  return (
    <div className="mt-20 ">
      <h1 className="text-center font-inter font-bold text-3xl">
        Chúng Tôi Có Thể Làm Gì ?
      </h1>
      <h2 className="text-center font-inter text-[#12B0DF] font-bold mt-5">
        Website SLST có gì thú vị ?
      </h2>
      <h3 className="text-center font-inter text-[#5E6475] px-96 mt-4 ">
        Chúng tôi là nhóm những sinh viên ngành công nghệ thông tin đến từ HCMUS
        và CTU, mục tiêu phát triển dự án giúp cộng đồng sinh viên phát triển
        hơn, đây là sản phẩm đầu tiên của chúng tôi
      </h3>

      <div className="mx-24 grid grid-cols-4 gap-24  mt-14">

{/* VIỆC CÓ THỂ LÀM ĐƯỢC 1  */}

        <div
          className="hover:bg-[#daf7fd] hover:border-[#12B0DF] rounded-[40px] h-80 cursor-pointer  border border-[#b5bcc6] px-5"
          onMouseOver={() => {
            setColor(1);
            console.log(colors);
          }}
          onMouseOut={() => {
            setColor(0);
          }}
        >
          <div
            className={
              "mt-10 flex justify-center " 
            }
          >
            <div className={"" +
              (colors === 1 ? "bg-white rounded-[2.5rem] max-w-7xl px-6  py-9" : "bg-[#e9fafd] rounded-[2.5rem] px-6 py-9")+""}>
                
            <LogoDoc colors={colors === 1 ? "#12B0DF" : "#b5bcc6"} />
            </div>
           
          </div>
          <h4 className="text-center mt-14 text-[#818c9b] font-inter text-[1rem] font-semibold">Tài Liệu Chất Lượng</h4>
        </div>

{/* VIỆC CÓ THỂ LÀM ĐƯỢC 2 */}

        <div
          className="hover:bg-[#daf7fd] hover:border-[#12B0DF] rounded-[40px] h-80 cursor-pointer  border border-[#b5bcc6] px-5"
          onMouseOver={() => {
            setColor(2);
            console.log(colors);
          }}
          onMouseOut={() => {
            setColor(0);
          }}
        >
          <div
            className={
              "mt-10 flex justify-center  " 
            }
          >
            <div className={"" +
              (colors === 2 ? "bg-white rounded-[2.5rem] max-w-7xl px-6  py-9" : "bg-[#e9fafd] rounded-[2.5rem] px-6 py-9")+""}>
                
            <LogoQuestion colors={colors === 2 ? "#12B0DF" : "#b5bcc6"} />
            </div>
           
          </div>
          <h4 className="text-center mt-14 text-[#818c9b] font-inter text-[1rem] font-semibold">Câu Hỏi Chọn Lọc</h4>
        </div>

{/* VIỆC CÓ THỂ LÀM ĐƯỢC 3  */}

        <div
          className="hover:bg-[#daf7fd] hover:border-[#12B0DF] rounded-[40px] h-80 cursor-pointer  border border-[#b5bcc6] px-5"
          onMouseOver={() => {
            setColor(3);
          }}
          onMouseOut={() => {
            setColor(0);
          }}
        >
          <div
            className={
              "mt-10 flex justify-center  " 
            }
          >
            <div className={"" +
              (colors === 3 ? "bg-white rounded-[2.5rem] max-w-7xl px-6  py-9" : "bg-[#e9fafd] rounded-[2.5rem] px-6 py-9")+""}>
                
            <LogoUpdate colors={colors === 3 ? "#12B0DF" : "#b5bcc6"} />
            </div>
           
          </div>
          <h4 className="text-center mt-14 text-[#818c9b] font-inter text-[1rem] font-semibold">Cập Nhật Liên Tục</h4>
        </div>

{/* VIỆC CÓ THỂ LÀM ĐƯỢC 4  */}

        <div
          className="hover:bg-[#daf7fd] hover:border-[#12B0DF] rounded-[40px] h-80 cursor-pointer  border border-[#b5bcc6] px-5"
          onMouseOver={() => {
            setColor(4);
            console.log(colors);
          }}
          onMouseOut={() => {
            setColor(0);
          }}
        >
          <div
            className={
              "mt-10 flex justify-center  " 
            }
          >
            <div className={"" +
              (colors === 4 ? "bg-white rounded-[2.5rem] max-w-7xl px-6  py-9" : "bg-[#e9fafd] rounded-[2.5rem] px-6 py-9")+""}>
                
            <LogoObject colors={colors === 4 ? "#12B0DF" : "#b5bcc6"} />
            </div>
           
          </div>
          <h4 className="text-center mt-14 text-[#818c9b] font-inter text-[1rem] font-semibold">Đối Tượng Sinh Viên</h4>
        </div>
      </div>
    </div>
  );
}

export default WorkCan;
