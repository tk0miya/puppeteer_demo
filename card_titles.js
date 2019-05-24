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
    const labels = await page.evaluate(({}) => {
        labels = []
        $('div.card').each(function(index, elem){
            labels.push(elem.innerText);
        });
        return labels;
    }, {});

    labels.forEach(label => {
        console.log(label);
    });

    browser.close();
})();
