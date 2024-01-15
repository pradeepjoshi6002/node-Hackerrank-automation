import { fchown } from "fs";
import puppeteer from "puppeteer";

let browserOpen = puppeteer.launch({
  headless: false,
  args: ["--start-maximized"],
});
