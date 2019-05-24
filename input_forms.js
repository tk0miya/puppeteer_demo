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
    await page.goto('https://www.google.com');
    await page.type('input[name="q"]', 'puppeteer');
    page.click('input[type="submit"]');
    await page.waitForNavigation({
        waitUntil: 'domcontentloaded'
    });

    await page.screenshot({path: '/mnt/input_forms.png'});

    browser.close();
})();
