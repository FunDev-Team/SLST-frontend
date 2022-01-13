import { forwardRef, useEffect, useState } from "react"
import "./index.css"
import JSON from './db.json'
import IconChoice from "./icon/IconChoice"
import { BsFillXSquareFill } from 'react-icons/bs';
import { ExitModal } from "./MessageModal/ExitModal";
import { ReactDimmer } from "./ReactDimmer";
import { SubmitModal } from "./MessageModal/SubmitModal";
import IconCorrect from "./icon/IconCorrect";
import IconWrong from "./icon/IconWrong";


interface IModalProps {
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
    idx: number
}

export const TestModal = ({ closeModal, idx }: IModalProps) => {

    const [score, setScore] = useState(0)
    const [modalExitOpen, setModalExit] = useState(false)
    const [modalSubmitOpen, setModalSubmit] = useState(false)

    const [answers, setAnswers] = useState([{
        question: '',
        choice: '',
        answer: ''
    }])

    const json = JSON.test[idx]
    const total = json.questions.length

    const handleClickExit = () => {
        setModalExit(preState => !preState)
    }

    // handle khi người dùng chọn đáp án
    const handleChoiceAnswer = (question: string, choice: string, answer: string) => {

        // kiểm tra nếu người dùng đã làm câu hỏi này rồi
        const exist = answers.filter((item) => {
            if (item.question === question)
                return item
        })

        if (exist.length > 0)
            return

        // Nếu câu hỏi chưa được làm thì set lại lựa chọn của người dùng
        setAnswers(prev => {
            const newitem = [...prev, {
                question,
                choice,
                answer
            }]

            return newitem
        })
    }

    // handle reander các phương án
    const handleRenderChoice = (question: string, choice: string) => {
        const exist = answers.filter((item) => {
            if (item.question === question)
                return item
        })

        if (exist.length <= 0) {
            return <IconChoice />;
        }
        else {
            if (choice === exist[0].answer) {
                return <IconCorrect />
            }
            else {
                if (choice !== exist[0].choice) {
                    return <IconChoice />
                }
                else {
                    return <IconWrong />
                }
            }
        }
    }


    return (
        <>
            <div>
                {modalExitOpen && <ExitModal closeModal={setModalExit} exitTest={closeModal} />}
                <ReactDimmer isOpen={modalExitOpen} exitDimmer={setModalExit} zIndex={60} blur={1} />

                {modalSubmitOpen && <SubmitModal closeModal={setModalSubmit} exitTest={closeModal}
                    score={score} total={total} />}
                <ReactDimmer isOpen={modalSubmitOpen} exitDimmer={setModalSubmit} zIndex={60} blur={1} />
            </div>

            <div className="grid fixed w-[60%] h-[95%] z-50 left-0 right-0 top-0 bottom-0 m-auto opacity-100 bg-white active
                            rounded-xl border-[3px] border-[#00C5FF]">
                {/* Exit */}
                <div className='row-span-1 flex justify-end mx-2 mt-2'>
                    <BsFillXSquareFill className="text-cyan-700 hover:text-red-500 text-xl cursor-pointer"
                        onClick={handleClickExit}
                    />
                </div>

                <div className="row-span-1 block m-auto text-center text-3xl text-[#00C5FF] font-semibold">
                    <h2>{json.subject}</h2>
                </div>

                {/* Questions */}
                <div className='row-span-3 grid px-6 mt-6 font-medium text-lg overflow-hidden overflow-y-scroll'>
                    {
                        json.questions.map((itemQues, idx) => {

                            return (
                                <div className="my-2">
                                    <h3>Câu {idx + 1}. {itemQues.question}</h3>
                                    <ul className="mx-3">
                                        <li className="flex text-center my-2 cursor-pointer"
                                            onClick={() => {
                                                handleChoiceAnswer(idx.toString(), 'choice1', itemQues.answer)
                                                if (itemQues.answer === 'choice1') setScore(prev => prev + 1)
                                            }}
                                        >
                                            {handleRenderChoice(idx.toString(), 'choice1')}
                                            <p className="ml-4 leading-5">{itemQues.choice1}</p>
                                        </li>

                                        <li className="flex text-center my-2 cursor-pointer"
                                            onClick={() => {
                                                handleChoiceAnswer(idx.toString(), 'choice2', itemQues.answer)
                                                if (itemQues.answer === 'choice2') setScore(prev => prev + 1)
                                            }}
                                        >
                                            {handleRenderChoice(idx.toString(), 'choice2')}
                                            <p className="ml-4 leading-5">{itemQues.choice2}</p>
                                        </li>

                                        <li className="flex text-center my-2 cursor-pointer"
                                            onClick={() => {
                                                handleChoiceAnswer(idx.toString(), 'choice3', itemQues.answer)
                                                if (itemQues.answer === 'choice3') setScore(prev => prev + 1)
                                            }}
                                        >
                                            {handleRenderChoice(idx.toString(), 'choice3')}
                                            <p className="ml-4 leading-5">{itemQues.choice3}</p>
                                        </li>

                                        <li className="flex text-center my-2 cursor-pointer"
                                            onClick={() => {
                                                handleChoiceAnswer(idx.toString(), 'choice4', itemQues.answer)
                                                if (itemQues.answer === 'choice4') setScore(prev => prev + 1)
                                            }}
                                        >
                                            {handleRenderChoice(idx.toString(), 'choice4')}
                                            <p className="ml-4 leading-5">{itemQues.choice4}</p>
                                        </li>
                                    </ul>
                                </div>
                            )
                        })
                    }


                </div>

                {/* Button */}
                <div className="row-span-1 flex h-11 justify-end mx-8">
                    <div className="mx-6 my-auto text-white text-center cursor-pointer border-slate-600 border-[1px]
                bg-orange-400 w-16 h-8 leading-8 rounded-md hover:bg-orange-500"
                        onClick={handleClickExit}
                    >
                        Hủy bỏ
                    </div>

                    <div className="my-auto text-slate-900 text-center cursor-pointer border-slate-600 border-[1px]
                 bg-teal-400 w-20 h-8 leading-8 rounded-md hover:bg-cyan-500 hover:text-white"
                        onClick={() => setModalSubmit(true)}
                    >
                        Nộp bài
                    </div>
                </div>
            </div>
        </>
    )
}

