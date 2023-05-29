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

}