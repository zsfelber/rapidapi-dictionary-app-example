
const API_DAILY_LIMIT = { wordsapi: 25000, google: 100000000 };
const MAX_WORDS = 50;
const MAX_NODE_FREQUENCY = 100000;
const TRAVERSE_ALL = false;
const MAX_LEVEL_MINCL = 2;

const service = require("./include/service");


exports.handler = async function(event, context) {

  //   extract the word query parameter from the HTTP request
  const groups64 = event.queryStringParameters.groups || "";
  const groups = groups64 ? atob(groups64) : "";
  const groupsdata = groups ? JSON.parse(groups) : null;

  if (groupsdata) {

    return service.respond(async () => {
        
        return data;
    }, context);
  }

};