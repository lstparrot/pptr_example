export default class Login {

    constructor (page){
    this.page = page

    }

    async visit(){
        await this.page.goto("https://my.whisk.com/")
    }

    async feelform(){
        await this.page.waitForSelector('button.s16.s11207.s11215.s11216-1.s1486')
        await this.page.click('button.s16.s11207.s11215.s11216-1.s1486')
        await this.page.waitForSelector('[data-testid="email-phone-number-auth-input"] input[name="username"]')
        await this.page.type('[data-testid="email-phone-number-auth-input"] input[name="username"]', "test@test.com")
        await this.page.waitForSelector('button[data-testid="auth-continue-button"]')
        await this.page.click('button[data-testid="auth-continue-button"]')
        await this.page.waitForSelector('[data-testid="9c5c1a2c-cdfe-09a6-1734-f1bf8c5cf28e"]')
    }
}