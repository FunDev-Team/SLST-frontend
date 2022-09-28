import { useState } from "react";
import {IconDOC,IconTeacher} from "../assets/icon/IconDocumentPage";

export function ItemDocument(props:{LinkDrive:string,subject:string,teacher:string,DOC:string }) {
    const [onMouse,setOnMouse]=useState(false);
    return (
        <div>
             <div className="border-[3px] rounded-md border-[#7ce0ff] w-72 h-44 hover:scale-110 hover:border-[#5fc9e9] hover:bg-cyan-100 hover:border-4 font-inter"
                    onMouseOver={() => { setOnMouse(true); }}
                    onMouseOut={() => { setOnMouse(false); }} >
                    <a href={props.LinkDrive} target="_blank" className="" rel="noreferrer">
                      <div className="text-center mt-5 font-inter font-bold">
                        {props.subject}
                      </div>
                      <div className="flex mt-8 ml-4">
                        <IconDOC />
                        <h1 className="ml-3 font-inter">{props.teacher}</h1>
                      </div>
                      <div className="flex mt-4  ml-4">
                        <IconTeacher />
                        <h1 className="ml-3 font-inter">{props.DOC}</h1>
                      </div>
                      <h1 className={ "text-right font-inter  " + (onMouse === true ? "text-[#12B0DF] font-bold " : "") }>
                        Lấy tài liệu &rarr;{" "}
                      </h1>
                    </a>
                  </div>
        </div>
    );
}

