const puppeteer = require('puppeteer')


let browser



const initBrowser = async () => {
  const caps = {
    'browser': 'chrome',
    'browser_version': 'latest',
    'os': 'os x',
    'os_version': 'mojave',
    'browserstack.username': process.env.BROWSERSTACK_USERNAME || 'danny_gLPV0G',
    'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY || 'pAiLFTtTFUrKd9frt13y',
   // 'browserstack.local': 'true'  // You have to ensure that you have started the BrowserStackLocal binary in your system and you have seen '[SUCCESS] You can now access your local server(s) in our remote browser' in the terminal

  }
  browser = await puppeteer.connect({
    browserWSEndpoint:
    `ws://cdp.browserstack.com/puppeteer?caps=${encodeURIComponent(JSON.stringify(caps))}`
  })
  }


const getBrowser = () => browser;

module.exports = { initBrowser, getBrowser };

/*const initBrowser = async () => {
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
}*/

/*

const { bootstrap } = require('global-agent');

// Have to set this environment variable with required data before executing this script 
// export GLOBAL_AGENT_HTTP_PROXY=http://someuser:test123@127.0.0.1:3128

bootstrap();

*/