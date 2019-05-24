const puppeteer = require('puppeteer');


(async() => {
    // Initialize a browser
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/chromium-browser',
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
    });
    const page = await browser.newPage();
    await page.goto('https://www.timedia.co.jp');
    await page.screenshot({path: '/mnt/screenshot.png'});

    browser.close();
})();
