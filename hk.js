import puppeteer from "puppeteer";

const url = "https://www.hackerrank.com/auth/login";
const email = "fobaj53233@pursip.com";
const password = "Unclejohn69.";
let browserOpen = puppeteer.launch({
  headless: false,
  args: ["--start-maximized"],
  defaultViewport: null,
});
let page;
browserOpen
  .then(function (browserObj) {
    let browserOpenPromise = browserObj.newPage();
    return browserOpenPromise;
  })
  .then(function (newTab) {
    page = newTab;
    let hackerRankOpenPromise = newTab.goto(url);
    return hackerRankOpenPromise;
  })
  .then(function () {
    let emailIsEntered = page.type("input[id='input-1']", email, {
      delay: 50,
    });
    return emailIsEntered;
  })
  .then(function () {
    let passwordIsEntered = page.type("input[ id='input-2']", password, {
      delay: 50,
    });
    return passwordIsEntered;
  })
  .then(function () {
    let loginButton = page.click(".auth-button");
  })
  .then(function () {
    console.log("login succesful");
  });
