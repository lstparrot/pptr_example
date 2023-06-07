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

        await this.page.waitForSelector(".s12702")
        await this.page.waitForTimeout(2000)

        const elements = await this.page.$$("[data-testid='3dotsHorizontal']")
        await elements[1].click()
        await this.page.waitForTimeout(2000)

        await this.page.waitForSelector("[data-testid='e5fa1c4d-adfa-1c41-15f2-c8db3f2a735b']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='e5fa1c4d-adfa-1c41-15f2-c8db3f2a735b']")
        await this.page.waitForTimeout(1000)

        await this.page.waitForSelector("button.s11186.s11194")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11186.s11194")
        await this.page.waitForTimeout(1000)

        await elements[1].click()
        await this.page.waitForTimeout(2000)

        await this.page.waitForSelector("[data-testid='5595a36b-91ad-aaf1-978b-7704488d174a']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='5595a36b-91ad-aaf1-978b-7704488d174a']")
        await this.page.waitForTimeout(2000)

        const elements2 = await this.page.$$("div.s11799")
        await elements2[2].click()
        await this.page.waitForTimeout(1000)

        await this.page.waitForSelector("[data-testid='UI_KIT_TEXTAREA']")
        await this.page.waitForTimeout(1000)
        await this.page.type("[data-testid='UI_KIT_TEXTAREA']", "test")

        await this.page.waitForSelector("button.bwqQCC")
        await this.page.waitForTimeout(1000)
        await this.page.type("button.bwqQCC")

        await this.page.waitForTimeout(1000)
    }

    async adsCheckOnSl() {
        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("[data-testid='shopping-list-nav-link']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='shopping-list-nav-link']")
        await this.page.waitForSelector(".s12702")
        await this.page.waitForTimeout(2000)

        const elements = await this.page.$$("[data-testid='3dotsHorizontal']")
        await elements[2].click()
        await this.page.waitForSelector("[data-testid='e5fa1c4d-adfa-1c41-15f2-c8db3f2a735b']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='e5fa1c4d-adfa-1c41-15f2-c8db3f2a735b']")

        await this.page.waitForSelector("button.s11186.s11194")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11186.s11194")
        await this.page.waitForTimeout(1000)
        await elements[2].click()

        await this.page.waitForSelector("[data-testid='5595a36b-91ad-aaf1-978b-7704488d174a']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='5595a36b-91ad-aaf1-978b-7704488d174a']")

        const elements2 = await this.page.$$("div.s11799")
        await elements2[2].click()
        await this.page.waitForTimeout(1000)

        await this.page.waitForSelector("[data-testid='UI_KIT_TEXTAREA']")
        await this.page.waitForTimeout(1000)
        await this.page.type("[data-testid='UI_KIT_TEXTAREA']", "test")

        await this.page.waitForSelector("button.bwqQCC")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.bwqQCC")

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
        await this.page.waitForTimeout(3000)
        await this.page.waitForSelector("[data-testid='recipe-box-nav-link']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='recipe-box-nav-link']")

        await this.page.waitForSelector("[data-testid='7d086b69-b73b-a8d2-9244-b1faaae5ae23']:nth-child(1)")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='7d086b69-b73b-a8d2-9244-b1faaae5ae23']:nth-child(1)")
        
        await this.page.waitForTimeout(10000)

        const evpage = await this.page.$("#banner-logo.GoogleActiveViewElement")


        if (evpage !== "" && evpage !== null && evpage !== undefined) {
            return true
        } else {
            return false
        }
    }

    async adsCheckOnRecipemid() {
        await this.page.waitForSelector("[data-testid='recipe-box-nav-link']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='recipe-box-nav-link']")
        await this.page.evaluate(() => {
            window.scrollBy(0, window.innerHeight);
          })
        await this.page.waitForTimeout(10000)

        const evpage = await this.page.$(".i-amphtml-fill-content.i-amphtml-replaced-content[alt='']")


        if (evpage !== "" && evpage !== null && evpage !== undefined) {
            return true
        } else {
            return false
        }
    }

    async adsCheckOnRecipedow() {
        await this.page.waitForSelector("[data-testid='recipe-box-nav-link']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='recipe-box-nav-link']")
        await this.page.evaluate(() => {
            window.scrollBy(0, window.innerHeight);
          })
        await this.page.waitForTimeout(10000)

        const evpage = await this.page.$(".i-amphtml-fill-content.i-amphtml-replaced-content[alt='']")


        if (evpage !== "" && evpage !== null && evpage !== undefined) {
            return true
        } else {
            return false
        }
    }
 
    




    
}