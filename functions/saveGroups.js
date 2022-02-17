
const API_DAILY_LIMIT = { wordsapi: 25000, google: 100000000 };
const MAX_WORDS = 50;
const MAX_NODE_FREQUENCY = 100000;
const TRAVERSE_ALL = false;
const MAX_LEVEL_MINCL = 2;

const fs = require("fs");
const service = require("./include/service");
const atob = require("atob");


exports.handler = async function(event, context) {


  //   extract the word query parameter from the HTTP request
  const groups64 = event.queryStringParameters.groups || "";
  const groups = groups64 ? atob(groups64) : "";
  const groupsdata = groups ? JSON.parse(groups) : null;
  const resolvePath = context.resolvePath;
  const curmywordsltr = event.queryStringParameters.curmywordsltr || "";
  const crawler = require('./include/crawler.js').aCrawler(resolvePath);

  if (groupsdata) {
    if (curmywordsltr) {
      if (!groupsdata[curmywordsltr]) groupsdata[curmywordsltr] = {};
    }

    return service.respond(async () => {
        for (letter in groupsdata) {
          let {f, data, json} = crawler.loadJson("data/my-words-"+letter.toLowerCase()+".json");

          for (let letter_other in groupsdata) {
            if (letter !== letter_other) {
              let lcur = letter === curmywordsltr;
              let datas = groupsdata[letter_other];
              for (let othword in datas) {
                let value = 
                if (lcur || ) {
                  delete data[othword];
                }
              }
            }
          }

          data = Object.assign(data, groupsdata[letter]);
          let ojson = JSON.stringify(data, null, 2);
          console.log("my-words-"+letter+" : json saved.")
          fs.writeFileSync(f, ojson);
        }
        return {result:"success"};
    }, context);
  }

};