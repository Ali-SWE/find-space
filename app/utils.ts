// import puppeteer from 'puppeteer';

export const fetchData = async() => {
  console.log("hi")
  const URL = "https://registrar.kfupm.edu.sa/course-offerings"
  const TERM = "232"

  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();
  // await page.goto(url);

  // // Click a button
  // await page.click('#button-id');

  // // Select an option from a select element
  // await page.select('#select-element-id', 'option-value');

  // await browser.close();





  // const { data } = await axios.get(URL);


  // axios.get(URL)
  // .then(res =>{
  //   const $ = cheerio.load(res);
  //   console.log(res.data)
  // }).catch(err =>{
  //   console.log(err)
  // })
  
  
}





// This function generate list of hours
export function generateHoursList(): string[] {
  const hours: string[] = [];
    for (let i = 7; i < 22; i++) {
      const formattedHour = i.toString().padStart(2, '0');
      hours.push(formattedHour + ':00');
    }
  return hours;
}

