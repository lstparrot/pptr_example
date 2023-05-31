import {generateRandomUserName} from '..//scripts/UserScript'


export default class Saved {

    constructor(page) {
      this.page = page;
    }

    async createrecipe() {
        const namecom = generateRandomUserName()

        await this.page.waitForTimeout(2000)
        await this.page.waitForSelector("[data-testid='recipe-box-nav-link']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='recipe-box-nav-link']")

        await this.page.waitForSelector("button.s11.s11380")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11.s11380")

        await this.page.waitForSelector("[data-testid='create-recipe-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='create-recipe-button']")

        await this.page.waitForTimeout(3000)
        const elements = await this.page.$$("[data-testid='UI_KIT_INPUT']")
        await elements[0].type(namecom)
        await elements[1].type("1")
        await elements[2].type("1")
        await elements[3].type("1")
        await elements[4].type("1")
        await elements[5].type("1")
        await elements[6].click()

        await this.page.waitForSelector("[data-testid='recipe-actions-select-collection-option-name']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='recipe-actions-select-collection-option-name']")
        
        const [fileInput] = await Promise.all([this.page.waitForFileChooser(), this.page.click("[data-testid='file-uploader']")])
        await fileInput.accept(['./images/ParCort.png'])

        await this.page.waitForTimeout(2000)
        const elements2 = await this.page.$$("[data-testid='UI_KIT_TEXTAREA']")
        await elements2[0].type(namecom)
        await elements2[1].type(namecom)
        await elements2[1].press('Enter')
        await elements2[2].type(namecom)
        await elements2[1].press('Enter')
        await this.page.waitForTimeout(1000)

        await this.page.waitForSelector("[data-testid='new-recipe-save-button-small']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='new-recipe-save-button-small']")

        await this.page.waitForSelector("[data-testid='6ba614ad-462f-714f-65b5-5c1f99689c37']")
        await this.page.waitForTimeout(1000)
    }




}