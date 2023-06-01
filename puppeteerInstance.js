const puppeteer = require('puppeteer');


let browser;



const initBrowser = async () => {
  browser = await puppeteer.launch({
    slowMo: 250,
    headless: false,
    //args: ['--incognito'],
    ignoreDefaultArgs: 
    ['--enable-automation', 
    '--disable-extensions', 
    '--disable-default-apps',
    '--disable-component-extensions-with-background-pages']
  });
};

const getBrowser = () => browser;

module.exports = { initBrowser, getBrowser };
