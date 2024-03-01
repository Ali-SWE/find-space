// import sectinos from "../public/sections.json";

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

