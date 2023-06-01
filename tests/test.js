import Login from '../package_for_tests/Login'
import HomeFeed from '../package_for_tests/HomeFeed'
import Explore from '../package_for_tests/Explore'
import Communities from '../package_for_tests/Communities'
import Planner from '../package_for_tests/Planner'
import ProfilePage from '../package_for_tests/ProfilePage'
import Saved from '../package_for_tests/Saved'



const { initBrowser, getBrowser } = require('../puppeteerInstance');

describe('END-to-END', ()=>{

    let login
    let homefeed
    let page
    let context
    let explore
    let communities
    let planner
    let profilepage
    let saved


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
        profilepage = new ProfilePage(page)
        saved = new Saved(page)
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
    }, 30000)

    it('Add recipe into MP #15', async()=>{
        await login.visit()
        await login.feelformolduser()
        const result = await planner.planneraddrecipe()
        expect(result).toBe(true) 
    }, 30000)

    it('MP Clear #16', async()=>{
        await login.visit()
        await login.feelformolduser()
        await planner.plannerclear()
    }, 30000)

    it('MP Sharing #17', async()=>{
        await login.visit()
        await login.feelformolduser()
        await planner.plannerenablesharing()
    }, 30000)

    it('MP FeedBack #18', async()=>{
        await login.visit()
        await login.feelformolduser()
        await planner.plannerfeedback()
    }, 30000)

    it('MP import to SL #19', async()=>{
        await login.visit()
        await login.feelformolduser()
        await planner.plannerimport()
    }, 30000)

    it('Profile page view #20', async()=>{
        await login.visit()
        await login.feelformolduser()
        await profilepage.profilepageview()
    }, 30000)

    it('Profile page edit #21', async()=>{
        await login.visit()
        await login.feelformolduser()
        await profilepage.profileedit()
    }, 60000)

    it('Profile page edit Email #22', async()=>{
        await login.visit()
        await login.feelformolduser()
        await profilepage.profilepageeditemail()
    }, 40000)

    it('Profile page edit pass #23', async()=>{
        await login.visit()
        await login.feelformolduser()
        await profilepage.profilepageeditpass()
    }, 50000)

    it('Profile page edit region #24', async()=>{
        await login.visit()
        await login.feelformolduser()
        await profilepage.profilepageeditregion()
    }, 40000)

    it('Saved Create recipe #25', async()=>{
        await login.visit()
        await login.feelformolduser()
        await saved.createrecipe()
    }, 40000)*/

    it('Saved Search #26', async()=>{
        await login.visit()
        await login.feelformolduser()
        await saved.searchrecipe()
    }, 40000)

})

