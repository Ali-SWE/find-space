"use client"
import Overview from "./components/Overview";
import Info from "./components/Info";
import Table from "./components/Table";
import Button from "./components/Button";
import {useState} from "react";
import {getToday, getCurrentTime, findAvailableRooms, isTimeError} from "./utils";


let day = getToday()
let building = "0"
let startTime = getCurrentTime()
let endTime = ""

export default function Home() {

  type myListType ={
    building: string,
    rooms: string[]
  }
  const [myList, setList] = useState<myListType[] | null>(null); 
  const [missingBuilding, setMissingBuilding] = useState(false)
  const [timeErorr, setTimeErorr] = useState(false)
  
  const findHandler = () => {
    if(building === "0"){ // no building is chosen
      setMissingBuilding(true)
    }
    else{
      setMissingBuilding(false)
    }
    let inputTimeError = isTimeError(startTime, endTime)
    if(inputTimeError){ // end time is more than start time or start time is empty
      setTimeErorr(true)
    }
    else{
      setTimeErorr(false)
    }
    if( building !== "0" && !inputTimeError){
      const newList = findAvailableRooms(day, building, startTime, endTime)  
      setList(newList)
    }
    
  }
  
  const changeDay = (newDay:string) => {
      day = newDay;
  }

  const changeBuilding = (newBuilding: string) =>{
    if(newBuilding === ""){
      building = "0"
    }
    else{
      building = newBuilding;
    }
  }

  const changeStartTime = (newStartTime: string) =>{
    startTime = newStartTime;

  }
  
  const changeEndTime = (newEndTime: string) =>{
    endTime = newEndTime;
  }
  
  return (
    <div className="flex flex-col items-center justify-between px-24 mt-5 mb-5">
      <Overview/>
      <div className="box-border grid grid-cols-1 gap-y-8 justify-items-center mb-3
      border-2 w-[80vw] md:w-[500px] border-primary p-[34px] rounded-[10px]">
          <Info changeDay = {changeDay} changeBuilding = {changeBuilding} changeStartTime = {changeStartTime} changeEndTime = {changeEndTime} missingBuilding = {missingBuilding} timeError = {timeErorr} />
          <Button findHandler= {findHandler} />
      </div>
      <Table myList={myList} />
    </div>
  );
}
