import puppeteer from "puppeteer";

const redditScraper = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });

  const browserTab = await browser.newPage();

  const siteURL = "https://www.reddit.com/r/mentalhealth/";
  await browserTab.goto(siteURL, {
    waitUntil: "domcontentloaded"
  });

  const titleFunction = await browserTab.evaluate(() => {
    const title = document.title;
    return title;
  });
  console.log("title of page is " + titleFunction);

  const redditName = browserTab.evaluate(() => {
    const name = document.body;
    return name;
  });
  console.log(redditName);

  await browser.close();
};

redditScraper();
