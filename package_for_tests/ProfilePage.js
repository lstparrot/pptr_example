import {generateRandomUserName} from '..//scripts/UserScript'
import {credential} from '..//testcreds'

export default class ProfilePage {

    constructor(page) {
      this.page = page;
    }

    async profilepageview() {
        await this.page.waitForTimeout(2000)
        await this.page.waitForSelector("[data-testid='avatar-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='avatar-button']")
        await this.page.waitForSelector("[data-testid='9a9a9b7c-3afe-4aad-b849-a35f49d219e5']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='9a9a9b7c-3afe-4aad-b849-a35f49d219e5']")
        await this.page.waitForTimeout(1000)
    }

    async profileedit() {
        const namecom = generateRandomUserName()
        await this.page.waitForTimeout(3000)
        await this.page.waitForSelector("[data-testid='avatar-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='avatar-button']")

        await this.page.waitForSelector("[data-testid='9a9a9b7c-3afe-4aad-b849-a35f49d219e5']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='9a9a9b7c-3afe-4aad-b849-a35f49d219e5']")

        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("[data-testid='011f7589-0590-be65-8f03-6da585fe8e0d']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='011f7589-0590-be65-8f03-6da585fe8e0d']")

        await this.page.waitForSelector("button.s12719")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s12719")
        await this.page.waitForTimeout(1000)

        await this.page.waitForSelector("button.s13:nth-child(2)")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s13:nth-child(2)")

        await this.page.waitForTimeout(1000)
        const [fileInput] = await Promise.all([this.page.waitForFileChooser(), this.page.click("button.s12719.s4")])
        await fileInput.accept(['./images/ParCort.png'])
        await this.page.waitForTimeout(1000)
        const elements = await this.page.$$("[data-testid='UI_KIT_INPUT']")
        await this.page.waitForTimeout(1000)
        await elements[0].click({ clickCount: 3 })
        await elements[0].press('Backspace')
        await elements[0].type(namecom.toString())
        await this.page.waitForTimeout(1000)
        await elements[1].click({ clickCount: 3 })
        await elements[1].press('Backspace')
        await elements[1].type(namecom.toString())
        await this.page.waitForTimeout(1000)
        
        await this.page.waitForSelector("[data-testid='UI_KIT_TEXTAREA']")
        await this.page.waitForTimeout(1000)
        await this.page.type("[data-testid='UI_KIT_TEXTAREA']", namecom.toString())

        const elementslist = await this.page.$$("[data-testid='edit']")
        await this.page.waitForTimeout(1000)
        await elementslist[0].click()
        await this.page.waitForTimeout(2000)
        const elementsuikit = await this.page.$$("[data-testid='UI_KIT_INPUT']")
        await elementsuikit[3].click({ clickCount: 3 })
        await elementsuikit[3].press('Backspace')
        await elementsuikit[3].type("www.example.com",  { delay: 100 })

        await this.page.waitForSelector("button.s11200.s11207.s11209:nth-child(2)")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11200.s11207.s11209:nth-child(2)")
        await this.page.waitForTimeout(1000)

        await elementslist[1].click()
        await this.page.waitForTimeout(2000)
        const elementsuikit2 = await this.page.$$("[data-testid='UI_KIT_INPUT']")
        await elementsuikit2[3].click({ clickCount: 3 })
        await elementsuikit2[3].press('Backspace')
        await elementsuikit2[3].type("www.example.com",  { delay: 100 })

        await this.page.waitForSelector("button.s11200.s11207.s11209:nth-child(2)")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11200.s11207.s11209:nth-child(2)")
        await this.page.waitForTimeout(1000)

        await elementslist[2].click()
        await this.page.waitForTimeout(2000)
        const elementsuikit3 = await this.page.$$("[data-testid='UI_KIT_INPUT']")
        await elementsuikit3[3].click({ clickCount: 3 })
        await elementsuikit3[3].press('Backspace')
        await elementsuikit3[3].type("www.youtube.com/test",  { delay: 100 })

        await this.page.waitForSelector("button.s11200.s11207.s11209:nth-child(2)")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11200.s11207.s11209:nth-child(2)")
        await this.page.waitForTimeout(1000)

        await elementslist[3].click()
        await this.page.waitForTimeout(2000)
        const elementsuikit4 = await this.page.$$("[data-testid='UI_KIT_INPUT']")
        await elementsuikit4[3].click({ clickCount: 3 })
        await elementsuikit4[3].press('Backspace')
        await elementsuikit4[3].type("www.example.com",  { delay: 100 })

        await this.page.waitForSelector("button.s11200.s11207.s11209:nth-child(2)")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11200.s11207.s11209:nth-child(2)")
        await this.page.waitForTimeout(1000)

        await this.page.waitForSelector("button[data-testid='06e3009f-e230-49ad-bddf-151d6a67815b']")
        await this.page.waitForTimeout(1000)
        await this.page.click("button[data-testid='06e3009f-e230-49ad-bddf-151d6a67815b']")
        await this.page.waitForTimeout(1000)
    }

    async profilepageeditemail() {
        const { emailold, passold, emailnew } = credential()
        await this.page.waitForTimeout(3000)
        await this.page.waitForSelector("[data-testid='avatar-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='avatar-button']")

        await this.page.waitForSelector("[data-testid='9a9a9b7c-3afe-4aad-b849-a35f49d219e5']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='9a9a9b7c-3afe-4aad-b849-a35f49d219e5']")

        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("[data-testid='settings']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='settings']")

        await this.page.waitForSelector("[data-testid='user-settings-account-settings-link-value']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='user-settings-account-settings-link-value']")

        await this.page.waitForSelector("[data-testid='user-settings-email-value']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='user-settings-email-value']")

        await this.page.waitForTimeout(2000)
        const elements = await this.page.$$("[data-testid='UI_KIT_INPUT']")
        await elements[0].click({ clickCount: 3 })
        await elements[0].press('Backspace')
        await elements[0].type(emailnew.toString(),  { delay: 100 })

        await elements[1].click({ clickCount: 3 })
        await elements[1].press('Backspace')
        await elements[1].type(passold.toString(),  { delay: 100 })

        await this.page.waitForSelector("[data-testid='email-options-save-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='email-options-save-button']")
        
        await this.page.waitForSelector("[data-testid='user-settings-email-value']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='user-settings-email-value']")

        await this.page.waitForTimeout(2000)
        const elements2 = await this.page.$$("[data-testid='UI_KIT_INPUT']")
        await elements2[0].click({ clickCount: 3 })
        await elements2[0].press('Backspace')
        await elements2[0].type(emailold.toString(),  { delay: 100 })

        await elements2[1].click({ clickCount: 3 })
        await elements2[1].press('Backspace')
        await elements2[1].type(passold.toString(),  { delay: 100 })
        await this.page.waitForSelector("[data-testid='email-options-save-button']")
        await this.page.waitForTimeout(1000)

        await this.page.click("[data-testid='email-options-save-button']")
        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("[data-testid='account-modal']")
    }

    async profilepageeditpass() {
        const {passold, passnew } = credential()
        await this.page.waitForTimeout(2000)
        await this.page.waitForSelector("[data-testid='avatar-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='avatar-button']")

        await this.page.waitForSelector("[data-testid='9a9a9b7c-3afe-4aad-b849-a35f49d219e5']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='9a9a9b7c-3afe-4aad-b849-a35f49d219e5']")
        await this.page.waitForTimeout(1000)

        await this.page.waitForSelector("[data-testid='settings']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='settings']")

        await this.page.waitForSelector("[data-testid='user-settings-account-settings-link-value']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='user-settings-account-settings-link-value']")

        await this.page.waitForSelector("[data-testid='user-settings-password-value']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='user-settings-password-value']")
        
        await this.page.waitForTimeout(2000)
        const elements = await this.page.$$("[data-testid='UI_KIT_INPUT']")
        await elements[0].click({ clickCount: 3 })
        await elements[0].press('Backspace')
        await elements[0].type(passold.toString(),  { delay: 100 })
        await this.page.waitForTimeout(1000)
        await elements[1].type(passnew.toString(),  { delay: 100 })
        await this.page.waitForTimeout(1000)
        await elements[2].type(passnew.toString(),  { delay: 100 })

        await this.page.waitForSelector("button.s11200.s11207")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11200.s11207")
        await this.page.waitForTimeout(3000)

        await this.page.waitForSelector("[data-testid='user-settings-password-value']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='user-settings-password-value']")

        await this.page.waitForTimeout(2000)
        const elements2 = await this.page.$$("[data-testid='UI_KIT_INPUT']")
        await elements2[0].click({ clickCount: 3 })
        await elements2[0].press('Backspace')
        await elements2[0].type(passnew.toString(),  { delay: 100 })
        await this.page.waitForTimeout(1000)
        await elements2[1].type(passold.toString(),  { delay: 100 })
        await this.page.waitForTimeout(1000)
        await elements2[2].type(passold.toString(),  { delay: 100 })

        await this.page.waitForSelector("button.s11200.s11207")
        await this.page.waitForTimeout(1000)
        await this.page.click("button.s11200.s11207")
        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("[data-testid='account-modal']")
    }

    async profilepageeditregion() {
        await this.page.waitForTimeout(2000)
        await this.page.waitForSelector("[data-testid='avatar-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='avatar-button']")

        await this.page.waitForSelector("[data-testid='9a9a9b7c-3afe-4aad-b849-a35f49d219e5']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='9a9a9b7c-3afe-4aad-b849-a35f49d219e5']")

        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("[data-testid='settings']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='settings']")

        await this.page.waitForSelector("[data-testid='user-settings-account-settings-link-edit-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='user-settings-account-settings-link-edit-button']")

        await this.page.waitForSelector("[data-testid='user-settings-region-edit-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='user-settings-region-edit-button']")

        await this.page.waitForTimeout(2000)
        const elements = await this.page.$$("label.s11277")
        await this.page.waitForTimeout(1000)
        await elements[16].click()

        await this.page.waitForSelector("[data-testid='user-settings-region-edit-button']")
        await this.page.waitForTimeout(1000)
        await this.page.click("[data-testid='user-settings-region-edit-button']")

        await this.page.waitForTimeout(2000)
        const elements2 = await this.page.$$("label.s11277")
        await this.page.waitForTimeout(1000)
        await elements2[15].click()

        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector("[data-testid='account-modal']")
    }
}