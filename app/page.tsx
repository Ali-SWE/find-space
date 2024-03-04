"use client"
import Overview from "./components/Overview";
import Info from "./components/Info";
import Table from "./components/Table";
import Button from "./components/Button";
import {useState} from "react";
import {getToday, getCurrentTime, findAvailableRooms} from "./utils";


let day = getToday()
let building = "0"
let startTime = getCurrentTime()
let endTime = ""

export default function Home() {

  const [myList, setList] = useState([{building:"24", rooms: ["120", "130", "131"]},{building:"22", rooms: ["125"]}]); 
  
  const findHandler = () => {
    if(building === "0"){ // no building is chosen

    }else{
      const newList = findAvailableRooms(day, building, startTime, endTime)
      setList(newList)
    }
  }
  
  const changeDay = (newDay:string) => {
      day = newDay;

  }

  const changeBuilding = (newBuilding: string) =>{
    building = newBuilding;

  }
  const changeStartTime = (newStartTime: string) =>{
    startTime = newStartTime;

  }
  const changeEndTime = (newEndTime: string) =>{
    endTime = newEndTime;
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
