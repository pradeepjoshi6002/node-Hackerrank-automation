import puppeteer from "puppeteer";

const url = "https://www.hackerrank.com/auth/login";
const email = "fobaj53233@pursip.com";
const password = "Unclejohn69.";
const code = `#include<iostream>
using namespace std;

int solveMeFirst(int a, int b) {
 // Hint: Type return a+b; below:
 return a+b;
}

int main() {
  int num1, num2;
  int sum;
  cin>>num1>>num2;
  sum = solveMeFirst(num1,num2);
  cout<<sum;
  return 0;
}
`;
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
      delay: 20,
    });
    return emailIsEntered;
  })
  .then(function () {
    let passwordIsEntered = page.type("input[ id='input-2']", password, {
      delay: 20,
    });
    return passwordIsEntered;
  })
  .then(function () {
    let loginButton = page.click(".auth-button");
    return loginButton;
  })
  .then(function () {
    let clickOnAlgoPromise = waitAndClick(
      '.topic-card a[data-attr1="algorithms"]',
      page
    );
    return clickOnAlgoPromise;
  })
  .then(function () {
    let clickOnWarmup = waitAndClick('input[type="warmup"]', page);
    return clickOnWarmup;
  })
  .then(function () {
    console.log("code typed");
  });

function waitAndClick(selector, cPage) {
  return new Promise(function (resolve, reject) {
    let waitForModelPromise = cPage.waitForSelector(selector);
    waitForModelPromise
      .then(function () {
        let clickModel = cPage.click(selector);
        return clickModel;
      })
      .then(function () {
        resolve();
      })
      .catch(function (err) {
        reject();
      });
  });
}
