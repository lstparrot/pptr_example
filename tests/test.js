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

    it('LoginAsNew', async()=>{
        await login.visit()
        await login.feelformnew()
    }, 30000)

    it('LoginAsOld', async()=>{
        await login.visit()
        await login.feelformold()
    }, 30000)

    it('Home Feed post create', async()=>{
        await login.visit()
        await login.feelformold()
        await homefeed.homefeedpostcreate()
    }, 30000)

})
