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


    test('LoginaAsNewUser', async()=>{
        await login.visit()
        await login.feelform()
    })
})
