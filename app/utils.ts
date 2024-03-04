import sectinos from "../public/sections.json";


//This function find the available rooms
export function findAvailableRooms(day: string, building: string, startTime: string, endTime: string): {building: string, rooms: string[]}[]{
  let newList: {building: string, rooms: string[]}[] = []
  
  type ObjectKey = keyof typeof sectinos;
  const buildingObject = sectinos[day as ObjectKey]
  type ObjectKey2 = keyof typeof buildingObject;


  if(building !== "0"){ // one building only
    const roomObject = buildingObject[building as ObjectKey2]
    type ObjectKey3 = keyof typeof roomObject;

    let availableRooms: string[] = []
    for(let room in roomObject){
      console.log(room)
      if(isRoomAvailable(roomObject[room as ObjectKey3], startTime, endTime)){
        availableRooms.push(room)
      }
    }
    
    newList.push({building: building, rooms: availableRooms})
    

  }else{ // all buildings
    newList.push({building: "10", rooms: ["1","2"]})

  }

  return newList

}

export function isRoomAvailable(roomTimes: string[][], startTime: string, endTime: string): boolean{
  
  for (let intervalArray of roomTimes) {
    const classStart = intervalArray[0]
    const classEnd = intervalArray[1]
    console.log(classStart + "**" +  classEnd)
    // if(isThereConflict(startTime, endTime, classStart, classEnd))
  }
  
  return true;
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

