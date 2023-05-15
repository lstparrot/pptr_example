const puppeteer = require('puppeteer');

let browser;

const initBrowser = async () => {
  browser = await puppeteer.launch({headless: "new"});
};

const getBrowser = () => browser;

module.exports = { initBrowser, getBrowser };