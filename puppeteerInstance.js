const puppeteer = require('puppeteer');

let browser;

const initBrowser = async () => {
  browser = await puppeteer.launch({headless: false});
};

const getBrowser = () => browser;

module.exports = { initBrowser, getBrowser };