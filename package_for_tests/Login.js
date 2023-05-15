const { initBrowser, getBrowser } = require('../puppeteerInstance');




export default class Login {

    constructor (page){
    this.page = page
    
    }

    async visit(){
        await this.page.goto("https://my.whisk.com/")
    }

    async feelform(){
        await this.page.waitForSelector('#app > div.s11739 > nav.s11742 > button > div > div')
        await this.page.click('#app > div.s11739 > nav.s11742 > button > div > div')
    }

}