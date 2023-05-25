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
        await login.feelformnewuser()
    }, 20000)

    it('LoginAsOld', async()=>{
        await login.visit()
        await login.feelformolduser()
    }, 20000)

    it('LoginGoogle', async()=>{
        
    }, 20000)

    it('LoginFacebook', async()=>{
        
    }, 20000)

    it('LoginButtonSecond', async()=>{
        await login.visit()
        await login.loginbuttonsecond()
    }, 20000)

    it('Home Feed post create', async()=>{
        await login.visit()
        await login.feelformolduser()
        await homefeed.homefeedpostcreate()
    }, 20000)

})
