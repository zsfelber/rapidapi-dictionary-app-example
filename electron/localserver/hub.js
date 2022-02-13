const path = require("path");

const methods = {
    "crawl-collect.all":require("../functions/crawl-collect-all"),
    "crawl-generate-indexes":require("../functions/crawl-generate-indexes"),
    "getWord":require("../../functions/getWord"),
};


module.exports = {
invoke: async function(id, params) {
    console.log("localserver invoke "+id, params);
    const queryStringParameters = {};
    for (let p of params) {
        let pair = p.split('=');
        queryStringParameters[pair[0]] = pair[1];
    }
    const event = {
        queryStringParameters,
        resolvePath:path.join
    };
    const context = {
        electron: true
    };
    const method = methods[id];
    const data = await method.handler(event, context);

    return data;
}

};