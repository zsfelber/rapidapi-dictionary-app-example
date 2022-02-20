
const API_DAILY_LIMIT = { wordsapi: 25000, google: 100000000 };
const MAX_WORDS = 50;
const MAX_NODE_FREQUENCY = 100000;
const TRAVERSE_ALL = false;
const MAX_LEVEL_MINCL = 2;

const fs = require("fs");
const service = require("./include/service");
const atob = require("atob");
const { Console } = require("console");


exports.handler = async function(event, context) {


  //   extract the word query parameter from the HTTP request
  const groups64 = event.queryStringParameters.groups || "";
  const groups = groups64 ? atob(groups64) : "";
  const groupsdata = groups ? JSON.parse(groups) : null;
  console.log("groupsdata:", groupsdata);
  const resolvePath = context.resolvePath;
  const curmywordsltr = event.queryStringParameters.curmywordsltr || "";

  if (groupsdata) {
    if (curmywordsltr) {
      if (!groupsdata[curmywordsltr]) groupsdata[curmywordsltr] = {};
    }

    return service.respond(async () => {
      const crawler = require('./include/crawler.js').aCrawler(       api,
          100000,//no limit for occasional 1 or 2 single words
          MAX_WORDS,
          MAX_NODE_FREQUENCY,
          TRAVERSE_ALL,
      resolvePath);
          for (letter of ['A','B','C','D','E','F','G','H','I','J','K','L','M']) {
          let {f, data, json} = crawler.loadJson(crawler.DATA_DIR+"/my-words-"+letter.toLowerCase()+".json");

          if (json) {
            let mod = 0;
            for (let letter_other in groupsdata) {
              if (letter !== letter_other) {
                let lcur = letter === curmywordsltr;
                let othdatas = groupsdata[letter_other];
                for (let othword in othdatas) {
                  let othvalue = othdatas[othword];
                  if (lcur || othvalue==2) {
                    mod |= !!data[othword];
                    delete data[othword];
                  }
                }
              }
            }

            mod |= !!groupsdata[letter];
            if (mod) {
              data = Object.assign(data, groupsdata[letter]);

              let ojson = JSON.stringify(data, null, 2);
              console.log("my-words-"+letter+" : json saved.")
              fs.writeFileSync(f, ojson);
            } else {
              console.log("my-words-"+letter+" : not modified.")
            }
          }
        }
        return {result:"success"};
    }, context);
  }

};