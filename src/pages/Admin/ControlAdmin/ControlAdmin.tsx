import React, { useEffect, useState } from 'react';
// import admin from '../db.json';
// import docx from '../../TaiLieu/db.json'
// import test from '../../Exam/db.json'
import docsApi from '../../../api/docsApi';
import accountsApi from '../../../api/accountsApi';
import examsApi from '../../../api/examsApi';
import AvatarAdmin from "../Icon/AvatarAdmin"
import IconTrash from "../Icon/IconTrash"
import IconOtherAdmin from "../Icon/IconAdminOther"
import IconAdminOther from '../Icon/IconAdminOther';
import ModalDel from "./Modal/ModalDel"
import ModalCreateDoc from "./Modal/ModalCreateDoc"
import ModalCreateTest from './Modal/ModalCreateTest'
import IconRefresh from "../Icon/IconRefresh"

interface user{
    nameAdmin : string;
}
function ControlAdmin(props : user) {
    const [activeAdmin,setActiveAdmin]=useState("Tai Lieu");
    const [buttonAdd,setButtonAdd]=useState("Tai Lieu");
    const [modalDelOpen,setModalDelOpen]=useState(false);
    const [modalCreateDoc,setModalCreateDoc]=useState(false);
    const [modalCreateTest, setModalCreateTest]=useState(false);
    const [docsList,setDocList]=useState([])
    const [accountsList,setAccountsList]=useState([])
    const [examsList,setExamsList]=useState([]);
    const [idDelete,setIdDelete]=useState('')
    const [thingDelete,setThingDelete]=useState('');
    const [refesh,setRefesh]=useState(false);


    useEffect(()=>{
        const fetchExamList=async()=>{
            try{
                const respone = await examsApi.getAll();
                setExamsList(respone.data.exams);
            }catch(err)
            {
                console.log("Fetch api exams ",err);
            }
        }
        fetchExamList();
    },[ modalDelOpen,modalCreateTest,refesh])
    useEffect(()=>{
        const fetchAdminApi=async()=>{
            try{
                const respone = await accountsApi.getAll();
                setAccountsList(respone.data.accounts);
                
            }
            catch(err)
            {
                console.log("Fetch api admin : ",err)
            }
        }
        fetchAdminApi();
    },[])
    useEffect(()=>{
        console.log("docList", docsList);
        const fetchDocsApi=async()=>{
            try{
                const respone = await docsApi.getAll();
                console.log("api call : ",respone.data.docs)
                setDocList(respone.data.docs)
            }catch(err)
            {
                console.log("fetch api doc error : ",err)
            }
        }
        
        fetchDocsApi();
    },[ modalCreateDoc,modalCreateDoc,refesh])
    function clickTaiLieu()
    {
         
        setActiveAdmin("Tai Lieu")
        setButtonAdd("Tai Lieu");
    }
    function clickBaiThi(){
        setActiveAdmin("Bai Thi");
        setButtonAdd("Bai Thi");
    }
    function clickTaiKhoan()
    {
        setActiveAdmin("Tai Khoan");
        setButtonAdd("");
    }
    return (
        <div className=''>
            <div className="mx-32  border-[#00C5FF] border-4 border-b-0 rounded-t-2xl">
                <div className="flex p-3">
                    <div className="cursor-pointer">
                        <AvatarAdmin/>
                    </div>
                    <h1 className="font-bold text-2xl mt-2 ml-5 text-[#00C5FF]">
                        {props.nameAdmin}
                    </h1>
                </div>
                <div className="-ml-1 bg-[#00C5FF] flex py-5 ">
                    <h1 className={"ml-4 cursor-pointer font-bold text-xl text-white " +(activeAdmin==="Tai Lieu"?"underline underline-offset-2":"")}
                        onClick={()=>clickTaiLieu()}>
                        Tài liệu
                    </h1>
                    <h1 className="mx-4 text-white ">|</h1>
                    <h1 className={" cursor-pointer font-bold text-xl text-white " +(activeAdmin==="Bai Thi"?"underline underline-offset-2":"")}
                        onClick={()=>clickBaiThi()}>
                        Bài thi
                    </h1>
                    <h1 className="mx-4 text-white ">|</h1>
                    <h1 className={"cursor-pointer font-bold text-xl text-white "+ (activeAdmin==="Tai Khoan"?"underline underline-offset-2":"")}
                        onClick={()=>clickTaiKhoan()}>
                        Tài khoản
                    </h1>
                </div>
            </div>
            <div className="pt-5 h-96 border-4  border-[#00C5FF] border-b-0 mx-32 overflow-y-auto pl-5 leading-8">
               <div className={""+activeAdmin==="Tai Lieu"?"":"hidden"}>
                    {docsList.map((val,key)=>{
                        return( 
                            <div className="flex " key={key}>
                                <div className="mt-2 mr-3 cursor-pointer" onClick={()=>{
                                    setModalDelOpen(true);
                                    setThingDelete('tai lieu')
                                    setIdDelete(val['_id'])}}>
                                    <IconTrash />
                                </div>
                                <h1 className="hover:underline hover:text-[#00C5FF] hover:font-bold  cursor-pointer">{key+1}. {val['subject']}</h1>
                            </div>
                        )})}
               </div>
               <div className={""+activeAdmin==="Bai Thi"?"":"hidden"}>
                    {examsList.map((val,key)=>{
                        return( 
                            <div className="flex" key={val['_id']}>
                                <div className="mt-2 mr-3 cursor-pointer" onClick={()=>{setModalDelOpen(true); setThingDelete('bai thi'); setIdDelete(val['_id'])} }>
                                    <IconTrash/>
                                </div>
                                <h1 className="hover:underline hover:text-[#00C5FF] hover:font-bold cursor-pointer">{key+1}. {val['subject']}</h1>
                            </div>
                        )})}
               </div>
               <div className={""+activeAdmin==="Tai Khoan"?"":"hidden"}>
                    {accountsList.map((val,key)=>{
                        return( 
                            <div className="flex" key={val['_id']}>
                                <div className="mt-2 mr-3 cursor-pointer">
                                    <IconAdminOther/>
                                </div>
                                <h1 className="hover:underline hover:text-[#00C5FF] hover:font-bold cursor-pointer">
                                    {val['AccountAdmin']}
                                </h1>
                            </div>
                        )})}
               </div>
            </div>
            <div className="mx-32 border-4  border-[#00C5FF] border-t-0 p-3 rounded-b-2xl flex">
                <div className={""+buttonAdd==="Tai Lieu"?"":"hidden"}>
                    <button className={"bg-[#00C5FF] p-2 border-2  rounded-lg text-white hover:border-black"} 
                    onClick={()=>{setModalCreateDoc(true)}}>
                        Thêm tài liệu
                    </button>
                </div>
                <div className={""+buttonAdd==="Bai Thi"?"":"hidden"}>
                    <button className={"bg-[#00C5FF] p-2 border-2  rounded-lg text-white hover:border-black"} 
                    onClick={()=>{setModalCreateTest(true)}}
                    >
                        Thêm bài thi
                    </button>
                </div>
                <div className="ml-6 cursor-pointer" onClick={()=>setRefesh(!refesh)}><IconRefresh/></div>
                
            </div>
            <div className="">
                {
                    modalDelOpen && <ModalDel setModalOpen={setModalDelOpen} thingDelete={thingDelete} idDelete={idDelete}/>
                }        
            </div>
            <div className="">
                {
                    modalCreateDoc && <ModalCreateDoc setModalCreateOpen={setModalCreateDoc}   />
                    
                }
            </div>
            <div className="">
                {
                    modalCreateTest && <ModalCreateTest setModalCreateTest={setModalCreateTest} adminCreate= {props.nameAdmin} />
                }
            </div>
        </div>
      
    );
}

export default ControlAdmin;