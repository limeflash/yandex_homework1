let cheerio = require("cheerio");
let jsonframe = require("jsonframe-cheerio");
const got = require("got");
var fs = require("fs");

async function scrapScheme() {
  const url = "https://dustyo-o.github.io/calendar";
  const html = await got(url);
  const $ = cheerio.load(html.body);
  jsonframe($);
  let frame = {
    title_h2: {
      _s: ".wiki-head",
      _d: [
        {
          name: "h2 > span"
        }
      ]
		},
		title_h3: {
      _s: ".wiki-head",
      _d: [{
          topic: "h3 > span"
        }]
    },
    list: {
      _s: ".wiki-list",
      _d: [
        {
          list: "_parent_ < number"
        }
      ]
    },
    date: {
      _s: ".wiki-p",
      _d: [
        {
          date: "_parent_"
        }
      ]
    }
  };
  var dataDB = $("body").scrape(frame, {
	});
  var jsonSync = function() {
    fs.writeFileSync("./data.json", JSON.stringify(dataDB, null, 4));
  };
  jsonSync();
}
scrapScheme();
