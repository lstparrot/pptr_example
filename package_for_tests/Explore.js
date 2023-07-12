export default class Explore {
    constructor(page) {
      this.page = page;
    }

    async exploretestfirst() {
        await this.page.waitForSelector("[data-testid='bee27b3b-d380-492e-3304-58c89c5f56bd']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='bee27b3b-d380-492e-3304-58c89c5f56bd']")
        await this.page.waitForSelector("[data-testid='bee27b3b-d380-492e-3304-58c89c5f56bd']")
        await this.page.type("[data-testid='bee27b3b-d380-492e-3304-58c89c5f56bd']", 'test')
        await this.page.keyboard.press('Enter')
        await this.page.waitForSelector("[data-testid='8660a9a8-beac-db6f-b2b6-26de8e2fa7bf']")
        await this.page.waitForTimeout(1000)

    }
    async exploretestsecond() {
        await this.page.waitForSelector("[data-testid='bee27b3b-d380-492e-3304-58c89c5f56bd']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='bee27b3b-d380-492e-3304-58c89c5f56bd']")
        await this.page.waitForSelector("[data-testid='bee27b3b-d380-492e-3304-58c89c5f56bd']")
        await this.page.type("[data-testid='bee27b3b-d380-492e-3304-58c89c5f56bd']", 'test')
        await this.page.keyboard.press('Enter')
        await this.page.waitForTimeout(2000)
        const elements = await this.page.$$("a.s10062.s10155.s10272")
        await this.page.waitForTimeout(1000)
        await elements[0].click()
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
        const element = await this.page.$("[data-testid='explore-nav-link']")
        await element.hover()
        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("a.s131.s489.s571:nth-child(1)")
        await this.page.click('a.s131.s489.s571:nth-child(1)')
        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("h2.s10883.s8")
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