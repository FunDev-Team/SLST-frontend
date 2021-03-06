import { forwardRef, useEffect, useState } from "react"
import { BsFillXSquareFill } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './index.css'


interface IExitModal {
    exitTest: React.Dispatch<React.SetStateAction<boolean>>;
    closeModal: (action: boolean) => void;
}

export const ExitMessage = ({ exitTest, closeModal }: IExitModal) => {

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



// Submit message

interface ISubmitModal {
    exitTest: React.Dispatch<React.SetStateAction<boolean>>;
    closeModal: (action: boolean) => void;
    score: number;
    total: number;
}

export const SubmitMessage = ({ exitTest, closeModal, score, total }: ISubmitModal) => {

    return (

        <div className="fixed w-[400px] h-72 z-[70] left-0 right-0 top-0 bottom-0 m-auto opacity-100 bg-sky-50 active
         border-[6px] border-[#00aeff] rounded">

            {/* Exit */}
            <div className='flex justify-end mx-2 mt-2'>
                <BsFillXSquareFill className="text-cyan-700 hover:text-red-500 text-xl cursor-pointer"
                    onClick={() => { closeModal(false) }}
                />
            </div>

            <div className="h-48 text-center ">
                <h3 className="text-4xl text-orange-600">Số câu đúng</h3>
                <h2 className="text-8xl mx-auto mt-2 text-green-500 animate-bounce">{score}</h2>
                <h2 className="text-3xl text-green-500">Tổng số câu: {total}</h2>
            </div>

            {/* Button */}
            <div className="flex h-10 justify-center mx-8">
                <div className="mx-2 my-auto text-white text-center cursor-pointer
                bg-orange-400 w-32 h-9 leading-9 rounded-md hover:bg-orange-500"
                onClick={() => {exitTest(false)}}
                >
                    Làm bài khác
                </div>

                <div className="mx-2 my-auto text-white text-center cursor-pointer
                 bg-green-500 w-32 h-9 leading-9 rounded-md hover:bg-green-700"
                    onClick={() => { closeModal(false) }}
                >
                    Xem lại bài làm
                </div>
            </div>
        </div>
    )
}