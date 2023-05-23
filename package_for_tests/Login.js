export default class Login {


    constructor(page) {
      this.page = page;
    }
  
    async visit() {
      await this.page.goto('https://my.whisk.com/');
    }
  
    async feelform() {
      await this.page.waitForSelector('button.s11243.s11251.s11252-1.s1487.s6');
      await this.page.waitForTimeout(2000)
      await this.page.click('button.s11243.s11251.s11252-1.s1487.s6');
      await this.page.waitForSelector('div[data-testid="authentication-form"]');
      await this.page.type('#_input-1.s11296', 'anonimususertestw@test.com');
      await this.page.waitForSelector('button.s11243.s11249');
      await this.page.waitForTimeout(2000)
      await this.page.click('button.s11243.s11249');
      await this.page.waitForSelector('#_input-2.s11296');
      await this.page.type('#_input-2.s11296', 'test@test');
      await this.page.waitForTimeout(2000)
      await this.page.click('button.s11243.s11249.s11251');
    }
}



