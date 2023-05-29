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
        let a
        await this.page.waitForTimeout(5000)
        await this.page.waitForSelector("a.s12235.s564[href='/communities']")
        await this.page.waitForTimeout(2000)
        await this.page.click("a.s12235.s564[href='/communities']")
        await this.page.waitForTimeout(2000)
        const elements = await this.page.$$('a.s12145-248.s12146');
        const elementCountBefore = elements.length
        await this.page.waitForTimeout(5000)
        await this.page.waitForSelector("[data-testid='community-join-button']:nth-child(11)")
        await this.page.waitForTimeout(2000)
        await this.page.click("[data-testid='community-join-button']:nth-child(11)")
        await this.page.waitForTimeout(2000)
        const elementstwo = await this.page.$$('a.s12145-248.s12146');
        const elementCountAfter = elementstwo.length
        if (elementCountAfter === elementCountBefore + 1) {
            a = true
            return a
          } if (a) {
            return
          } else {
            console.log('not')
          }
        
        
    }
}