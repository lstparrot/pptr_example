import Login from '../package_for_tests/Login'
import HomeFeed from '../package_for_tests/HomeFeed'


const { initBrowser, getBrowser } = require('../puppeteerInstance');

describe('END-to-END', ()=>{

    let login
    let homefeed
    let page
    let context


    beforeAll(async () => {
        await initBrowser();
        //page = await getBrowser().newPage();
        //context = await getBrowser().createIncognitoBrowserContext();
        //page = await context.newPage();
        //await page.setCacheEnabled(false)
        //login = new Login(page);
        //homefeed = new HomeFeed(page);
    })

    beforeEach(async ()=> {
        context = await getBrowser().createIncognitoBrowserContext();
        page = await context.newPage();
        await page.setCacheEnabled(false)
        login = new Login(page);
        homefeed = new HomeFeed(page);
    })
    
    afterEach(async ()=> {
        await page.close()
    })


    afterAll(async () => {
        await getBrowser().close();
    })


    it('Login', async()=>{
        await login.visit()
        await login.feelform()
    }, 20000)

    it('Home Feed page view', async()=>{
        await login.visit()
        await login.feelform()
        await homefeed.homefeedredirect()
    }, 20000)

})
