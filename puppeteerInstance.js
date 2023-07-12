const puppeteer = require('puppeteer')


let browser



const initBrowser = async () => {
  browser = await puppeteer.launch({
    headless: true,
    //args: ['--incognito'],
    //slowMo: 250,
    ignoreDefaultArgs: 
    ['--enable-automation', 
    '--disable-extensions', 
    '--disable-default-apps',
    '--disable-component-extensions-with-background-pages']
  })
}

const getBrowser = () => browser;

module.exports = { initBrowser, getBrowser };
