
export default class Login {



    async visit(){
        await page.goto("https://my.whisk.com/")
    }

    async feelform(){
        await page.waitForSelector('*[@id="app"]/div[1]/nav[2]/button/div/div')
        await page.click('*[@id="app"]/div[1]/nav[2]/button/div/div')
    }

}