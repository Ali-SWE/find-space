import Container from "./components/Container" 
import generateHoursList from "./generateHoursList";


const days = ["U", "M", "T", "W", "R"]
const buildings = [3,4,5,11,14,22,24,59,63]
const hoursList = generateHoursList()

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>

        <div className="flex flex-row gap-3">
          <label htmlFor="select-day">Day</label>
          <select name="select-day" id="select-day" aria-placeholder="kk">
                  {days.map(day =>
                      <option key={day} value={day}>{day}</option>
                      )}
                  
          </select>
        </div>
        
        <div className="flex flex-row gap-3">
          <label htmlFor="select-building">Building</label>
          <select name="select-building" id="select-building">
                  {buildings.map(building =>
                      <option key={building} value={building}>{building}</option>
                      )}
                  
          </select>
        </div>


        <div className="flex flex-row gap-3">
          <label htmlFor="select-start-time">Start Time</label>
          <select name="select-start-time" id="select-start-time">
                  {hoursList.map(hour =>
                      <option key={hour} value={hour}>{hour}</option>
                      )}
                  
          </select>
        </div>

        <div className="flex flex-row gap-3">
        
          <label htmlFor="select-end-time">Day</label>
          <select name="select-end-time" id="select-end-time">
                  {hoursList.map(hour =>
                      <option key={hour} value={hour}>{hour}</option>
                      )}
                  
          </select>
        </div>
      </Container>
    </main>
  );
}
