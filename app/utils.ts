import sectinos from "../public/sections.json";


//This function find the available rooms
export function findAvailableRooms(day: string, building: number, startTime: string, endTime: string): {building: number, rooms: string[]}[]{
  let newList: {building: number, rooms: string[]}[] = []
  
  
  if(building !== 0){ // one building only
    newList.push({building:3, rooms: ["10", "20"]})
    
    

  }else{ // all buildings
    newList.push({building: 10, rooms: ["1","2"]})

  }

  return newList

}





// This function gets the first letter of the current day
export function getToday(): string {
  const intDay = new Date().getDay()
  
  switch(intDay){
    case 0:
      return "U"
    case 1:
      return "M"
    case 2:
      return "T"
    case 3:
      return "W"
    case 4:
      return "R"
    case 5:
      return "F"
    case 6:
      return "S"
  }
  return ""
}

// This function gets the current time
export function getCurrentTime():string {
  const d = new Date()

  let hours: number | string = d.getHours()
  let minutes: number | string = d.getMinutes()

  if(hours < 10){
    hours = "0" + hours.toString()
  }

  if(minutes < 10){
    minutes = "0" + minutes.toString()
  }
  
  return hours + ":" + minutes
}

