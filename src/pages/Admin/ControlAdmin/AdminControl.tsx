import React, { useEffect, useState } from "react";
import docsApi from "../../../api/docsApi";
import accountsApi from "../../../api/accountsApi";
import examsApi from "../../../api/examsApi";
import {
  AvatarAdmin,
  IconAdminOther,
  IconRefresh,
  IconTrash,
} from "../icon/IconAdminPage";
import ModalDel from "./Modal/ModalDel";
import ModalCreateDoc from "./Modal/ModalCreateDoc";
import ModalCreateTest from "./Modal/ModalCreateTest";

interface user {
  nameAdmin: string;
}

function ControlAdmin(props: user) {
  const [activeAdmin, setActiveAdmin] = useState("Tai Lieu");
  // open modal delete
  const [modalDelOpen, setModalDelOpen] = useState(false);
  // open modal create doc
  const [modalCreateDoc, setModalCreateDoc] = useState(false);
  // open modal create test
  const [modalCreateTest, setModalCreateTest] = useState(false);
  // data document after get from api
  const [docsList, setDocList] = useState([]);
  // list of account after get from api
  const [accountsList, setAccountsList] = useState([]);
  // data exam after get from api
  const [examsList, setExamsList] = useState([]);
  // id item delete
  const [idDelete, setIdDelete] = useState("");
  // refresh after add or delete data
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchExamList = async () => {
      try {
        const response = await examsApi.getAll();
        setExamsList(response.data.exams);
      } catch (err) {
        console.log("Fetch api exams ", err);
      }
    };
    fetchExamList();
  }, [modalDelOpen, modalCreateTest, refresh]);

  useEffect(() => {
    console.log("docList", docsList);
    const fetchDocsApi = async () => {
      try {
        const response = await docsApi.getAll();
        setDocList(response.data.docs);
      } catch (err) {
        console.log("fetch api doc error : ", err);
      }
    };

    fetchDocsApi();
  }, [modalCreateDoc, modalCreateDoc, refresh]);

  useEffect(() => {
    const fetchAdminApi = async () => {
      try {
        const response = await accountsApi.getAll();
        setAccountsList(response.data.accounts);
      } catch (err) {
        console.log("Fetch api admin : ", err);
      }
    };
    fetchAdminApi();
  }, []);

  const TitleComponent = () => {
    return (
      <>
        {TITLE &&
          TITLE.map((value, index) => {
            return (
              <h1
                className={
                  (index != 0 && "ml-8") +
                  " cursor-pointer font-bold text-xl text-white " +
                  (activeAdmin === value && "underline underline-offset-2")
                }
                onClick={() => setActiveAdmin(value)}
              >
                {value}
              </h1>
            );
          })}
      </>
    );
  };

  const TITLE = ["Tai Lieu", "Bai Thi", "Tai Khoan"];
  return (
    <div className="">
      <div className="mx-32  border-[#00C5FF] border-4 border-b-0 rounded-t-2xl">
        <div className="flex p-3">
          <div className="cursor-pointer">
            <AvatarAdmin />
          </div>
          <h1 className="font-bold text-2xl mt-2 ml-5 text-[#00C5FF]">
            {props.nameAdmin}
          </h1>
        </div>
        <div className="pl-4 bg-[#00C5FF] flex py-5 ">
          <TitleComponent />
        </div>
      </div>

      <div className="pt-5 h-96 border-4  border-[#00C5FF] border-b-0 mx-32 overflow-y-auto pl-5 leading-8">
        <div className={activeAdmin === "Tai Lieu" ? "" : "hidden"}>
          {docsList.map((val, key) => {
            return (
              <div className="flex " key={key}>
                <div
                  className="mt-2 mr-3 cursor-pointer"
                  onClick={() => {
                    setModalDelOpen(true);

                    setIdDelete(val["_id"]);
                  }}
                >
                  <IconTrash />
                </div>
                <h1 className="hover:underline hover:text-[#00C5FF] hover:font-bold  cursor-pointer">
                  {key + 1}. {val["subject"]}
                </h1>
              </div>
            );
          })}
        </div>
        <div className={"" + activeAdmin === "Bai Thi" ? "" : "hidden"}>
          {examsList.map((val, key) => {
            return (
              <div className="flex" key={val["_id"]}>
                <div
                  className="mt-2 mr-3 cursor-pointer"
                  onClick={() => {
                    setModalDelOpen(true);
                    setIdDelete(val["_id"]);
                  }}
                >
                  <IconTrash />
                </div>
                <h1 className="hover:underline hover:text-[#00C5FF] hover:font-bold cursor-pointer">
                  {key + 1}. {val["subject"]}
                </h1>
              </div>
            );
          })}
        </div>
        <div className={activeAdmin === "Tai Khoan" ? "" : "hidden"}>
          {accountsList.map((val, key) => {
            return (
              <div className="flex" key={val["_id"]}>
                <div className="mt-2 mr-3 cursor-pointer">
                  <IconAdminOther />
                </div>
                <h1 className="hover:underline hover:text-[#00C5FF] hover:font-bold cursor-pointer">
                  {val["AccountAdmin"]}
                </h1>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-32 border-4  border-[#00C5FF] border-t-0 p-3 rounded-b-2xl flex">
        <div className={activeAdmin === "Tai Lieu" ? "" : "hidden"}>
          <button
            className={
              "bg-[#00C5FF] p-2 border-2  rounded-lg text-white hover:border-black"
            }
            onClick={() => {
              setModalCreateDoc(true);
            }}
          >
            Thêm tài liệu
          </button>
        </div>
        <div className={"" + activeAdmin === "Bai Thi" ? "" : "hidden"}>
          <button
            className={
              "bg-[#00C5FF] p-2 border-2  rounded-lg text-white hover:border-black"
            }
            onClick={() => {
              setModalCreateTest(true);
            }}
          >
            Thêm bài thi
          </button>
        </div>
        <div
          className="ml-6 cursor-pointer"
          onClick={() => setRefresh(!refresh)}
        >
          <IconRefresh />
        </div>
      </div>

      <div className="">
        {modalDelOpen && (
          <ModalDel
            setModalOpen={setModalDelOpen}
            thingDelete={activeAdmin}
            idDelete={idDelete}
          />
        )}
      </div>
      <div className="">
        {modalCreateDoc && (
          <ModalCreateDoc setModalCreateOpen={setModalCreateDoc} />
        )}
      </div>
      <div className="">
        {modalCreateTest && (
          <ModalCreateTest
            setModalCreateTest={setModalCreateTest}
            adminCreate={props.nameAdmin}
          />
        )}
      </div>
    </div>
  );
}

export default ControlAdmin;
