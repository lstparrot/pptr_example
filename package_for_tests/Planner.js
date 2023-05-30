

export default class Planner {
    constructor(page) {
      this.page = page;
    }

    async planneraddrecipe() {
        await this.page.waitForTimeout(2000)
        await this.page.waitForSelector("a.s12235.s564[href='/meal-plan']")
        await this.page.waitForTimeout(1000)
        await this.page.click("a.s12235.s564[href='/meal-plan']")
        await this.page.waitForTimeout(1000)
        const elements = await this.page.$$("div.s12865 .s12866")
        const elementCountBefore = elements.length
        await this.page.waitForSelector("button.s11.s11380.s11383")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11.s11380.s11383")
        await this.page.waitForSelector("button.s11.s11421:nth-child(1)")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11.s11421:nth-child(1)")
        await this.page.waitForTimeout(2000)
        await this.page.waitForSelector("[data-testid='3b3f878f-c796-f5b8-3c50-18a2d2269696']:nth-child(1)")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='3b3f878f-c796-f5b8-3c50-18a2d2269696']:nth-child(1)")
        await this.page.waitForSelector("button.s11.s11232.s11238")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11.s11232.s11238")
        await this.page.waitForTimeout(2000)
        const elementstwo = await this.page.$$("div.s12865 .s12866")
        const elementCountAfter = elementstwo.length
        if (elementCountAfter === elementCountBefore + 1) {
          return true
        }
      return false
    }

    async plannerclear() {
      await this.page.waitForTimeout(2000)
      await this.page.waitForSelector("a.s12235.s564[href='/meal-plan']")
      await this.page.waitForTimeout(1000)
      await this.page.click("a.s12235.s564[href='/meal-plan']")
      await this.page.waitForSelector("[data-testid='dd9b064b-0b59-cdbd-ca30-180ae27cdd70']")
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='dd9b064b-0b59-cdbd-ca30-180ae27cdd70']")
      await this.page.waitForSelector("button.s11.s19:nth-child(1)")
      await this.page.waitForTimeout(1000)
      await this.page.click("button.s11.s19:nth-child(1)")
      await this.page.waitForTimeout(1000)
      await this.page.waitForSelector("[data-testid='6ba614ad-462f-714f-65b5-5c1f99689c37']")
    }

    async plannerenablesharing() {
      await this.page.waitForTimeout(2000)
      await this.page.waitForSelector("a.s12235.s564[href='/meal-plan']")
      await this.page.waitForTimeout(1000)
      await this.page.click("a.s12235.s564[href='/meal-plan']")
      await this.page.waitForSelector("[data-testid='dd9b064b-0b59-cdbd-ca30-180ae27cdd70']")
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='dd9b064b-0b59-cdbd-ca30-180ae27cdd70']")
      await this.page.waitForSelector("button.s11.s19:nth-child(2)")
      await this.page.waitForTimeout(1000)
      await this.page.click("button.s11.s19:nth-child(2)")
      await this.page.waitForTimeout(1000)
      await this.page.waitForSelector("[data-testid='6ba614ad-462f-714f-65b5-5c1f99689c37']")
    }

    async plannerfeedback() {
      await this.page.waitForTimeout(2000)
      await this.page.waitForSelector("a.s12235.s564[href='/meal-plan']")
      await this.page.waitForTimeout(1000)
      await this.page.click("a.s12235.s564[href='/meal-plan']")
      await this.page.waitForSelector("[data-testid='dd9b064b-0b59-cdbd-ca30-180ae27cdd70']")
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='dd9b064b-0b59-cdbd-ca30-180ae27cdd70']")
      await this.page.waitForSelector("button.s11.s19:nth-child(3)")
      await this.page.waitForTimeout(1000)
      await this.page.click("button.s11.s19:nth-child(3)")
      await this.page.waitForTimeout(1000)
      await this.page.waitForSelector("[data-testid='UI_KIT_TEXTAREA']")
      await this.page.waitForTimeout(1000)
      await this.page.type("[data-testid='UI_KIT_TEXTAREA']","test feedback")
      await this.page.waitForTimeout(1000)
      await this.page.click("button.bwqQCC")
      await this.page.waitForTimeout(3000)
    }

    async plannerimport() {
      await this.page.waitForTimeout(2000)
      await this.page.waitForSelector("a.s12235.s564[href='/meal-plan']")
      await this.page.waitForTimeout(1000)
      await this.page.click("a.s12235.s564[href='/meal-plan']")
      await this.page.waitForSelector("button.s11.s11380.s11383")
      await this.page.waitForTimeout(1000)
      await this.page.click("button.s11.s11380.s11383")
      await this.page.waitForSelector("button.s11.s11421:nth-child(4)")
      await this.page.waitForTimeout(1000)
      await this.page.click("button.s11.s11421:nth-child(4)")
      await this.page.waitForTimeout(2000)
      await this.page.waitForSelector("[data-testid='cd7311fc-bd33-9937-ec4d-9c0b732614af']")
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='cd7311fc-bd33-9937-ec4d-9c0b732614af']")
      await this.page.waitForTimeout(1000)
      await this.page.waitForSelector("[data-testid='00882304-8154-9831-f828-86afd8752637']")
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='00882304-8154-9831-f828-86afd8752637']")
      await this.page.waitForTimeout(1000)
      await this.page.waitForSelector("[data-testid='6ba614ad-462f-714f-65b5-5c1f99689c37']")
    }


}