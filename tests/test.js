import Login from '../package_for_tests/Login'

const { initBrowser, getBrowser } = require('../puppeteerInstance');

describe('END-to-END', ()=>{

    let login
    let page


    beforeAll(async () => {
        await initBrowser();
        page = await getBrowser().newPage();
        login = new Login(page);
    })

    afterAll(async () => {
        await getBrowser().close();
    })


    test('LoginaAsNewUser', async()=>{
        await login.visit()
        await login.feelform()
    }, 20000)

})
