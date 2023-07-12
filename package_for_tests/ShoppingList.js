import {generateRandomUserName} from '..//scripts/UserScript'


export default class ShopingList {

    constructor(page) {
      this.page = page;
    }

    async createritem() {
        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("[data-testid='shopping-list-nav-link']")

        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='shopping-list-nav-link']")
        await this.page.waitForTimeout(2000)

        const elements2 = await this.page.$$("[data-testid='shopping-list-item']")
        const elementCountBefore = elements2.length
        await this.page.waitForTimeout(1000)

        await this.page.waitForSelector("[data-testid='desktop-add-item-autocomplete']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='desktop-add-item-autocomplete']")

        await this.page.waitForTimeout(2000)
        const elements = await this.page.$$("[data-testid='autocomplete-item']")
        await elements[0].click()
        await elements[1].click()
        await elements[2].click()

        await this.page.waitForTimeout(2000)
        const elements3 = await this.page.$$("[data-testid='shopping-list-item']")
        const elementCountAfter = elements3.length

        await this.page.waitForSelector("[data-testid='vertical-dots-shopping-list-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='vertical-dots-shopping-list-button']")

        await this.page.waitForSelector("[data-testid='shopping-list-clear-list-menu-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='shopping-list-clear-list-menu-button']")

        await this.page.waitForTimeout(2000)

        if (elementCountAfter === elementCountBefore +3) {
            return true
          }
            return false

    }

    async createritemtype() {
        const namecom = generateRandomUserName()
        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("[data-testid='shopping-list-nav-link']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='shopping-list-nav-link']")

        await this.page.waitForTimeout(2000)
        const elements2 = await this.page.$$("[data-testid='shopping-list-item']")
        const elementCountBefore = elements2.length
        await this.page.waitForTimeout(1000)

        await this.page.waitForSelector("[data-testid='desktop-add-item-autocomplete']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='desktop-add-item-autocomplete']")

        await this.page.waitForTimeout(2000)
        const elements = await this.page.$$("[data-testid='desktop-add-item-autocomplete']")
        await elements[0].click()
        await elements[0].type("potato")
        await elements[0].press('Enter')

        await this.page.waitForTimeout(2000)
        const elements3 = await this.page.$$("[data-testid='shopping-list-item']")
        const elementCountAfter = elements3.length
        await this.page.waitForTimeout(1000)

        await this.page.waitForSelector("[data-testid='vertical-dots-shopping-list-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='vertical-dots-shopping-list-button']")

        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("[data-testid='shopping-list-clear-list-menu-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='shopping-list-clear-list-menu-button']")

        await this.page.waitForTimeout(2000)

        if (elementCountAfter === elementCountBefore +1) {
            return true
          }
            return false

    }

    async createnewlist() {
        const namecom = generateRandomUserName()
        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("[data-testid='shopping-list-nav-link']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='shopping-list-nav-link']")

        await this.page.waitForTimeout(2000)
        const elements = await this.page.$$("div.s11393 .s12285")
        const elementCountBefore = elements.length
        await this.page.waitForTimeout(1000)

        await this.page.waitForSelector("[data-testid='create-new-shopping-list-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='create-new-shopping-list-button']")
        await this.page.waitForTimeout(1000)

        await this.page.waitForSelector("[data-testid='UI_KIT_INPUT']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='UI_KIT_INPUT']")
        await this.page.type("[data-testid='UI_KIT_INPUT']", namecom, { delay: 100 })

        await this.page.waitForSelector("[data-testid='create-new-shopping-list-create-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='create-new-shopping-list-create-button']")
        await this.page.waitForTimeout(2000)

        const elements2 = await this.page.$$("div.s11393 .s12285")
        const elementCountAfter = elements2.length

        if (elementCountAfter === elementCountBefore +1) {
            return true
          }
            return false
}
}