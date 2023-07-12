import Login from '../package_for_tests/Login'
import HomeFeed from '../package_for_tests/HomeFeed'
import Explore from '../package_for_tests/Explore'
import Communities from '../package_for_tests/Communities'
import Planner from '../package_for_tests/Planner'
import ProfilePage from '../package_for_tests/ProfilePage'
import Saved from '../package_for_tests/Saved'
import ShopingList from '../package_for_tests/ShoppingList'
import AdsCheck from '../package_for_tests/AdsCheck'
import ScreenShot from '../package_for_tests/ScreenShotCheck'

const { initBrowser, getBrowser } = require('../puppeteerInstance');

describe('Whisk test suite', ()=>{

    let login
    let homefeed
    let page
    let context
    let explore
    let communities
    let planner
    let profilepage
    let saved
    let shopinglist
    let adscheck
    let screenshot

    beforeAll(async () => {
        await initBrowser()
    }, 30000)

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
        shopinglist = new ShopingList(page)
        adscheck = new AdsCheck(page)
        screenshot = new ScreenShot(page)
    })
    
    afterEach(async ()=> {
        await page.close()
    })

    afterAll(async () => {
        await getBrowser().close();
    })

    it('Login as new user #1', async()=>{
        await login.visit()
        await login.feelformnewusercookie()
    }, 60000)

    it('Login as old user #2', async()=>{
        await login.visit()
        await login.feelformolduser()
    }, 60000)

    it('Login with Google #3', async()=>{
        await login.visit()
        await login.logingoogle()
    }, 60000)

    it('Login with Facebook #4', async()=>{
        await login.visit()
        await login.loginfacebook()
    }, 60000)

    it('Check second login button #5', async()=>{
        await login.visit()
        await login.loginbuttonsecond()
    }, 60000)

    it('Home Feed post create #6', async()=>{
        await login.visit()
        await login.feelformolduser()
        await homefeed.homefeedpostcreate()
    }, 60000)

    it('Home Feed post create with Photo #7', async()=>{
        await login.visit()
        await login.feelformolduser()
        await homefeed.posteditphoto()
    }, 60000)

    it('Home Feed post create with Recipe #8', async()=>{
        await login.visit()
        await login.feelformolduser()
        await homefeed.posteditrecipe()
    }, 60000)

    it('Top bar search field #9', async()=>{
        await login.visit()
        await login.feelformolduser()
        await explore.exploretestfirst()
    }, 60000)

    it('Search recipe save #10', async()=>{
        await login.visit()
        await login.feelformolduser()
        await explore.exploretestsecond()
    }, 60000)

    it('Search list result #11', async()=>{
        await login.visit()
        await login.feelformolduser()
        await explore.exploretestresultlist()
    }, 60000)

    it('Communities user check #12', async()=>{
        await login.visit()
        await login.feelformolduser()
        await communities.communitiesfirst()
    }, 60000)

    it('New communities create #13', async()=>{
        await login.visit()
        await login.feelformolduser()
        await communities.newcommcreate() 
    }, 60000)

    it('Communities join #14', async()=>{
        await login.visit()
        await login.feelformolduser()
        const result = await communities.communitiesjoin()
        expect(result).toBe(true)
    }, 60000)

    it('Add recipe into MP #15', async()=>{
        await login.visit()
        await login.feelformolduser()
        const result = await planner.planneraddrecipe()
        expect(result).toBe(true) 
    }, 60000)

    it('MP Clear #16', async()=>{
        await login.visit()
        await login.feelformolduser()
        await planner.planneraddrecipe()
        await planner.plannerclear()
    }, 60000)

    it('MP Sharing #17', async()=>{
        await login.visit()
        await login.feelformolduser()
        await planner.planneraddrecipe()
        await planner.plannerenablesharing()
    }, 60000)

    it('MP FeedBack #18', async()=>{
        await login.visit()
        await login.feelformolduser()
        await planner.planneraddrecipe()
        await planner.plannerfeedback()
    }, 60000)

    it('MP import to SL #19', async()=>{
        await login.visit()
        await login.feelformolduser()
        await planner.planneraddrecipe()
        await planner.plannerimport()
    }, 60000)

    it('Profile page view #20', async()=>{
        await login.visit()
        await login.feelformolduser()
        await profilepage.profilepageview()
    }, 60000)

    it('Profile page edit #21', async()=>{
        await login.visit()
        await login.feelformolduser()
        await profilepage.profileedit()
    }, 80000)

    it('Profile page edit Email #22', async()=>{
        await login.visit()
        await login.feelformolduser()
        await profilepage.profilepageeditemail()
    }, 60000)

    it('Profile page edit pass #23', async()=>{
        await login.visit()
        await login.feelformolduser()
        await profilepage.profilepageeditpass()
    }, 60000)

    it('Profile page edit region #24', async()=>{
        await login.visit()
        await login.feelformolduser()
        await profilepage.profilepageeditregion()
    }, 60000)

    it('Saved Create recipe #25', async()=>{
        await login.visit()
        await login.feelformolduser()
        await saved.createrecipe()
    }, 60000)

    it('Saved Search #26', async()=>{
        await login.visit()
        await login.feelformolduser()
        const result = await saved.searchrecipe()
        expect(result).toBe(true)
    }, 60000)

    it('Saved Create Collection #27', async()=>{
        await login.visit()
        await login.feelformolduser()
        const result = await saved.createcollection()
        expect(result).toBe(true)
    }, 60000)

    it('Shoping List Add Item #28', async()=>{
        await login.visit()
        await login.feelformolduser()
        const result = await shopinglist.createritem()
        expect(result).toBe(true)
    }, 60000)

    it('Shoping List Add Item Type #29', async()=>{
        await login.visit()
        await login.feelformolduser()
        const result = await shopinglist.createritemtype()
        expect(result).toBe(true)
    }, 60000)

    it('Ads Check on MP #30', async()=>{
        await login.visit()
        await login.feelformolduser()
        await adscheck.adsCheckOnMp()
    }, 60000)

    it('Ads Check on SL #31', async()=>{
        await login.visit()
        await login.feelformolduser()
        await adscheck.adsCheckOnSl()
    }, 60000)

    it('Ads Check on HomeFeed #32', async()=>{
        await login.visit()
        await login.feelformnewuser()
        const result = await adscheck.adsCheckOnHF()
        expect(result).toBe(true)
    }, 60000)

    it('Ads Check on Recipe page #1 #33', async()=>{
        await login.visit()
        await login.feelformnewuser()
        await explore.addrecipeexplore()
        const result = await adscheck.adsCheckOnRecipetop()
        expect(result).toBe(true)
    }, 80000)

    it('Ads Check on Recipe page #2 #34', async()=>{
        await login.visit()
        await login.feelformnewuser()
        const result = await adscheck.adsCheckOnRecipemid()
        expect(result).toBe(true)
    }, 60000)

    it('Ads Check on Recipe page #3 #35', async()=>{
        await login.visit()
        await login.feelformnewuser()
        const result = await adscheck.adsCheckOnRecipedow()
        expect(result).toBe(true)
    }, 60000)

    it('Add Recipe Explore #36', async()=>{
        await login.visit()
        await login.feelformnewuser()
        await explore.addrecipeexplore()
    }, 60000)

    it('Screen Shot Main Page #37', async()=>{
        await login.visit()
        await screenshot.screenShotMainPage()
    }, 60000)

    it('Screen Shot Profile Page #38', async()=>{
        await login.visit()
        await login.feelformolduser()
        await profilepage.profilepageview()
        const result = await screenshot.screenShotProfilePage()
        expect(result).toBe(true)
    }, 60000)
})

