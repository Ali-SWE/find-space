import puppeteer from 'puppeteer';

export const fetchData = async() => {
 
  const URL = "https://banner9-registration.kfupm.edu.sa/StudentRegistrationSsb/ssb/term/termSelection?mode=search"
  const TERM = "202320"

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(URL);

  //Selecting the term
  
  await page.evaluate(() => {
  const termInput = document.querySelector('#txt_term') as HTMLElement; 
  termInput.setAttribute('listofsearchterms', TERM); 
  }); 
  //Waiting
  await page.waitForSelector('#txt_term');
  //Clicking continue button
  await page.click('#term-go');
  //Waiting
  await page.waitForNavigation();

  //Clicking search button
  await page.click('#search-go');
  //Waiting
  await page.waitForNavigation();
  

  // Get the updated HTML
  const html = await page.content();
  console.log("2 html")
  console.log(html)
  // Select a Term

  // Click a button
  // await page.click('#button-id');


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

