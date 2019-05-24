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
    await page.evaluate(({}) => {
        $('div.hero-top').hide();
    },{});
    await page.screenshot({path: '/mnt/hide_heroimage.png'});

    browser.close();
})();
