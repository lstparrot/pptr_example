
export default class HomeFeed {
    constructor(page) {
      this.page = page;
    }
  
    async homefeedpostcreate() {
        await this.page.waitForTimeout(2000)
        await this.page.waitForSelector("[data-testid='home-nav-link']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='home-nav-link']")

        await this.page.waitForSelector("[data-testid='f935e59a-2955-225a-4443-3853827352b0']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='f935e59a-2955-225a-4443-3853827352b0']")

        await this.page.waitForSelector("[data-testid='UI_KIT_TEXTAREA']")
        await this.page.waitForTimeout(1000)
        await this.page.type("[data-testid='UI_KIT_TEXTAREA']", "test post")

        await this.page.waitForSelector("[data-testid='65358485-2a33-d3b7-c5ce-a36ccec6be4e']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='65358485-2a33-d3b7-c5ce-a36ccec6be4e']")

        await this.page.waitForSelector("[data-testid='6ba614ad-462f-714f-65b5-5c1f99689c37']")
        await this.page.waitForTimeout(1000)
    }

    async posteditrecipe(){
      await this.page.waitForTimeout(2000)
      await this.page.waitForSelector("[data-testid='home-nav-link']")
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='home-nav-link']")

      await this.page.waitForSelector("[data-testid='f935e59a-2955-225a-4443-3853827352b0']")
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='f935e59a-2955-225a-4443-3853827352b0']")

      await this.page.waitForSelector("[data-testid='UI_KIT_TEXTAREA']")
      await this.page.waitForTimeout(1000)
      await this.page.type("[data-testid='UI_KIT_TEXTAREA']", "test post")

      await this.page.waitForTimeout(1000)
      await this.page.waitForSelector("div.s12423.s204")
      await this.page.click("div.s12423.s204")

      await this.page.waitForTimeout(1000)
      await this.page.waitForSelector("button.s13:first-of-type")
      await this.page.waitForTimeout(1000)
      await this.page.click("button.s13:first-of-type")

      await this.page.waitForTimeout(2000)
      const elements = await this.page.$$("[data-testid='7d086b69-b73b-a8d2-9244-b1faaae5ae23']")
      await elements[0].click(0)
      await this.page.waitForTimeout(2000)

      await this.page.waitForSelector("button.s11200.s11207")
      await this.page.waitForTimeout(1000)
      await this.page.click("button.s11200.s11207")

      await this.page.waitForSelector("[data-testid='65358485-2a33-d3b7-c5ce-a36ccec6be4e']")
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='65358485-2a33-d3b7-c5ce-a36ccec6be4e']")

      await this.page.waitForTimeout(1000)

      await this.page.waitForSelector("[data-testid='6ba614ad-462f-714f-65b5-5c1f99689c37']")


    }

    async posteditphoto(){
        await this.page.waitForTimeout(2000)
        await this.page.waitForSelector("[data-testid='home-nav-link']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='home-nav-link']")

        await this.page.waitForSelector("[data-testid='f935e59a-2955-225a-4443-3853827352b0']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='f935e59a-2955-225a-4443-3853827352b0']")

        await this.page.waitForSelector("[data-testid='UI_KIT_TEXTAREA']")
        await this.page.waitForTimeout(1000)
        await this.page.type("[data-testid='UI_KIT_TEXTAREA']", "test post")
        await this.page.waitForTimeout(1000)

      const [fileInput] = await Promise.all([this.page.waitForFileChooser(), this.page.click("div.s12423.s205.s271")])
      await fileInput.accept(['./images/ParCort.png'])

      await this.page.waitForSelector("[data-testid='da6c1152-0c36-603a-00f7-4991e01449af']")
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='da6c1152-0c36-603a-00f7-4991e01449af']")

      await this.page.waitForSelector("[data-testid='65358485-2a33-d3b7-c5ce-a36ccec6be4e']")
      await this.page.waitForTimeout(10000)
      await this.page.click("[data-testid='65358485-2a33-d3b7-c5ce-a36ccec6be4e']")
      
      await this.page.waitForTimeout(1000)
      await this.page.waitForSelector("[data-testid='65358485-2a33-d3b7-c5ce-a36ccec6be4e']")
    }
  }
