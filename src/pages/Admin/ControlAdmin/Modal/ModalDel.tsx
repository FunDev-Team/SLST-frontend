import { AiOutlineCloseCircle } from 'react-icons/ai';
import docsApi from '../../../../api/docsApi';
import examsApi from '../../../../api/examsApi';

function ModalDel({ setModalOpen,thingDelete, idDelete } : any) {
    return (
        <div className="flex justify-center items-center fixed z-10 inset-0 bg-indigo-600 bg-opacity-25">
            <div className=" w-96 h-[23rem] bg-white rounded-lg relative">
                <button className="absolute top-2 right-3 bg-[#ff2507] font-bold p-1 px-2 rounded-md text-white"
                onClick={()=>setModalOpen(false)}>
                    X
                </button>
                <div className="  rounded-xl ">
                    <h1 className="mt-16 mb-6 px-8 text-center font-inter text-2xl font-bold ">Bạn có chắc chắn muốn xóa tài liệu này ? </h1>
                    <AiOutlineCloseCircle className="m-auto text-8xl text-[#ff2507]" />
                    <div className="flex mt-8 justify-center items-center">
                        <button className="bg-[#1bff07] mr-2 px-6 py-2 text-white rounded-md" 
                        onClick={()=>{
                            if(thingDelete==="Tai Lieu")
                            {
                                docsApi.delete(idDelete);
                                setModalOpen(false);
                            }else if(thingDelete==="Bai Thi")
                            {
                                examsApi.delete(idDelete);
                                setModalOpen(false);
                            }
                        }}>Xóa</button>
                        <button className="bg-[#ff2507] ml-2 px-6 py-2 text-white rounded-md" 
                        onClick={()=>setModalOpen(false)}>
                            Hủy
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ModalDel;