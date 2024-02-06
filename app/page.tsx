import Table from "./components/Table";
import {generateHoursList, fetchData} from "./utils";

const buildings = [3,4,5,11,14,22,24,59,63]
const hoursList = generateHoursList()
fetchData()
const selectData = [
  {
    nameAndId:"select-day",
    text:"Day",
    list: ["U", "M", "T", "W", "R"]
  },
  {
    nameAndId:"select-building",
    text:"Building",
    list: [3,4,5,11,14,22,24,59,63]

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

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-24 mt-5 mb-5">
      {/* <div className="flex gap-5 mb-10">
      {
        selectData.map(data =>(
          <div className="flex flex-row gap-3">
            <select name={data.nameAndId} id={data.nameAndId} className="border-2 border-black rounded text-slate-700">
              <option value="" disabled selected hidden>
              {data.text}
              </option>
              {data.list.map(item =>
                <option key={item} value={item}>{item}</option>
              )}    
            </select>
          </div>
        ))
      }
      </div> */}
      <Table/>
      
    </div>
  );
}
