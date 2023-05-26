import {generateRandomEmail} from '..//scripts/UserScript'


export default class Login {

    constructor(page) {
      this.page = page;
    }
  
    async visit() {
      await this.page.goto('https://my.whisk.com/');
    }
  
    async feelformolduser() {
      await this.page.waitForSelector('button.s110.s11232');
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s110.s11232');
      await this.page.waitForSelector("div.s11307.s12523[data-testid='email-phone-number-auth-input']");
      await this.page.type("div.s11307.s12523[data-testid='email-phone-number-auth-input']", 'anonimususertestw@test.com');
      await this.page.waitForSelector('button.s11232.s11238');
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11232.s11238');
      await this.page.waitForSelector("#_input-2.s11300[data-testid='UI_KIT_INPUT']");
      await this.page.type("#_input-2.s11300[data-testid='UI_KIT_INPUT']", 'test@test');
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11232.s11238.s11240.s11241-1');
    }

    async feelformnewuser() {
      const email = generateRandomEmail();
      await this.page.waitForSelector('button.s110.s11232');
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s110.s11232');
      await this.page.waitForSelector("div.s11304.s69");
      await this.page.type("div.s11304.s69", email.toString());
      await this.page.waitForSelector('button.s11232.s11238');
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11232.s11238')
      }

    async logingoogle() {
      await this.page.waitForSelector('button.s110.s11232');
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s110.s11232');
      await this.page.waitForSelector("[data-testid='google']");
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='google']");
      }
    async loginfacebook() {
      await this.page.waitForSelector('button.s110.s11232');
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s110.s11232');
      await this.page.waitForSelector("[data-testid='facebook']");
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='facebook']");
      }
    async loginbuttonsecond() {
      const email = generateRandomEmail();
      await this.page.waitForSelector('div.s11243.s11244');
      await this.page.waitForTimeout(1000)
      await this.page.click('div.s11243.s11244');
      await this.page.waitForSelector("div.s11307.s12523[data-testid='email-phone-number-auth-input']");
      await this.page.type("div.s11307.s12523[data-testid='email-phone-number-auth-input']", 'anonimususertestw@test.com');
      await this.page.waitForSelector('button.s11232.s11238');
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11232.s11238');
      await this.page.waitForSelector("#_input-2.s11300[data-testid='UI_KIT_INPUT']");
      await this.page.type("#_input-2.s11300[data-testid='UI_KIT_INPUT']", 'test@test');
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11232.s11238.s11240.s11241-1');
      } 
        
}



