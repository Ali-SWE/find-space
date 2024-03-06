import sectinos from "../public/sections.json";
import buildingsAndRooms from "../public/buildings-rooms.json";

//This function find the available rooms
export function findAvailableRooms(day: string, building: string, startTime: string, endTime: string): {building: string, rooms: string[]}[]{
  let newList: {building: string, rooms: string[]}[] = []
  
  const remainingRooms: string[] = getRoomsFromBuilding(building) // initalized to all rooms in the building

  type ObjectKey = keyof typeof sectinos;
  const buildingObject = sectinos[day as ObjectKey]
  type ObjectKey2 = keyof typeof buildingObject;


  if(building !== "0"){ // one building only
    let availableRooms: string[] = []

    if(day === "F" || day === "S"){ // weekend
      for(let r of remainingRooms){ 
        availableRooms.push(r)
      }
      newList.push({building: building, rooms: availableRooms})
      return newList
    }
    
    
    const roomObject = buildingObject[building as ObjectKey2]
    type ObjectKey3 = keyof typeof roomObject;

    for(let room in roomObject){

      for (let index = 0; index < remainingRooms.length; index++) {
        if(room == remainingRooms[index]){
          remainingRooms.splice(index,1)
          break
        }
        
      }

      if(isRoomAvailable(roomObject[room as ObjectKey3], startTime, endTime)){
        availableRooms.push(room)
      }
    }

    for(let r of remainingRooms){ // add rooms that doesnt have any classes on this day in this building
      availableRooms.push(r)
    }

    if(availableRooms.length !== 0){
      newList.push({building: building, rooms: availableRooms})
    }
    

  }

  return newList

}

function isRoomAvailable(roomTimes: string[][], startTime: string, endTime: string): boolean{
  
  for (let intervalArray of roomTimes) {
    const classStart = intervalArray[0]
    const classEnd = intervalArray[1]
    if(checkTimeConflict(startTime, endTime, classStart, classEnd)){
      return false
    }
  }
  
  return true;
}

function checkTimeConflict(startTime: string, endTime: string, classStart: string, classEnd: string): boolean{
  
  const startDateTime = new Date();
  const classStartDateTime = new Date();
  const classEndDateTime = new Date();

  // Parse the input time strings into Date objects
  const [startHour, startMinute] = startTime.split(":").map(Number);
  startDateTime.setHours(startHour, startMinute, 0, 0);

  const [classStartHour, classStartMinute] = classStart.split(":").map(Number);
  classStartDateTime.setHours(classStartHour, classStartMinute, 0, 0);

  const [classEndHour, classEndMinute] = classEnd.split(":").map(Number);
  classEndDateTime.setHours(classEndHour, classEndMinute, 0, 0);

  // Check for time conflict
  if(endTime === ""){ // if endtime is not provided
    return startDateTime >= classStartDateTime && startDateTime < classEndDateTime
  }

  // if end time is provided
  const endDateTime = new Date();
  const [endHour, endMinute] = endTime.split(":").map(Number);
  endDateTime.setHours(endHour, endMinute, 0, 0);

  if (startDateTime >= classStartDateTime && startDateTime < classEndDateTime) {
    return true;
  }
    
  if (endDateTime > classStartDateTime && endDateTime <= classEndDateTime) {
    return true;
  }
    
  if (classStartDateTime >= startDateTime && classStartDateTime < endDateTime) {
    return true;
  }
    
  if (classEndDateTime > startDateTime && classEndDateTime <= endDateTime) {
    return true;
  }
  
  return false;
}

export function isTimeError(startTime: string, endTime: string): boolean{
  if(startTime === ""){
    return true
  }else if(endTime === ""){
    return false
  }
  else{
    const startDateTime = new Date();
    const [startHour, startMinute] = startTime.split(":").map(Number);
    startDateTime.setHours(startHour, startMinute, 0, 0);

    const endDateTime = new Date();
    const [endHour, endMinute] = endTime.split(":").map(Number);
    endDateTime.setHours(endHour, endMinute, 0, 0);

    return endDateTime < startDateTime

  }
}
  
function getRoomsFromBuilding(building: string | number): string[] {
  for(let obj of buildingsAndRooms){
    if(obj.buildingNumber == building){
      return obj.rooms
    }
  }
  return []
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

export function getCurrentTimePlusOneHour():string {
  const d = new Date()

  let hours: number | string = d.getHours() +1
  let minutes: number | string = d.getMinutes()

  if(hours < 10){
    hours = "0" + hours.toString()
  }

  if(minutes < 10){
    minutes = "0" + minutes.toString()
  }
  
  return hours + ":" + minutes
}

