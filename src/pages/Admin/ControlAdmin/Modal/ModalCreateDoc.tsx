import React from 'react';

function ModalCreateDoc({setModalCreateOpen}:any) {
    return (
        <div className=" flex justify-center items-center  inset-0 fixed z-10 bg-indigo-600 bg-opacity-25">
            <div className="h-[28rem] w-[30rem] bg-white rounded-lg relative shadow-2xl">
                <button className="absolute right-3 top-2 bg-[#ff2507] font-bold p-1 px-2 rounded-md text-white " 
                onClick={()=>setModalCreateOpen(false)}>
                    X
                </button>
                <h1 className="text-center mt-16 mb-10 text-3xl text-[#00C5FF] font-bold font-inter ">
                    Tạo Tài Liệu
                </h1>
              <ul className="text-center ">
                  <li className="flex mx-5 my-6  ">
                    <h1 className="ml-5">Tên môn học </h1>
                    <input type="text" className='border-[#00C5FF] border-2 rounded-md outline-none ml-4 w-72 h-8' />
                  </li>
                  <li className="flex mx-5 my-6">
                    <h1 className="ml-5">Giảng viên</h1>
                    <input type="text"  className='border-[#00C5FF] border-2 rounded-md outline-none ml-8 w-72 h-8'/>
                  </li>
                  <li className="flex mx-5 my-6">
                    <h1 className="ml-5">
                        Tài Liệu
                    </h1>
                    <input type="text" className='border-[#00C5FF] border-2 rounded-md outline-none ml-14 w-72 h-8' />
                  </li>
              </ul>
                
                <div className="flex justify-center items-center mt-14">
                    <button className="mr-2 bg-[#1bff07]  px-6 py-2 text-white rounded-md" >Tạo</button>
                    <button className="ml-2 bg-[#ff2507]  px-6 py-2 text-white rounded-md" 
                    onClick={()=>setModalCreateOpen(false)}>
                        Hủy
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalCreateDoc;