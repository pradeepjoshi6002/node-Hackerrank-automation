import puppeteer from "puppeteer";
let page;
puppeteer
  .launch({
    headless: false,
    args: ["--start-maximized"],
    defaultViewport: null,
  })
  .then((browser) => {
    const pagesArrPomise = browser.pages();
    return pagesArrPomise;
  })
  .then((pagesArrPomise) => {
    page = pagesArrPomise[0];
    let gotoPromise = page.goto("https://github.com/login");
    return gotoPromise;
  })
  .then(function () {
    let elementWaitPromise = page.waitForSelector("input[type='text']", {
      visible: true,
    });
    return elementWaitPromise;
  })
  .then(function () {
    console.log("reached google home page.");
    let keyswillsendPromises = page.type(
      "input[type='text']",
      "pradeepjoshi6002@gmail.com"
    );
    return keyswillsendPromises;
  })
  .then(function () {
    let enterwillbepressed = page.keyboard.press("Enter");
    return enterwillbepressed;
  })
  .catch(function (err) {
    console.log(err);
  });
