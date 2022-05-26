import { IconProps } from "@mui/material";
import { ComponentType, ReactElement, useState } from "react";
import {LogoDoc,LogoQuestion,LogoUpdate,LogoObject} from "./icon/IconHomePage";



const converToComponent=(stringComponent : string, color : boolean)=>
{
    
   switch(stringComponent){
        case "LogoDoc":
                return     <LogoDoc colors={color == true ? "#12B0DF" : "#b5bcc6"} />
        case "LogoQuestion" :
            return   <LogoQuestion colors={color == true ? "#12B0DF" : "#b5bcc6"} />
        case "LogoUpdate":
            return   <LogoUpdate colors={color == true ? "#12B0DF" : "#b5bcc6"} />
        case "LogoObject":
            return   <LogoObject colors={color == true ? "#12B0DF" : "#b5bcc6"} />
    }   

   
}

export function UsableItem(props:{tittle:string, icon:string}) {
    const [colors, setColor] = useState(false);

    return (
        <div>
              <div
          className="hover:bg-[#daf7fd] hover:border-[#12B0DF] rounded-[40px] h-80 cursor-pointer  border border-[#b5bcc6] px-5"
          onMouseOver={() => {
            setColor(true);
          }}
          onMouseOut={() => {
            setColor(false);
          }}
        >
          <div
            className={
              "mt-10 flex justify-center  " 
            }
          >
            <div className={"" +
              (colors == true ? "bg-white rounded-[2.5rem] max-w-7xl px-6  py-9" : "bg-[#e9fafd] rounded-[2.5rem] px-6 py-9")+""}>
                 {converToComponent(props.icon,colors)}
            </div>
           
          </div>
          <h4 className="text-center mt-14 text-[#818c9b] font-inter text-[1rem] font-semibold">{props.tittle}</h4>
        </div>
        </div>
    );
}

