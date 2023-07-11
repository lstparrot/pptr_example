export default class Explore {
    constructor(page) {
      this.page = page;
    }

    async exploretestfirst() {
        await this.page.waitForSelector('div.s289.s81')
        await this.page.waitForTimeout(1000)
        await this.page.click('div.s289.s81')
        await this.page.waitForSelector("div.s289.s81")
        await this.page.type("input.s12310", 'test')
        await this.page.keyboard.press('Enter');
        await this.page.waitForSelector("div.s12247[data-testid='8660a9a8-beac-db6f-b2b6-26de8e2fa7bf']")
    }
    async exploretestsecond() {
        await this.page.waitForSelector('div.s289.s81')
        await this.page.waitForTimeout(1000)
        await this.page.click('div.s289.s81')
        await this.page.waitForSelector("div.s289.s81")
        await this.page.type("input.s12310", 'test')
        await this.page.keyboard.press('Enter');
        await this.page.waitForSelector("[data-testid='bookmark']:first-of-type")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='bookmark']:first-of-type")
        await this.page.waitForTimeout(1000)
    }

    async exploretestthird() {
        await this.page.waitForSelector('div.s289.s81')
        await this.page.waitForTimeout(1000)
        await this.page.click('div.s289.s81')
        await this.page.waitForSelector("div.s289.s81")
        await this.page.type("input.s12310", 'test')
        await this.page.keyboard.press('Enter');
        await this.page.waitForSelector("[data-testid='community-join-button']:first-of-type")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='community-join-button']:first-of-type")
        await this.page.waitForTimeout(1000)
    }

    async exploretestresultlist() {
        await this.page.waitForTimeout(2000)
        const element = await this.page.$('div.s199.s264')
        await element.hover()
        await this.page.waitForTimeout(3000)
        await this.page.click('button[type="button"]:nth-child(1) > a')
        await this.page.waitForSelector("h2.s10876.s15")
        await this.page.waitForTimeout(1000)
    }


      
    async addrecipeexplore () {
        await this.page.waitForTimeout(3000)
        await this.page.waitForSelector(".s12027.s12366")
        await this.page.waitForTimeout(1000)
        await this.page.hover(".s12027.s12366")
        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("button.s11387:nth-child(1)")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11387:nth-child(1)")
        await this.page.waitForTimeout(2000)
        const elements = await this.page.$$("[data-testid='bookmark']")
        await elements[0].click()
        await this.page.waitForTimeout(1000)
    }    
}