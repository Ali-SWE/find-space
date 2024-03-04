"use client"
import Overview from "./components/Overview";
import Info from "./components/Info";
import Table from "./components/Table";
import Button from "./components/Button";
import {useState} from "react";
import {getToday, getCurrentTime, findAvailableRooms} from "./utils";


let day = getToday()
let building = 0
let startTime = getCurrentTime()
let endTime = ""

export default function Home() {

  const [myList, setList] = useState([{building:24, room: "120"},{building:22, room: "125"},{building:22, room: "125"},{building:22, room: "125"},{building:22, room: "125"},{building:22, room: "125"}]); 
  
  const findHandler = () => { 
      const newList = findAvailableRooms(day, building, startTime, endTime)
      setList(newList)
  }
  
  const changeDay = (newDay:string) => {
      day = newDay;
      console.log(day)
  }

  const changeBuilding = (newBuilding: string) =>{
    building = parseInt(newBuilding);
    console.log(building)
  }
  const changeStartTime = (newStartTime: string) =>{
    startTime = newStartTime;
    console.log(startTime)
  }
  const changeEndTime = (newEndTime: string) =>{
    endTime = newEndTime;
    console.log(endTime)
  }
  
  return (
    <div className="flex flex-col items-center justify-between pt-[32px] px-24 mt-5 mb-5">
      <Overview/>
      <div className="box-border grid grid-cols-1 gap-y-8 justify-items-center mb-3
      border-2 w-[282px] md:w-[500px] border-primary p-[34px] rounded-[10px]">
          <Info changeDay = {changeDay} changeBuilding = {changeBuilding} changeStartTime = {changeStartTime} changeEndTime = {changeEndTime} />
          <Button findHandler= {findHandler} />
      </div>
      <Table myList={myList} />
    </div>
  );
}
