import React from "react";
import Button from "./Button";
import { generateHoursList } from "../utils";
import buildingsAndRooms from "../../public/buildings.json";

const buildings = buildingsAndRooms.map((obj) => obj.buildingNumber )

const hoursList = generateHoursList()



const selectData = [
  {
    nameAndId:"select-day",
    text:"Day",
    list: ["U", "M", "T", "W", "R"]
  },
  {
    nameAndId:"select-building",
    text:"Building",
    list: buildings

  },
  {
    nameAndId:"select-start-time",
    text:"Start Time",
    list: hoursList

  },
  {
    nameAndId:"select-end-time",
    text:"End Time",
    list: hoursList

  },
]

const Info: React.FC = () =>{
    return (
        <div className="box-border grid grid-cols-1 gap-y-8 justify-items-center mb-3
         border-2 w-[282px] md:w-[500px] border-primary p-[34px] rounded-[10px]">
            <div className="grid grid-cols-2 gap-y-10 gap-x-[30px] md:gap-x-[55px]">
            {
                selectData.map(data =>(
                            <select name={data.nameAndId} id={data.nameAndId} className="border-2 border-secondary focus:border-primary rounded text-slate-400 text-xs md:text-base">
                                <option value="">
                                    {data.text}
                                </option>
                                {data.list.map(item =>
                                    <option key={item} value={item}>{item}</option>
                                    )}    
                            </select>
                       
                    
                ))
            }
            </div>
            <Button/>
            
        </div>
        )
}

export default Info;