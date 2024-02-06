import generateHoursList from "./generateHoursList";


const days = ["U", "M", "T", "W", "R"]
const buildings = [3,4,5,11,14,22,24,59,63]
const hoursList = generateHoursList()

export default function Home() {
  return (
    <div className="flex h-fit flex-col items-center justify-between p-24">
      <div className="flex gap-5">
        <div className="flex flex-row gap-3">
          <select name="select-day" id="select-day">
            <option value="" disabled selected hidden>
              Day
            </option>
            {days.map(day =>
              <option key={day} value={day}>{day}</option>
            )}
                  
          </select>
        </div>
        
        <div className="flex flex-row gap-3">
          <select name="select-building" id="select-building">
            <option value="" disabled selected hidden>
              Building
            </option>
            {buildings.map(building =>
              <option key={building} value={building}>{building}</option>
              )}
                  
          </select>
        </div>


        <div className="flex flex-row gap-3">
          <select name="select-start-time" id="select-start-time">
            <option value="" disabled selected hidden>
              Start Time
            </option>
            {hoursList.map(hour =>
              <option key={hour} value={hour}>{hour}</option>
            )}
                  
          </select>
        </div>

        <div className="flex flex-row gap-3">
          <select name="select-end-time" id="select-end-time">
            <option value="" disabled selected hidden>
              End Time
            </option>
              {hoursList.map(hour =>
                <option key={hour} value={hour}>{hour}</option>
              )}
                  
          </select>
        </div>
      </div>
    </div>
  );
}
