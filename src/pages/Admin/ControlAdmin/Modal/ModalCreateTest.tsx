import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function ModalCreateTest({ setModalCreateTest }: any) {

    const [inputFields, setInputFields] = useState
        ([{
            id: uuidv4(),
            question: '',
            choice_1: '',
            choice_2: '',
            choice_3: '',
            choice_4: '',
            answer: ''
        },])

    return (
        <div className=" flex justify-center items-center  inset-0  bg-indigo-600 bg-opacity-25 fixed z-10">
            <div className=" bg-white rounded-lg relative ">

                <button className="absolute right-3 top-2 bg-[#ff2507] font-bold p-1 px-2 rounded-md text-white "
                    onClick={() => setModalCreateTest(false)}>
                    X
                </button>
                <div className="h-[30rem] w-[45rem] overflow-y-auto ">
                    <h1 className="text-center mt-16 mb-10 text-3xl text-[#00C5FF] font-bold font-inter ">
                        Tạo Bài Kiểm Tra
                    </h1>
                    <ul className="text-center ">
                        <li className="flex mx-5 my-6  ">
                            <h1 className="ml-5">Tên môn học </h1>
                            <input type="text" className='border-[#00C5FF] border-2 rounded-md outline-none ml-4 w-72 h-8' />
                        </li>
                        <li className="flex mx-5 my-6">
                            <h1 className="ml-5">Lĩnh vực</h1>
                            <input type="text" className='border-[#00C5FF] border-2 rounded-md outline-none ml-12 w-72 h-8' />
                        </li>
                        <li className="">
                            {
                                inputFields.map((inputField, key) => (
                                    <div className="my-9" key={inputField.id}>
                                        <div className="flex mx-10 mb-3 font-inter  font-semibold">
                                            <h1 className={(key + 1 >= 10 ? "mr-6 text-[#00C5FF]" : "mr-8 text-[#00C5FF]")}>Câu hỏi {key + 1}</h1>
                                            <input type="text" className="border-[#00C5FF] border-2 rounded-md outline-none w-80" value={inputField.question}
                                                onChange={(e) => {
                                                    const newInputFields = inputFields.map(i => {
                                                        if (inputField.id === i.id) {
                                                            i.question = e.target.value
                                                        }
                                                        return i;
                                                    })
                                                    setInputFields(newInputFields);
                                                }}
                                            />
                                        </div>

                                        <div className="flex mx-24 mb-2">
                                            <h1 className="">A</h1>
                                            <input type="text" className="mx-10 border-[#818c9b] border-2 rounded-md outline-none " value={inputField.choice_1}
                                                onChange={(e) => {
                                                    const newInputFields = inputFields.map(i => {
                                                        if (inputField.id === i.id) {
                                                            i.choice_1 = e.target.value
                                                        }
                                                        return i;
                                                    })
                                                    setInputFields(newInputFields);
                                                }} />
                                            <h1 className="">B</h1>
                                            <input type="text" className="mx-10 border-[#818c9b] border-2 rounded-md outline-none " value={inputField.choice_2}
                                                onChange={(e) => {
                                                    const newInputFields = inputFields.map(i => {
                                                        if (inputField.id === i.id) {
                                                            i.choice_2 = e.target.value
                                                        }
                                                        return i;
                                                    })
                                                    setInputFields(newInputFields);
                                                }} />
                                        </div>
                                        <div className="flex mx-24 mb-2">
                                            <h1 className="">C</h1>
                                            <input type="text" className="mx-10 border-[#818c9b] border-2 rounded-md outline-none " value={inputField.choice_3} onChange={(e) => {
                                                const newInputFields = inputFields.map(i => {
                                                    if (inputField.id === i.id) {
                                                        i.choice_3 = e.target.value
                                                    }
                                                    return i;
                                                })
                                                setInputFields(newInputFields);
                                            }} />
                                            <h1 className="">D</h1>
                                            <input type="text" className="mx-10 border-[#818c9b] border-2 rounded-md outline-none " value={inputField.choice_4}
                                                onChange={(e) => {
                                                    const newInputFields = inputFields.map(i => {
                                                        if (inputField.id === i.id) {
                                                            i.choice_4 = e.target.value
                                                        }
                                                        return i;
                                                    })
                                                    setInputFields(newInputFields);
                                                }} />
                                        </div>
                                        <div className="flex mx-14 mb-2">
                                            <h1 className="mr-10">Đáp án</h1>
                                            <input type="text" className="border-[#00C5FF] border-2 rounded-md outline-none" value={inputField.answer} onChange={(e) => {
                                                const newInputFields = inputFields.map(i => {
                                                    if (inputField.id === i.id) {
                                                        i.answer = e.target.value
                                                    }
                                                    return i;
                                                })
                                                setInputFields(newInputFields);
                                            }} />
                                        </div>

                                    </div>

                                ))
                            }
                        </li>
                        <button className=" bg-blue-400  px-4 py-[0.2rem] text-white rounded-md font-semibold text-base" onClick={() => {
                            setInputFields([...inputFields, {
                                id: uuidv4(),
                                question: '',
                                choice_1: '',
                                choice_2: '',
                                choice_3: '',
                                choice_4: '',
                                answer: ''
                            }])
                        }}>Thêm câu hỏi</button>
                    </ul>
                </div>

                <div className="flex justify-center items-center mt-14 mb-8">
                    <button className="mr-2 bg-[#1bff07]  px-6 py-2 text-white rounded-md" >Tạo</button>
                    <button className="ml-2 bg-[#ff2507]  px-6 py-2 text-white rounded-md"
                        onClick={() => setModalCreateTest(false)}>
                        Hủy
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ModalCreateTest;