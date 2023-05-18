const puppeteer = require('puppeteer');

let browser;
let page;



const initBrowser = async () => {
  browser = await puppeteer.launch({
    headless: false,
    args: ['--incognito'],
  });
};

//const getBrowser = () => browser;

module.exports = { initBrowser };

