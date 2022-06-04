import { useEffect, useState } from "react";
import {IconSearch} from "./icon/IconDocumentPage";
import { ItemDocument } from "../../components/ItemDocument";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import docsApi from '../../api/docsApi'

function TaiLieu() {
  // state khi nhập giá trị search
  const [searchTerm, setSearchTerm] = useState("");
  const [productList,setProductList]=useState([]);

  useEffect(()=>{
   const fetchDocs=async()=>{
     try{
      const response=await docsApi.getAll();
      // console.log(" deo phai state ",response.data.docs[0].name);
      setProductList(response.data.docs);     
        // console.log(typeof response.data.docs);
     }catch(err)
     {
       console.log(err);
     }
   }
   fetchDocs();
  },[])
 
  return (
    <>
      <Header />
      <div className="text-center py-28 bg-[#E5FAFF]">
        <h1 className="font-inter font-bold text-6xl text-[#00C5FF]">
          Tài Liệu Học Tập
        </h1>
        <h2 className="mt-10 font-inter font-medium text-xl">
          Chúng tôi mang đến sự tiện lợi và đơn giản
        </h2>
      </div>
      <div className=" flex justify-center items-center  mt-16 flex-col relative">
        
        <div className="flex border-[#12B0DF] border-2  rounded-xl ">
          <div className="pt-2 border-solid px-3   bg-[#12B0DF] cursor-pointer rounded-tl-xl rounded-bl-xl -ml-[0.1rem] -my-[0.1rem]">
            <IconSearch />
          </div>
          <input
            type="text" placeholder="Nhập môn học cần tìm kiếm"
            className="border-none  rounded-md  w-[25rem] h-10 outline-none ml-2"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              // set state giá trị vừa nhập ở bar search
            }}
          />
        </div>

        <div className="grid grid-cols-3 mt-16 gap-x-20 gap-y-10">
          {productList
            .filter((val) => {
              // nếu searchTerm " " thì tiến thanh return tất cả value
              if (searchTerm === "") return val;
              else if ( String(val['subject']).toLowerCase().includes(searchTerm.toLowerCase())) 
              {
                return val;
              }})
            .map((val, key) => {
              return ( // render môn học
                <div className="" key={key}>
                  <ItemDocument  LinkDrive={val['LinkDrive']} subject= {val['subject']} teacher={val['teacher']} DOC={val['DOC']}  />
                </div>
              );
            })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default TaiLieu;
