import { useState } from 'react';
import docsApi from '../../../../api/docsApi';

function ModalCreateDoc({setModalCreateOpen}:any )  {
        // handle day/month/year
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1; //months from 1-12
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        const newdate = day + "/" + month + "/" +year ;

        const [createDoc,setCreateDoc] = useState({
            subject: "",
            LinkDrive: "",
            teacher: "",
            DOC: newdate,
        });
        // post infor document have just inputed 
        const postApiDocs=()=>{
            try {
                docsApi.post(createDoc);
                console.log("Post successfully");
                setModalCreateOpen(false);

            }catch(err)
            {
                console.log("Post docs fail : ",err);
            }
        }

        // handle while input subject
        const handleSubject=(e : any)=>{
            const { value } = e.target;
            setCreateDoc(prevState=>({
                ...prevState,
                subject: value
            }))
        }
        // handle while input docs
        const handleDocs=(e : any)=>{
            const {  value } = e.target;
            setCreateDoc(prevState=>({
                ...prevState,
                LinkDrive: value
            }))
        }
        // handle while input name teacher
        const handleTeacher=(e:any)=>{
            const { value } = e.target;
            setCreateDoc(prevState=>({
                ...prevState,
                teacher: value
            }))
        }
        
       
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
                    <input type="text" className='border-[#00C5FF] border-2 rounded-md outline-none ml-4 w-72 h-8' value={createDoc.subject} onChange={handleSubject}/>
                  </li>
                  <li className="flex mx-5 my-6">
                    <h1 className="ml-5">Giảng viên</h1>
                    <input type="text"  className='border-[#00C5FF] border-2 rounded-md outline-none ml-8 w-72 h-8'  value={createDoc.teacher} onChange={handleTeacher} />
                  </li>
                  <li className="flex mx-5 my-6">
                    <h1 className="ml-5">
                        Tài Liệu
                    </h1>
                    <input type="text" className='border-[#00C5FF] border-2 rounded-md outline-none ml-14 w-72 h-8' value={createDoc.LinkDrive} onChange={handleDocs} />
                  </li>
              </ul>
                
                <div className="flex justify-center items-center mt-14">
                    <button className="mr-2 bg-[#1bff07]  px-6 py-2 text-white rounded-md" onClick={postApiDocs} >
                        Tạo
                    </button>
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