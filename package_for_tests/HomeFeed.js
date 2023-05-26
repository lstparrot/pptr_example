export default class HomeFeed {
    constructor(page) {
      this.page = page;
    }
  
    async homefeedpostcreate() {
        await this.page.waitForSelector("div.navtab.s11357.s11358[data-testid='home-nav-link']");
        await this.page.waitForTimeout(1000)
        await this.page.click("div.navtab.s11357.s11358[data-testid='home-nav-link']");
        await this.page.waitForSelector('div.s11477.s198.s264');
        await this.page.waitForTimeout(1000)
        await this.page.click('div.s11477.s198.s264');
        await this.page.waitForSelector('div.s11360');
        await this.page.type("div.s11360", "test post");
        await this.page.waitForSelector('div.s11242.s257');
        await this.page.waitForTimeout(1000)
        await this.page.click('div.s11242.s257');
        await this.page.waitForSelector("div.s11317.s11318");
    }

    async posteditrecipe(){
      await this.page.waitForSelector("div.navtab.s11357.s11358[data-testid='home-nav-link']");
      await this.page.waitForTimeout(1000)
      await this.page.click("div.navtab.s11357.s11358[data-testid='home-nav-link']");
      await this.page.waitForSelector('div.s11477.s198.s264');
      await this.page.waitForTimeout(1000)
      await this.page.click('div.s11477.s198.s264');
      await this.page.waitForSelector('div.s11360');
      await this.page.click('div.s11360');
      await this.page.type("div.s11360", "test post");
      await this.page.waitForSelector("div.s12793.s197 [type='button']");
      await this.page.click("div.s12793.s197 [type='button']");
      await this.page.waitForTimeout(1000)
      await this.page.waitForSelector("button.s11.s19:first-of-type");
      await this.page.waitForTimeout(1000)
      await this.page.click("button.s11.s19:first-of-type");
      await this.page.waitForSelector("div[data-testid='7d086b69-b73b-a8d2-9244-b1faaae5ae23']:first-of-type");
      await this.page.waitForTimeout(1000)
      await this.page.click("div[data-testid='7d086b69-b73b-a8d2-9244-b1faaae5ae23']:first-of-type");
      await this.page.waitForSelector("button.s11.s11232.s11238");
      await this.page.waitForTimeout(1000)
      await this.page.click("button.s11.s11232.s11238");
      await this.page.waitForSelector("div.s11242.s257");
      await this.page.waitForTimeout(1000)
      await this.page.click("div.s11242.s257");

    }

    async posteditphoto(){
      await this.page.waitForSelector("div.navtab.s11357.s11358[data-testid='home-nav-link']");
      await this.page.waitForTimeout(1000)
      await this.page.click("div.navtab.s11357.s11358[data-testid='home-nav-link']");
      await this.page.waitForSelector('div.s11477.s198.s264');
      await this.page.waitForTimeout(1000)
      await this.page.click('div.s11477.s198.s264');
      await this.page.waitForSelector('div.s11360');
      await this.page.click('div.s11360');
      await this.page.type("div.s11360", "test post");
      await this.page.waitForSelector("div.s198.s264.s12793");
      await this.page.waitForTimeout(3000)
      const fileInput = await this.page.$("div.s198.s264.s12793 input[type='file']");
      await fileInput.uploadFile('/images/ParCort.png')
      await this.page.waitForSelector("button.s11.s11232.s11238");
      await this.page.waitForTimeout(1000)
      await this.page.click("button.s11.s11232.s11238");
      await this.page.waitForSelector("button.s11.s11232.s11240.s11241-93.s1196[data-testid='65358485-2a33-d3b7-c5ce-a36ccec6be4e']");
      await this.page.waitForTimeout(1000)
      await this.page.click("button.s11.s11232.s11240.s11241-93.s1196[data-testid='65358485-2a33-d3b7-c5ce-a36ccec6be4e']");

      
    }

  }