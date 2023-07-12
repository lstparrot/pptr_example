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
      await this.page.waitForSelector('button.s111:nth-child(1)')
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s111:nth-child(1)')
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
      await this.page.waitForTimeout(4000)
      const elements = await this.page.$$("button.s11200")
      await elements[2].click()
      await this.page.waitForTimeout(4000)
    }

    async feelformnewusercookie() {
      const email = generateRandomEmail()
      await this.page.waitForTimeout(1000)
      await this.page.waitForSelector('button.s111:nth-child(1)')
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s111:nth-child(1)')
      await this.page.waitForSelector("[data-testid='UI_KIT_INPUT']")
      await this.page.waitForTimeout(1000)
      await this.page.type("[data-testid='UI_KIT_INPUT']", email.toString(),  { delay: 100 })
      await this.page.waitForSelector("[data-testid='auth-continue-button']")
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='auth-continue-button']")
      await this.page.waitForTimeout(2000)
      await this.page.waitForSelector("[data-testid='df93b370-5132-6be4-fbb2-632d6152a4e2']")
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='df93b370-5132-6be4-fbb2-632d6152a4e2']")
      await this.page.waitForTimeout(8000)
      const elements = await this.page.$$("div.s11212")
      await elements[2].click()
      
      }

      async feelformnewuser() {
        const email = generateRandomEmail()
        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector('button.s111:nth-child(1)')
        await this.page.waitForTimeout(1000)
        await this.page.click('button.s111:nth-child(1)')
        await this.page.waitForSelector("[data-testid='UI_KIT_INPUT']")
        await this.page.waitForTimeout(1000)
        await this.page.type("[data-testid='UI_KIT_INPUT']", email.toString(),  { delay: 80 })
        await this.page.waitForSelector("[data-testid='auth-continue-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='auth-continue-button']")
        await this.page.waitForTimeout(2000)
        await this.page.waitForSelector("[data-testid='df93b370-5132-6be4-fbb2-632d6152a4e2']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='df93b370-5132-6be4-fbb2-632d6152a4e2']")        
        }

    async logingoogle() {
      const { email, pass } = credential()
      await this.page.waitForTimeout(1000)
      await this.page.waitForSelector('button.s111:nth-child(1)')
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s111:nth-child(1)')
      await this.page.waitForSelector("[data-testid='google']")
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='google']")
      const waitForWindow = new Promise(resolve => this.page.on('popup', resolve));
      const newPage = await waitForWindow;
      await newPage.waitForSelector("#identifierId")
      await newPage.type("#identifierId", email.toString(), { delay: 100 })
      await newPage.waitForTimeout(1000)

      /* //актуально при специализированных проверках с помощью puppeteer-extra
      await newPage.click("#identifierNext > div > button > div.VfPpkd-RLmnJb");
      await newPage.waitForSelector("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input")
      await newPage.type("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input", pass.toString(), { delay: 100 })
      await newPage.waitForSelector("#passwordNext > div > button > span")
      await newPage.waitForTimeout(1000)
      await newPage.click("#passwordNext > div > button > span")*/
      }

    async loginfacebook() {
      await this.page.waitForTimeout(1000)
      await this.page.waitForSelector('button.s111:nth-child(1)')
      await this.page.waitForTimeout(1000)
      await this.page.click('button.s111:nth-child(1)')
      await this.page.waitForSelector("[data-testid='facebook']")
      await this.page.waitForTimeout(1000)
      await this.page.click("[data-testid='facebook']")
      await this.page.waitForTimeout(2000)
      }

    async loginbuttonsecond() {
      const { emailold, passold } = credential()
      await this.page.waitForTimeout(1000)
      await this.page.waitForSelector('div.s11212.s11213')
      await this.page.waitForTimeout(1000)
      await this.page.click('div.s11212.s11213')
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
      await this.page.waitForTimeout(4000)
      const elements = await this.page.$$("button.s11200")
      await elements[2].click()
      } 
        
}



