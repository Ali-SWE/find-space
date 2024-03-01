"use client"
import Overview from "./components/Overview";
import Info from "./components/Info";
import Table from "./components/Table";
import Button from "./components/Button";
import { useState } from "react";


export default function Home() {

  const [myList, setList] = useState([{building:24, room: "120"},{building:22, room: "125"},{building:22, room: "125"},{building:22, room: "125"},{building:22, room: "125"},{building:22, room: "125"}]); 
  
  function findHandler(){
    setList([{building: 59, room:"1013"}])
  }
  
  return (
    <div className="flex flex-col items-center justify-between pt-[32px] px-24 mt-5 mb-5">
      <Overview/>
      <div className="box-border grid grid-cols-1 gap-y-8 justify-items-center mb-3
      border-2 w-[282px] md:w-[500px] border-primary p-[34px] rounded-[10px]">
          <Info/>
          <Button findHandler= {findHandler} />
      </div>
      <Table myList={myList} />
    </div>
  );
}
