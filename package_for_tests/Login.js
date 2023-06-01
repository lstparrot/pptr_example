import {generateRandomEmail} from '..//scripts/UserScript'
import {credential} from '..//testcreds'


export default class Login {

    constructor(page) {
      this.page = page;
    }
  
    async visit() {
      await this.page.goto('https://my.whisk.com/')
    }
  
    async feelformolduser() {
      const { emailold, passold } = credential()
      await this.page.waitForTimeout(1000)
      await this.page.waitForSelector('button.s11186:nth-child(1)')
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11186:nth-child(1)')
      await this.page.waitForSelector("[data-testid='UI_KIT_INPUT']")
      await this.page.waitForTimeout(1000)
      await this.page.type("[data-testid='UI_KIT_INPUT']", emailold.toString(),  { delay: 100 })
      await this.page.waitForSelector("[data-testid='auth-continue-button']")
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='auth-continue-button']")
      await this.page.waitForTimeout(2000)
      await this.page.waitForSelector("[data-testid='auth-password-input']")
      await this.page.type("[data-testid='auth-password-input']", passold.toString())
      await this.page.waitForSelector("[data-testid='auth-login-button']")
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='auth-login-button']")
      await this.page.waitForTimeout(2000)
      await this.page.waitForSelector('button.s11186.s11194')
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11186.s11194')
    }

    async feelformnewuser() {
      const email = generateRandomEmail()
      await this.page.waitForSelector('button.s110.s11232')
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s110.s11232')
      await this.page.waitForSelector("div.s11304.s69")
      await this.page.type("div.s11304.s69", email.toString())
      await this.page.waitForSelector('button.s11232.s11238')
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11232.s11238')
      }

    async logingoogle() {
      const { email, pass } = credential()
      await this.page.waitForSelector('button.s110.s11232')
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s110.s11232')
      await this.page.waitForSelector("[data-testid='google']")
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='google']")
      const waitForWindow = new Promise(resolve => this.page.on('popup', resolve));
      const newPage = await waitForWindow;
      await newPage.waitForSelector("#identifierId")
      await newPage.type("#identifierId", email.toString())
      await newPage.waitForTimeout(1000)
    /*await newPage.click("#identifierNext > div > button > div.VfPpkd-RLmnJb");
      await newPage.waitForSelector("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input")
      await newPage.type("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input", pass.toString())
      await newPage.waitForSelector("#passwordNext > div > button > span")
      await newPage.waitForTimeout(1000)
      await newPage.click("#passwordNext > div > button > span");*/
      }

    async loginfacebook() {
      await this.page.waitForSelector('button.s110.s11232')
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s110.s11232')
      await this.page.waitForSelector("[data-testid='facebook']")
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='facebook']")
      }
    async loginbuttonsecond() {
      const email = generateRandomEmail()
      await this.page.waitForSelector('div.s11243.s11244')
      await this.page.waitForTimeout(1000)
      await this.page.click('div.s11243.s11244')
      await this.page.waitForSelector("div.s11307.s12523[data-testid='email-phone-number-auth-input']")
      await this.page.type("div.s11307.s12523[data-testid='email-phone-number-auth-input']", 'anonimususertestw@test.com')
      await this.page.waitForSelector('button.s11232.s11238')
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11232.s11238')
      await this.page.waitForSelector("#_input-2.s11300[data-testid='UI_KIT_INPUT']")
      await this.page.type("#_input-2.s11300[data-testid='UI_KIT_INPUT']", 'test@test')
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s11232.s11238.s11240.s11241-1')
      } 
        
}



