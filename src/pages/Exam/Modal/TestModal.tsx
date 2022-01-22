import { useState } from "react"
import "./index.css"
import { IconChoice, IconCorrect, IconWrong } from "../icon/IconsChoices"
import { BsFillXSquareFill } from 'react-icons/bs';
import { ExitMessage, SubmitMessage } from "./MessageModal";
import { BackgroundModal } from "./BackgroundModal";


interface IModalTest {
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
    Exam: any
}

export const TestModal = ({ closeModal, Exam }: IModalTest) => {

    const [score, setScore] = useState(0)

    // State modal
    const [modalExitOpen, setModalExit] = useState(false)
    const [modalSubmitOpen, setModalSubmit] = useState(false)

    // State answers from user
    const [answers, setAnswers] = useState([{
        question: '',
        choice: '',
        answer: ''
    }])

    const jsonQuestions = Exam.questions
    const totalQuestion = jsonQuestions.length


    // handle khi người dùng chọn đáp án
    const handleChoiceAnswer = (question: string, choice: string, answer: string) => {

        // kiểm tra nếu người dùng đã làm câu hỏi này rồi
        const exist = answers.filter((item) => {
            if (item.question === question)
                return item
        })

        if (exist.length > 0)
            return

        // Nếu câu hỏi chưa được làm thì add lựa chọn của người dùng
        setAnswers(prev => {
            const newitem = [...prev, {
                question,
                choice,
                answer
            }]

            return newitem
        })
    }

    // handle render các phương án
    const handleRenderChoice = (question: string, choice: string) => {
        const exist = answers.filter((item) => {
            if (item.question === question)
                return item
        })

        // Câu hỏi chưa làm
        if (exist.length <= 0) {
            return <IconChoice />;
        }
        else {
            // Phương án chọn đúng
            if (choice === exist[0].answer) {
                return <IconCorrect />
            }
            else {
                // Phương án không được chọn
                if (choice !== exist[0].choice) {
                    return <IconChoice />
                }
                // Phương án chọn sai
                else {
                    return <IconWrong />
                }
            }
        }
    }


    return (
        <>
            <div>
                {modalExitOpen && <ExitMessage closeModal={setModalExit} exitTest={closeModal} />}
                <BackgroundModal isOpen={modalExitOpen} exitDimmer={setModalExit} zIndex={60} blur={1} />

                {modalSubmitOpen && <SubmitMessage closeModal={setModalSubmit} exitTest={closeModal}
                    score={score} total={totalQuestion} />}
                <BackgroundModal isOpen={modalSubmitOpen} exitDimmer={setModalSubmit} zIndex={60} blur={1} />
            </div>

            <div className="grid fixed w-[60%] h-[95%] z-50 left-0 right-0 top-0 bottom-0 m-auto opacity-100 bg-white active
                            rounded-xl border-[3px] border-[#00C5FF]">
                {/* Exit */}
                <div className='row-span-1 flex justify-end mx-2 mt-2'>
                    <BsFillXSquareFill className="text-cyan-700 hover:text-red-500 text-xl cursor-pointer"
                        onClick={() => setModalExit(preState => !preState)}
                    />
                </div>

                <div className="row-span-1 block m-auto text-center text-3xl text-[#00C5FF] font-semibold">
                    <h2>{Exam.name}</h2>
                </div>

                {/* Questions */}
                <div className='row-span-3 grid px-6 mt-6 font-medium text-lg overflow-hidden overflow-y-scroll'>
                    {jsonQuestions.map((question: any, idx: number) => {
                        return (
                            <div className="my-2" key={idx}>
                                <h3>Câu {idx + 1}. {question.question}</h3>
                                <ul className="mx-3">
                                    {[question.choice1, question.choice2, question.choice3, question.choice4].map((choice, i) => {
                                        i = i + 1;
                                        return (
                                            <li className="flex text-center my-2 cursor-pointer" key={i}
                                                onClick={() => {
                                                    handleChoiceAnswer(idx.toString(), 'choice' + i.toString(), question.answer )
                                                    if (question.answer === 'choice' + i.toString()) setScore(prev => prev + 1)
                                                }}
                                            >
                                                {handleRenderChoice(idx.toString(), 'choice' + i.toString())}
                                                <p className="ml-4 leading-5">
                                                    {choice}
                                                </p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}


                </div>

                {/* Button */}
                <div className="row-span-1 flex h-11 justify-end mx-8">
                    <div className="mx-6 my-auto text-white text-center cursor-pointer border-slate-600 border-[1px]
                bg-orange-400 w-16 h-8 leading-8 rounded-md hover:bg-orange-500"
                        onClick={() => setModalExit(preState => !preState)}
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

