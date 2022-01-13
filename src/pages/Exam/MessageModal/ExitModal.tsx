import { forwardRef, useEffect, useState } from "react"
import { BsFillXSquareFill } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import '../index.css'


interface IModalProps {
    exitTest: React.Dispatch<React.SetStateAction<boolean>>;
    closeModal: (action: boolean) => void;
}

export const ExitModal = ({ exitTest, closeModal }: IModalProps) => {

    return (

        <div className="fixed w-[400px] h-72 z-[70] left-0 right-0 top-0 bottom-0 m-auto opacity-100 bg-red-50 active
         border-[6px] border-[#00aeff] rounded">

            {/* Exit */}
            <div className='flex justify-end mx-2 mt-2'>
                <BsFillXSquareFill className="text-cyan-700 hover:text-red-500 text-xl cursor-pointer"
                    onClick={() => { closeModal(false) }}
                />
            </div>

            <div className="h-44 mt-4 text-center ">
                <AiOutlineCloseCircle className="m-auto text-8xl text-red-500" />
                <h2 className="text-2xl ">Bạn có chắc muốn hủy bài làm không?</h2>
            </div>

            {/* Button */}
            <div className="flex h-10 justify-center mx-8">
                <div className="mx-2 my-auto text-white text-center cursor-pointer
                bg-orange-400 w-28 h-9 leading-9 rounded-md hover:bg-orange-500"
                onClick={() => {exitTest(false)}}
                >
                    Hủy bài làm
                </div>

                <div className="mx-2 my-auto text-white text-center cursor-pointer
                 bg-green-500 w-28 h-9 leading-9 rounded-md hover:bg-green-700"
                    onClick={() => { closeModal(false) }}
                >
                    Tiếp tục làm
                </div>
            </div>
        </div>
    )
}

