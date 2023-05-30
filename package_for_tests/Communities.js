import {generateRandomNameCommunities} from '..//scripts/UserScript'


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
        const namecom = generateRandomNameCommunities()
        await this.page.waitForTimeout(3000)
        await this.page.waitForSelector("a.s12235.s564[href='/communities']")
        await this.page.waitForTimeout(2000)
        await this.page.click("a.s12235.s564[href='/communities']")
        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("[data-testid='home-fab-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='home-fab-button']")
        await this.page.waitForTimeout(2000)
        await this.page.waitForSelector("[data-testid='UI_KIT_INPUT']:nth-child(1)")
        await this.page.type("[data-testid='UI_KIT_INPUT']:nth-child(1)", namecom.toString())
        await this.page.waitForSelector("[data-testid='new-community-add-photo']")
        await this.page.waitForTimeout(1000)
        const [fileInput] = await Promise.all([this.page.waitForFileChooser(), this.page.click("[data-testid='new-community-add-photo']")])
        await fileInput.accept(['./images/ParCort.png'])
        await this.page.waitForSelector("button.s11.s11232.s11238")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11.s11232.s11238")
        await this.page.waitForSelector("label.s11262.s12776")
        const elementsradio = await this.page.$$("label.s11262.s12776")
        await this.page.waitForTimeout(2000)
        await elementsradio[1].click()
        await this.page.waitForSelector("[data-testid='UI_KIT_INPUT_ICON']")
        await this.page.waitForTimeout(2000)
        await this.page.click("[data-testid='UI_KIT_INPUT_ICON']")
        const elements = await this.page.$$("div.s12537")
        await elements[0].click()
        await this.page.waitForSelector("button.s11.s11232.s11240")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11.s11232.s11240")
        await this.page.waitForTimeout(2000)
        await this.page.waitForSelector("button.s11.s11232.s11236.s11238")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11.s11232.s11236.s11238")
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