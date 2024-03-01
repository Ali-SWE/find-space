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
            <div className="grid grid-cols-2 gap-y-10 gap-x-[30px] md:gap-x-[55px]">

              <select name="select-day" id="select-day" className="border-2 border-secondary focus:border-primary rounded text-slate-400 text-xs md:text-base">
                <option value="">Today</option>
                <option value="">U</option>
                <option value="">M</option>
                <option value="">T</option>
                <option value="">W</option>
                <option value="">R</option>
              </select>

              <select name="select-building" id="select-building" className="border-2 border-secondary focus:border-primary rounded text-slate-400 text-xs md:text-base">
                <option value="">Building</option>
                {buildings.map((building)=> <option value={building}>{building}</option>)}
              </select>

              <select name="" id="" className="border-2 border-secondary focus:border-primary rounded text-slate-400 text-xs md:text-base">
                <option value="">
                  
                </option>
              </select>
              <select name="" id="" className="border-2 border-secondary focus:border-primary rounded text-slate-400 text-xs md:text-base">
                <option value="">
                  
                </option>
              </select>

            </div>
        )
}

export default Info;