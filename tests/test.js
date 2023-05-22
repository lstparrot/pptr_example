import Login from '../package_for_tests/Login'

const { initBrowser, getBrowser } = require('../puppeteerInstance');

describe('END-to-END', ()=>{

    let login


    beforeAll(async () => {
        await initBrowser();
        //page = await getBrowser().newPage();
        const context = await getBrowser().createIncognitoBrowserContext();
        const page = await context.newPage();
        await page.setCacheEnabled(false)
        login = new Login(page);
    })
   /* beforeEach(async ()=>{
        login = new Login(page);

       page = await getBrowser().newPage()
    })
    afterEach(async()=>{
        await page.close()
    })*/
    afterAll(async () => {
        await getBrowser().close();
    })


    test('LoginaAsNewUser', async()=>{
        await login.visit()
        await login.feelform()
    }, 20000)

    test('LoginaAsNewUser', async()=>{
        await login.visit()
        await login.feelform()
    }, 20000)
})
