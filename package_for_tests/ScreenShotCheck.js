const fs = require('fs');
const pixelmatch = require('pixelmatch');
const { PNG } = require('pngjs');


export default class ScreenShot {
    constructor(page) {
        this.page = page;
      }

async screenShotMainPage() {
  await this.page.waitForTimeout(1000)
  const screenshotPath = 'images/screenshot.png'
  await this.page.screenshot({ path: screenshotPath })
  // Загрузить скриншот и другое изображение для сравнения
  const screenshotImage = PNG.sync.read(fs.readFileSync(screenshotPath))
  const referenceImage = PNG.sync.read(fs.readFileSync('images/screenshotmain.png')) // Замените на путь к вашему изображению для сравнения
  // Создать буфер для различий
  const diffImage = new PNG({ width: screenshotImage.width, height: screenshotImage.height });
  // Сравнить изображения и сохранить различия в буфере
  const diffPixels = pixelmatch(screenshotImage.data, referenceImage.data, diffImage.data, screenshotImage.width, screenshotImage.height, { threshold: 0.1 })
  // Сохранить различия в файле
  const diffImagePath = 'images/diff.png';
  fs.writeFileSync(diffImagePath, PNG.sync.write(diffImage));
  //console.log(`Количество различий: ${diffPixels}`);
}

async screenShotProfilePage() {
    await this.page.waitForTimeout(1000)
    const screenshotPath = 'images/screenshotprofile.png'
    await this.page.screenshot({ path: screenshotPath })

    const screenshotImage = PNG.sync.read(fs.readFileSync(screenshotPath))
    const referenceImage = PNG.sync.read(fs.readFileSync('images/screenshotprofilemain.png'))

    const diffImage = new PNG({ width: screenshotImage.width, height: screenshotImage.height });
    const diffPixels = pixelmatch(screenshotImage.data, referenceImage.data, diffImage.data, screenshotImage.width, screenshotImage.height, { threshold: 0.1 })
    
    const diffImagePath = 'diff.png';

    fs.writeFileSync(diffImagePath, PNG.sync.write(diffImage));

    console.log(`Количество различий: ${diffPixels}`);

    const diffThreshold = 0; // Пороговое значение

    if (diffPixels > diffThreshold) {
        return false
  }
        return true
}



}
