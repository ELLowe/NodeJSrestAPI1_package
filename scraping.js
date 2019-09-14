const puppeteer = require('puppeteer');
const $ = require('cheerio');
const NASAnewsURL = `https://mars.nasa.gov/news/?page=0&per_page=40&order=publish_date+desc%2Ccreated_at+desc&search=&category=19%2C165%2C184%2C204&blank_scope=Latest`;


puppeteer
    .launch()
    .then((browser) => {
        return browser.newPage();
    })
    .then((page) => {
        return page.goto(NASAnewsURL).then(function() {
            return page.content();
        });
    })
    .then((html) => {
        let newsTitles = $('div',html).find('.content_title').find('a').toArray();
        for (i = 0; i < 1; i++) {
            var newsTitle = $(newsTitles[i]).text();
        }
        console.log(newsTitle);

        let newsTeasers = $('div[class = article_teaser_body]',html).toArray();
        for (j = 0; j < 1; j++) {
            var newsTeaser = $(newsTeasers[j]).text();
        }
        console.log(newsTeaser);
    })
    .catch(function(err) {
        //handle error
        console.log(err);
    });