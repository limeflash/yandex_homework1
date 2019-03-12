let cheerio = require("cheerio");
let jsonframe = require("jsonframe-cheerio");
const got = require("got");

async function scrapScheme() {
  const url = "https://dustyo-o.github.io/calendar";
  const html = await got(url);
  const $ = cheerio.load(html.body);
  jsonframe($);
  let frame = {
    title: {
	  _s: ".wiki-head, .wiki-head__text, .wiki-doc",
      _d: [
        {
		  "name": "h2 > span",
		  "topic": "h3 > span",
		  "list": "ul > li"
        }
      ]
	},
	list: {
		_s: ".wiki-list",
		_d: [{
			"list": "ul > li"
		}]
	}
  };
  console.log($('body').scrape(frame, {
	  string: true,
}))
}
scrapScheme();
