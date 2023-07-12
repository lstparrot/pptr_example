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
        await this.page.waitForTimeout(2000)
        await this.page.waitForSelector("[href='/communities']")
        await this.page.waitForTimeout(2000)
        await this.page.click("[href='/communities']")
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
        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("[data-testid='da6c1152-0c36-603a-00f7-4991e01449af']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='da6c1152-0c36-603a-00f7-4991e01449af']")

        await this.page.waitForSelector("label.s11232")
        const elementsradio = await this.page.$$("label.s11232")
        await this.page.waitForTimeout(2000)
        await elementsradio[1].click()
        await elementsradio[2].click()

        await this.page.waitForSelector("[data-testid='UI_KIT_TEXTAREA']")
        await this.page.waitForTimeout(2000)
        await this.page.type("[data-testid='UI_KIT_TEXTAREA']", namecom.toString())
        await this.page.waitForTimeout(1000)
        const elements = await this.page.$$("[data-testid='UI_KIT_INPUT']")
        await elements[1].click()
        await this.page.waitForSelector("label.s11277.s12536")
        await this.page.waitForTimeout(1000)

        const elements1 = await this.page.$$("label.s11277.s12536")
        await elements1[0].click()

        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("[form='community-form-modal']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[form='community-form-modal']")
        await this.page.waitForTimeout(4000)
        await this.page.waitForSelector("[data-testid='add-recipes-to-community-modal']")
        
    }

    async communitiesjoin() {
        await this.page.waitForTimeout(5000)
        await this.page.waitForSelector("[href='/communities']")
        await this.page.waitForTimeout(2000)
        await this.page.click("[href='/communities']")
        await this.page.waitForTimeout(2000)
        const elements = await this.page.$$(".s12248")
        const elementCountBefore = elements.length
        await this.page.waitForTimeout(3000)
        const elementsthree = await this.page.$$("[data-testid='community-join-button']")
        await elementsthree[1].click()
        await this.page.waitForTimeout(2000)
        const elementstwo = await this.page.$$(".s12248");
        const elementCountAfter = elementstwo.length
        if (elementCountAfter === elementCountBefore + 1) {
            return true
          }
        return false
    }
}