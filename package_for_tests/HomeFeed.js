export default class HomeFeed {
    constructor(page) {
      this.page = page;
    }
  
    async homefeedredirect() {
        await this.page.waitForSelector("div.navtab.s11351.s11352[data-testid='home-nav-link']");
        await this.page.click("div.navtab.s11351.s11352[data-testid='home-nav-link']");
        await this.page.waitForSelector('div.s197.s261.s288.s6166.s81');
    }


  }