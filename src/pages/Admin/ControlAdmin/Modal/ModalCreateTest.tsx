import  { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import examsApi from '../../../../api/examsApi';

function ModalCreateTest({ setModalCreateTest,adminCreate }: any) {
    // handle day/month/year
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const newdate = day + "/" + month + "/" +year ;
    
    const [numberOrder,setNumberOrder]=useState(2);
    const [inputFields, setInputFields] = useState
        ([{
            id:numberOrder-1,
            question: "",
            choice1: "",
            choice2: "",
            choice3: "",
            choice4: "",
            answer: "",
        },]);
    const [nameSubject,setNameSubject]=useState('');
    const [nameField,setNameField]=useState('');
    const handleCreateExam=()=>{
        const ExamCreated = {
            id :uuidv4(),
            subject: nameSubject,
            fields: nameField,
            poster: adminCreate,
            DOP: newdate,
            totalExams: inputFields.length,
            questions:inputFields,
        }
        examsApi.post(ExamCreated);
        setModalCreateTest(false);
    }

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
                            <input type="text" className='border-[#00C5FF] border-2 rounded-md outline-none ml-4 w-72 h-8' value={nameSubject} onChange={(e)=>{setNameSubject(e.target.value)}} />
                        </li>
                        <li className="flex mx-5 my-6">
                            <h1 className="ml-5">Lĩnh vực</h1>
                            <input type="text" className='border-[#00C5FF] border-2 rounded-md outline-none ml-12 w-72 h-8' value={nameField} onChange={(e)=>{setNameField(e.target.value)}} />
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
                                            <input type="text" className="mx-10 border-[#818c9b] border-2 rounded-md outline-none " value={inputField.choice1}
                                                onChange={(e) => {
                                                    const newInputFields = inputFields.map(i => {
                                                        if (inputField.id === i.id) {
                                                            i.choice1 = e.target.value
                                                        }
                                                        return i;
                                                    })
                                                    setInputFields(newInputFields);
                                                }} />
                                            <h1 className="">B</h1>
                                            <input type="text" className="mx-10 border-[#818c9b] border-2 rounded-md outline-none " value={inputField.choice2}
                                                onChange={(e) => {
                                                    const newInputFields = inputFields.map(i => {
                                                        if (inputField.id === i.id) {
                                                            i.choice2 = e.target.value
                                                        }
                                                        return i;
                                                    })
                                                    setInputFields(newInputFields);
                                                }} />
                                        </div>
                                        <div className="flex mx-24 mb-2">
                                            <h1 className="">C</h1>
                                            <input type="text" className="mx-10 border-[#818c9b] border-2 rounded-md outline-none " value={inputField.choice3} onChange={(e) => {
                                                const newInputFields = inputFields.map(i => {
                                                    if (inputField.id === i.id) {
                                                        i.choice3 = e.target.value
                                                    }
                                                    return i;
                                                })
                                                setInputFields(newInputFields);
                                            }} />
                                            <h1 className="">D</h1>
                                            <input type="text" className="mx-10 border-[#818c9b] border-2 rounded-md outline-none " value={inputField.choice4}
                                                onChange={(e) => {
                                                    const newInputFields = inputFields.map(i => {
                                                        if (inputField.id === i.id) {
                                                            i.choice4 = e.target.value
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
                            setNumberOrder(preState=>(preState+=1))
                            console.log("number : ",numberOrder);
                            console.log("result : ",inputFields);
                            setInputFields([...inputFields, {
                                id: numberOrder,
                                question: "",
                                choice1: "",
                                choice2: "",
                                choice3: "",
                                choice4: "",
                                answer: "",
                            }])
                        }}>Thêm câu hỏi</button>
                    </ul>
                </div>

                <div className="flex justify-center items-center mt-14 mb-8">
                    <button className="mr-2 bg-[#1bff07]  px-6 py-2 text-white rounded-md" onClick={ handleCreateExam} >Tạo</button>
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