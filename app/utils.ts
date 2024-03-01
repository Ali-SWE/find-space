// import sectinos from "../public/sections.json";

// This function generate list of hours
export function generateHoursList(): string[] {
  const hours: string[] = [];
    for (let i = 7; i < 22; i++) {
      const formattedHour = i.toString().padStart(2, '0');
      hours.push(formattedHour + ':00');
    }
  return hours;
}

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

