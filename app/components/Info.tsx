import React from "react";
import buildingsAndRooms from "../../public/buildings-rooms.json";
import {getToday, getCurrentTime} from "../utils";

const buildings = buildingsAndRooms.map((obj) => obj.buildingNumber );
const today = getToday();
const currentTime = getCurrentTime();


type Props = {
  changeDay: (newDay:string) => void,
  changeBuilding: (newBuilding:string) => void,
  changeStartTime: (newStartTime: string) => void,
  changeEndTime: (newSEndTime: string) => void,
  missingBuilding: boolean,
  timeError: boolean
}

const Info = ({changeDay, changeBuilding, changeStartTime, changeEndTime, missingBuilding, timeError}: Props) => {
  
    return (
            <div className="grid grid-cols-2 gap-y-10 gap-x-[30px] md:gap-x-[55px]">

              <select name="select-day"
               id="select-day" 
               className="border-2 h-8 border-secondary focus:border-primary rounded text-slate-400 text-sm md:text-base text-center bg-transparent"
               onChange={e => changeDay(e.target.value)}
               >
                <option value={today}>Today</option>
                <option value="U">U</option>
                <option value="M">M</option>
                <option value="T">T</option>
                <option value="W">W</option>
                <option value="R">R</option>
              </select>


              <select name="select-building" 
              id="select-building" 
              className={`border-2 h-8 focus:border-primary rounded  text-slate-400 bg-transparent
              text-sm md:text-base text-center ${missingBuilding? "border-my-red": "border-secondary"}`}
              onChange={e => changeBuilding(e.target.value)}
             >
                <option value="">Building</option>
                {buildings.map((building)=> <option key={building} value={building}>{building}</option>)}
              </select>

              <input type="time" name="start-time" id="start-time" defaultValue={currentTime}
              className={`border-2 h-8 focus:border-primary rounded bg-transparent
            text-slate-400 text-sm md:text-base ${timeError? " border-my-red" :"border-secondary"}`} 
              onChange={e => changeStartTime(e.target.value)}/>

              <input type="time" name="end-time" id="end-time" 
              className={`border-2 h-8 focus:border-primary rounded bg-transparent
              text-slate-400 text-sm md:text-base ${timeError?"border-my-red" :"border-secondary"}`}  
              onChange={e => changeEndTime(e.target.value)}/>

            </div>
        )
}

export default Info;