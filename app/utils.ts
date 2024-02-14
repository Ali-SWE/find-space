// import puppeteer from 'puppeteer';

// export const fetchData = async() => {
 
//   const URL = "https://banner9-registration.kfupm.edu.sa/StudentRegistrationSsb/ssb/term/termSelection?mode=search"

//   // Launch the browser and open a new blank page
//   const browser = await puppeteer.launch({
//     headless: false,
//   });
//   const page = await browser.newPage();

//   // Navigate the page to a URL
//   await page.goto(URL);

//   //Selecting the term
//   const termInput = document.querySelector('#txt_term') as HTMLElement; 
//   termInput.setAttribute('listofsearchterms', "202320"); 
  
//   //Waiting
//   page.waitForSelector('#txt_term');
//   //Clicking continue button
//   page.click('#term-go');

//   // //Clicking search button
//   // await page.click('#search-go');
//   // //Waiting
//   // await page.waitForNavigation();
  

//   // Get the updated HTML
//   const html = await page.content();
//   console.log("2 html")
//   console.log(html) 

//   // Close browser.
//   // await browser.close(); 
// }





// This function generate list of hours
export function generateHoursList(): string[] {
  const hours: string[] = [];
    for (let i = 7; i < 22; i++) {
      const formattedHour = i.toString().padStart(2, '0');
      hours.push(formattedHour + ':00');
    }
  return hours;
}

