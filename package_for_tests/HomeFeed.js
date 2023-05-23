export default class HomeFeed {
    constructor(page) {
      this.page = page;
    }
  
    async homefeedpostcreate() {
        await this.page.waitForSelector("div.navtab.s11351.s11352[data-testid='home-nav-link']");
        await this.page.waitForTimeout(1000)
        await this.page.click("div.navtab.s11351.s11352[data-testid='home-nav-link']");
        await this.page.waitForSelector('div.s11501.s197');
        await this.page.waitForTimeout(1000)
        await this.page.click('div.s11501.s197');
        await this.page.waitForSelector('div.s11374');
        await this.page.type("div.s11374", "test post");
        await this.page.waitForSelector('div.s11253.s256');
        await this.page.waitForTimeout(1000)
        await this.page.click('div.s11253.s256');
        await this.page.waitForSelector("div.s11316.s11317[data-testid='6ba614ad-462f-714f-65b5-5c1f99689c37']");
    }


  }