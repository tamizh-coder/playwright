// const { webkit } = require('playwright');

// (async () => {
//   const browser = await webkit.launch({ headless: false });
//   const page = await browser.newPage();

//   await page.goto('https://www.poketmohan4.poket.com/admin', { waitUntil: 'networkidle' });
//   await page.screenshot({ path: 'ex.png', fullPage: true });

//   await browser.close();
// })();


const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Open page
  await page.goto('https://poketmohans21.poket.app/member/', {
    waitUntil: 'domcontentloaded'
  });

  // Wait so you can SEE the page
  await page.waitForTimeout(5000);

  // Take screenshot
  await page.screenshot({ path: 'ex.png', fullPage: true });

  // Close browser
  await browser.close();
})();