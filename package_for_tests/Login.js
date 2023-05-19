export default class Login {
    constructor(page) {
      this.page = page;
    }
  
    async visit() {
      await this.page.goto('https://my.whisk.com/');
    }
  
    async feelform() {
      await this.page.waitForSelector('button.s11243.s11251.s11252-1.s1487.s6');
      await this.page.click('button.s11243.s11251.s11252-1.s1487.s6');
      await this.page.waitForSelector('div[data-testid="authentication-form"]');
      await this.page.type('#_input-1.s11296', 'test@test.com');
      await this.page.waitForSelector('button.s11243.s11249');
      await this.page.click('button.s11243.s11249');
      // await this.page.waitForSelector('[data-testid="9c5c1a2c-cdfe-09a6-1734-f1bf8c5cf28e"]');
    }
  }