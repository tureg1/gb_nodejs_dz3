const request = require('request');
const cheerio = require('cheerio');

request('https://vc.ru', function(error, response, html)  {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    console.log('Вот это новость! ', $('.b-news__title').eq(0).text());
    console.log('Вот это новость! ', $('.b-news__title').eq(1).text());
    console.log('Вот это новость! ', $('.b-news__title').eq(2).text());
    console.log('Вот это новость! ', $('.b-news__title').eq(3).text());
  }
});
