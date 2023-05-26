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


  }