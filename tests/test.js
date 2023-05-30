import Login from '../package_for_tests/Login'
import HomeFeed from '../package_for_tests/HomeFeed'
import Explore from '../package_for_tests/Explore'
import Communities from '../package_for_tests/Communities'
import Planner from '../package_for_tests/Planner'


const { initBrowser, getBrowser } = require('../puppeteerInstance');

describe('END-to-END', ()=>{

    let login
    let homefeed
    let page
    let context
    let explore
    let communities
    let planner


    beforeAll(async () => {
        await initBrowser();
    })

    beforeEach(async ()=> {
        context = await getBrowser().createIncognitoBrowserContext();
        page = await context.newPage();
        await page.setCacheEnabled(false)
        login = new Login(page)
        homefeed = new HomeFeed(page)
        explore = new Explore(page)
        communities = new Communities(page)
        planner = new Planner(page)
    })
    
    afterEach(async ()=> {
        await page.close()
    })


    afterAll(async () => {
        await getBrowser().close();
    })
/*
    it('LoginAsNew #1', async()=>{
        await login.visit()
        await login.feelformnewuser()
    }, 20000)

    it('LoginAsOld #2', async()=>{
        await login.visit()
        await login.feelformolduser()
    }, 20000)

    it('LoginGoogle #3', async()=>{
        await login.visit()
        await login.logingoogle()
    }, 20000)

    it('LoginFacebook #4', async()=>{
        await login.visit()
        await login.loginfacebook()
    }, 20000)

    /it('LoginButtonSecond #5', async()=>{
        await login.visit()
        await login.loginbuttonsecond()
    }, 20000)

    it('Home Feed post create #6', async()=>{
        await login.visit()
        await login.feelformolduser()
        await homefeed.homefeedpostcreate()
    }, 20000)

    it('Home Feed post create with Photo #7', async()=>{
        await login.visit()
        await login.feelformolduser()
        await homefeed.posteditphoto()
    }, 40000)

    it('Home Feed post create with Recipe #8', async()=>{
        await login.visit()
        await login.feelformolduser()
        await homefeed.posteditrecipe()
    }, 20000)

    it('Search field test #9', async()=>{
        await login.visit()
        await login.feelformolduser()
        await explore.exploretestfirst()
    }, 20000)

    it('Search result test #10', async()=>{
        await login.visit()
        await login.feelformolduser()
        await explore.exploretestsecond()
    }, 20000)

    it('Search list result test #11', async()=>{
        await login.visit()
        await login.feelformolduser()
        await explore.exploretestresultlist()
    }, 20000)

    it('Communities user check #12', async()=>{
        await login.visit()
        await login.feelformolduser()
        await communities.communitiesfirst()
    }, 20000)

    it('New communities create #13', async()=>{
        await login.visit()
        await login.feelformolduser()
        await communities.newcommcreate() 
    }, 50000)

    it('Communities join #14', async()=>{
        await login.visit()
        await login.feelformolduser()
        const result = await communities.communitiesjoin()
        expect(result).toBe(true)
    }, 30000)*/

    it('Communities join #15', async()=>{
        await login.visit()
        await login.feelformolduser()
        await planner.planneraddrecipe() 
    }, 30000)





})

