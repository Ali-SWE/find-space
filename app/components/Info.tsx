import React from "react";
import buildingsAndRooms from "../../public/buildings.json";
import {getToday} from "../utils"

const buildings = buildingsAndRooms.map((obj) => obj.buildingNumber )
const today = getToday();

const Info: React.FC = () => {
    return (
            <div className="grid grid-cols-2 gap-y-10 gap-x-[30px] md:gap-x-[55px]">

              <select name="select-day" id="select-day" className="border-2 border-secondary focus:border-primary rounded text-slate-400 text-xs md:text-base">
                <option value="">Today</option>
                <option value="U">U</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="W">W</option>
                <option value="R">R</option>
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