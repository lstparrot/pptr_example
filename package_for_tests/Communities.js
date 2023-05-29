export default class Communities {
    constructor(page) {
      this.page = page;
    }

    async communitiesfirst() {
        await this.page.waitForTimeout(3000)
        await this.page.waitForSelector("[data-testid='5baeaaa4-dd14-d060-8f1f-037f12662889']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='5baeaaa4-dd14-d060-8f1f-037f12662889']")
        await this.page.waitForSelector("div.s11776")
    }

    async newcommcreate() {
        await this.page.waitForTimeout(3000)
        await this.page.waitForSelector("[data-testid='5baeaaa4-dd14-d060-8f1f-037f12662889']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='5baeaaa4-dd14-d060-8f1f-037f12662889']")
        await this.page.waitForSelector("div.s11776")

    }

    async communitiesjoin() {
        await this.page.waitForTimeout(5000)
        await this.page.waitForSelector("a.s12235.s564[href='/communities']")
        await this.page.waitForTimeout(2000)
        await this.page.click("a.s12235.s564[href='/communities']")
        await this.page.waitForTimeout(2000)
        const elements = await this.page.$$("div.s11392 .s11395 .s11778")
        const elementCountBefore = elements.length
        await this.page.waitForTimeout(3000)
        const elementsthree = await this.page.$$("div.s12156 [data-testid='community-join-button']")
        await elementsthree[10].click()
        await this.page.waitForTimeout(2000)
        const elementstwo = await this.page.$$("div.s11392 .s11395 .s11778");
        const elementCountAfter = elementstwo.length
        if (elementCountAfter === elementCountBefore + 1) {
            return true
          }
        return false
    }
}