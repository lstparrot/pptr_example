import {generateRandomEmail} from '..//scripts/UserScript'


export default class Login {

    constructor(page) {
      this.page = page;
    }
  
    async visit() {
      await this.page.goto('https://my.whisk.com/');
    }
  
    async feelformolduser() {
      await this.page.waitForSelector('button.s11243.s11251.s11252-1.s1487.s6');
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11243.s11251.s11252-1.s1487.s6');
      await this.page.waitForSelector('div[data-testid="authentication-form"]');
      await this.page.type('#_input-1.s11296', 'anonimususertestw@test.com');
      await this.page.waitForSelector('button.s11243.s11249');
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11243.s11249');
      await this.page.waitForSelector('#_input-2.s11296');
      await this.page.type('#_input-2.s11296', 'test@test');
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11243.s11249.s11251');
    }

    async feelformnewuser() {
      const email = generateRandomEmail();
      await this.page.waitForSelector('button.s11243.s11251.s11252-1.s1487.s6');
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11243.s11251.s11252-1.s1487.s6');
      await this.page.waitForSelector('div[data-testid="authentication-form"]');
      await this.page.type('#_input-1.s11296', email.toString());
      await this.page.waitForSelector('button.s11243.s11249');
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11243.s11249')
      }

    async logingoogle() {
      await this.page.waitForSelector('button.s11243.s11251.s11252-1.s1487.s6');
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11243.s11251.s11252-1.s1487.s6');
      await this.page.waitForSelector("button.s11349.s11350.s7[data-testid='auth-continue-with-google-button']");
      await this.page.waitForTimeout(1000)
      await this.page.click("button.s11349.s11350.s7[data-testid='auth-continue-with-google-button']");
      }
    async loginfacebook() {
      await this.page.waitForSelector('button.s11243.s11251.s11252-1.s1487.s6');
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11243.s11251.s11252-1.s1487.s6');
      await this.page.waitForSelector("button.s11349.s11350.s11353");
      await this.page.waitForTimeout(1000)
      await this.page.click("button.s11349.s11350.s11353");
      }
    async loginbuttonsecond() {
      const email = generateRandomEmail();
      await this.page.waitForSelector('div.s11243.s11244');
      await this.page.waitForTimeout(1000)
      await this.page.click('div.s11243.s11244');
      await this.page.waitForSelector("div.s11301.s69");
      await this.page.type('div.s11301.s69', email.toString());
      await this.page.waitForSelector('button.s11232.s11238');
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11232.s11238')
      } 
        
}



