
export function generateRandomEmail() {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let email = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      email += chars[randomIndex];
    }
    email += '@gmail.com';
    return email;
  }

  export function generateRandomNameCommunities() {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let comname = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      comname += chars[randomIndex];
    }
    return comname;
  }
  export function generateRandomUserName() {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let comname = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      comname += chars[randomIndex];
    }
    return comname;
  }


  function wait (ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
  }
  
  export default async function capture(browser, url) {
    // Load the specified page
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'load'});
  
    // Get the height of the rendered page
    const bodyHandle = await page.$('body');
    const { height } = await bodyHandle.boundingBox();
    await bodyHandle.dispose();
  
    // Scroll one viewport at a time, pausing to let content load
    const viewportHeight = page.viewport().height;
    let viewportIncr = 0;
    while (viewportIncr + viewportHeight < height) {
      await page.evaluate(_viewportHeight => {
        window.scrollBy(0, _viewportHeight);
      }, viewportHeight);
      await wait(20);
      viewportIncr = viewportIncr + viewportHeight;
    }
  
    // Scroll back to top
    await page.evaluate(_ => {
      window.scrollTo(0, 0);
    });
  
    // Some extra delay to let images load
    await wait(100);
  
    return await page.screenshot({type: 'png'});
  }
