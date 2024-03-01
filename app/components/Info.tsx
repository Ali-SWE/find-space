import React from "react";
import buildingsAndRooms from "../../public/buildings.json";
import {getToday, getCurrentTime} from "../utils"

const buildings = buildingsAndRooms.map((obj) => obj.buildingNumber )
const today = getToday()
const currentTime = getCurrentTime()

const Info: React.FC = () => {
    return (
            <div className="grid grid-cols-2 gap-y-10 gap-x-[30px] md:gap-x-[55px]">

            <h2>{currentTime}</h2>
              <select name="select-day" id="select-day" className="border-2 border-secondary focus:border-primary rounded text-slate-400 text-xs md:text-base">
                <option value={today}>Today</option>
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

              <input type="time" name="start-time" id="start-time" value={currentTime} className="border-2 border-secondary focus:border-primary rounded text-slate-400 text-xs md:text-base" />

              <input type="time" name="end-time" id="end-time" className="border-2 border-secondary focus:border-primary rounded text-slate-400 text-xs md:text-base" />

              {/* <select name="" id="" className="border-2 border-secondary focus:border-primary rounded text-slate-400 text-xs md:text-base">
                <option value="">
                  
                </option>
              </select>
              <select name="" id="" className="border-2 border-secondary focus:border-primary rounded text-slate-400 text-xs md:text-base">
                <option value="">
                  
                </option>
              </select> */}

            </div>
        )
}

export default Info;