import Login from '../package_for_tests/Login'
import HomeFeed from '../package_for_tests/HomeFeed'
import Explore from '../package_for_tests/Explore'


const { initBrowser, getBrowser } = require('../puppeteerInstance');

describe('END-to-END', ()=>{

    let login
    let homefeed
    let page
    let context
    let explore


    beforeAll(async () => {
        await initBrowser();
    })

    beforeEach(async ()=> {
        context = await getBrowser().createIncognitoBrowserContext();
        page = await context.newPage();
        await page.setCacheEnabled(false)
        login = new Login(page);
        homefeed = new HomeFeed(page);
        explore = new Explore(page);
    })
    
    afterEach(async ()=> {
        await page.close()
    })


    afterAll(async () => {
        await getBrowser().close();
    })
/*
    it('LoginAsNew', async()=>{
        await login.visit()
        await login.feelformnewuser()
    }, 20000)

    it('LoginAsOld', async()=>{
        await login.visit()
        await login.feelformolduser()
    }, 20000)

    it('LoginGoogle', async()=>{
        await login.visit()
        await login.logingoogle()
    }, 20000)

    it('LoginFacebook', async()=>{
        await login.visit()
        await login.loginfacebook()
    }, 20000)

    /it('LoginButtonSecond', async()=>{
        await login.visit()
        await login.loginbuttonsecond()
    }, 20000)

    it('Home Feed post create', async()=>{
        await login.visit()
        await login.feelformolduser()
        await homefeed.homefeedpostcreate()
    }, 20000)

    it('Home Feed post create with Photo', async()=>{
        await login.visit()
        await login.feelformolduser()
        await homefeed.posteditphoto()
    }, 40000)

    it('Home Feed post create with Recipe', async()=>{
        await login.visit()
        await login.feelformolduser()
        await homefeed.posteditrecipe()
    }, 20000)

    it('Search field test', async()=>{
        await login.visit()
        await login.feelformolduser()
        await explore.exploretestfirst()
    }, 20000)

    it('Search result test', async()=>{
        await login.visit()
        await login.feelformolduser()
        await explore.exploretestsecond()
    }, 20000)*/

    it('Search result test', async()=>{
        await login.visit()
        await login.feelformolduser()
        await explore.exploretestthird()
    }, 20000)
})
