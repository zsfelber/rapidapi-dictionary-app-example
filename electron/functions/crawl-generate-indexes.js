
const path = require("path");
const service = require("../../functions/include/service");

const API_DAILY_LIMIT = 25000;
const MAX_WORDS = 10000000;
const MAX_NODE_FREQUENCY = Number.MAX_SAFE_INTEGER;
const TRAVERSE_ALL = true;


exports.handler = async function(event, context) {

  let apis = event.queryStringParameters.apis || "";
  let indexes = "true"===event.queryStringParameters.indexes||true===event.queryStringParameters.indexes;
  let stardict = "true"===event.queryStringParameters.stardict||true===event.queryStringParameters.stardict;
  const resolvePath = context.resolvePath;

  let indexgenerated=0;

  return service.respond(async () => {
    if (apis) {

      apis = apis.split("-");
      for (let api of apis) {
        indexgenerated = await doItFor(api, indexes, stardict, resolvePath, indexgenerated);
      }
    }
    console.log("Done.");
    return {result:true};
  }, context);

}

async function doItFor(api, indexes, stardict, resolvePath, indexgenerated) {


  const crawler = require('../../functions/include/crawler').aCrawler(    api,
    API_DAILY_LIMIT,
    MAX_WORDS,
    MAX_NODE_FREQUENCY,
    TRAVERSE_ALL
,resolvePath);

  if (indexes && !indexgenerated) {
    indexgenerated = 1;
    console.log("generate indices...");

    await crawler.generateIndexes();

  }

  if (stardict) {
    console.log("update stardict...");

    await crawler.updateStarDict();
  }

  return indexgenerated;
}
