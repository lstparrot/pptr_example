import Login from '../package_for_tests/Login'


const { initBrowser, getBrowser } = require('../puppeteerInstance');

describe('END-to-END', ()=>{

    let login;
    let page;

    beforeAll(async ()=>{
        await initBrowser();
        const browser = getBrowser();
        page = await browser.newPage();
        jest.setTimeout(() => { 
        }, 20000);

        login = new Login(page)
    })

    afterAll(async () => {
        const browser = getBrowser();
        await browser.close();
    })


    /*test('LoginaAsNewUser', async()=>{
        await login.visit()
        await login.feelform()
    })*/
    test('Login2', async()=>{
        await page.setDefaultTimeout(5000);
        await page.goto("https://my.whisk.com/")
        await page.waitForSelector('div#app nav:nth-child(3) > button[type="button"] > div > div')
        await page.click('div#app nav:nth-child(3) > button[type="button"] > div > div')
        await page.waitForSelector('[data-testid="email-phone-number-auth-input"] input[name="username"]')
        await page.type('[data-testid="email-phone-number-auth-input"] input[name="username"]', "test@test.com")
       // await this.page.waitForSelector('button[data-testid="auth-continue-button"]')
       // await this.page.click('button[data-testid="auth-continue-button"]')
       // await this.page.waitForSelector('[data-testid="9c5c1a2c-cdfe-09a6-1734-f1bf8c5cf28e"]')
    })

})
