

export default class Planner {
    constructor(page) {
      this.page = page;
    }

    async planneraddrecipe() {
        await this.page.waitForTimeout(3000)
        await this.page.waitForSelector("[data-testid='5baeaaa4-dd14-d060-8f1f-037f12662889']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='5baeaaa4-dd14-d060-8f1f-037f12662889']")
        await this.page.waitForSelector("div.s11776")
    }




}