export default class Login {

    constructor (page){
    this.page = page

    }

    async visit(){
        await this.page.goto("https://my.whisk.com/")
    }

    async feelform(){
        await this.page.waitForSelector('#button.s6.s11243.s11251.s11252-2.s1487')
        await this.page.click('#button.s6.s11243.s11251.s11252-2.s1487')
        await this.page.waitForSelector('[data-testid="email-phone-number-auth-input"] input[name="username"]')
        await this.page.type('[data-testid="email-phone-number-auth-input"] input[name="username"]', "test@test.com")
       // await this.page.waitForSelector('button[data-testid="auth-continue-button"]')
       // await this.page.click('button[data-testid="auth-continue-button"]')
       // await this.page.waitForSelector('[data-testid="9c5c1a2c-cdfe-09a6-1734-f1bf8c5cf28e"]')
    }
}