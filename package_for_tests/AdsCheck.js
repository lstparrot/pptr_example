
export default class AdsCheck {

    constructor(page) {
      this.page = page;
    }
    
    async adsCheckOnMp() {
        await this.page.waitForTimeout(2000)
        await this.page.waitForSelector("[data-testid='meal-plan-nav-link']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='meal-plan-nav-link']")
        await this.page.waitForTimeout(2000)

        const elements = await this.page.$$("[data-testid='3dotsHorizontal']")
        await elements[1].click()
        await this.page.waitForTimeout(2000)

        await this.page.waitForSelector("[data-testid='e5fa1c4d-adfa-1c41-15f2-c8db3f2a735b']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='e5fa1c4d-adfa-1c41-15f2-c8db3f2a735b']")
        await this.page.waitForTimeout(1000)

        await this.page.waitForSelector("button.s11200.s11209")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11200.s11209")
        await this.page.waitForTimeout(1000)

        await elements[1].click()
        await this.page.waitForTimeout(2000)

        await this.page.waitForSelector("[data-testid='5595a36b-91ad-aaf1-978b-7704488d174a']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='5595a36b-91ad-aaf1-978b-7704488d174a']")
        await this.page.waitForTimeout(2000)

        const elements2 = await this.page.$$("button.s12780")
        await elements2[2].click()
        await this.page.waitForTimeout(1000)

        await this.page.waitForSelector("[data-testid='UI_KIT_TEXTAREA']")
        await this.page.waitForTimeout(1000)
        await this.page.type("[data-testid='UI_KIT_TEXTAREA']", "test")

        await this.page.waitForSelector("button.s11200.s11209")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11200.s11209")

        await this.page.waitForTimeout(1000)
    }

    async adsCheckOnSl() {
        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("[data-testid='shopping-list-nav-link']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='shopping-list-nav-link']")

        await this.page.waitForTimeout(2000)

        const elements = await this.page.$$("[data-testid='3dotsHorizontal']")
        await elements[5].click()
        await this.page.waitForSelector("[data-testid='e5fa1c4d-adfa-1c41-15f2-c8db3f2a735b']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='e5fa1c4d-adfa-1c41-15f2-c8db3f2a735b']")

        await this.page.waitForSelector("button.s11200.s11209")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11200.s11209")

        await this.page.waitForTimeout(1000)
        await elements[5].click()

        await this.page.waitForSelector("[data-testid='5595a36b-91ad-aaf1-978b-7704488d174a']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='5595a36b-91ad-aaf1-978b-7704488d174a']")

        const elements2 = await this.page.$$("button.s12780")
        await elements2[5].click()
        await this.page.waitForTimeout(1000)

        await this.page.waitForSelector("[data-testid='UI_KIT_TEXTAREA']")
        await this.page.waitForTimeout(1000)
        await this.page.type("[data-testid='UI_KIT_TEXTAREA']", "test")

        await this.page.waitForSelector("button.s11200.s11209")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11200.s11209")

        await this.page.waitForTimeout(1000)
    }
    async adsCheckOnHF() {
        await this.page.waitForSelector("[data-testid='home-nav-link']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='home-nav-link']")

        await this.page.waitForTimeout(10000)

        const evpage = await this.page.$("div.s12124.s185")

        if (evpage !== "" && evpage !== null && evpage !== undefined) {
            return true
        } else {
            return false
        }
    }

    async adsCheckOnRecipetop() {
        await this.page.waitForTimeout(4000)
        await this.page.waitForSelector("[data-testid='recipe-box-nav-link']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='recipe-box-nav-link']")

        await this.page.waitForTimeout(2000)
        const elements = await this.page.$$("[data-testid='img']")
        await elements[0].click()
        
        await this.page.waitForTimeout(10000)
        const evpage = await this.page.$("#banner-logo.GoogleActiveViewElement")

        if (evpage !== "" && evpage !== null && evpage !== undefined) {
            return true
        } else {
            return false
        }
    }

    async adsCheckOnRecipemid() {
        await this.page.waitForTimeout(4000)
        await this.page.waitForSelector("[data-testid='recipe-box-nav-link']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='recipe-box-nav-link']")

        await this.page.waitForTimeout(2000)
        const elements = await this.page.$$("[data-testid='img']")
        await elements[0].click()

        const evpage = await this.page.$(".i-amphtml-fill-content.i-amphtml-replaced-content[alt='']")

        if (evpage !== "" && evpage !== null && evpage !== undefined) {
            return true
        } else {
            return false
        }
    }

    async adsCheckOnRecipedow() {
        await this.page.waitForTimeout(4000)
        await this.page.waitForSelector("[data-testid='recipe-box-nav-link']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='recipe-box-nav-link']")

        await this.page.waitForTimeout(2000)
        const elements = await this.page.$$("[data-testid='img']")
        await elements[0].click()
        await this.page.waitForTimeout(10000)

        const evpage = await this.page.$(".i-amphtml-fill-content.i-amphtml-replaced-content[alt='']")

        if (evpage !== "" && evpage !== null && evpage !== undefined) {
            return true
        } else {
            return false
        }
    }
}