const methods = {
    "crawl-collect.all":require("../electron/functions/crawl-collect.all"),
    "crawl-generate-indexes":require("../electron/functions/crawl-generate-indexes"),
    "getWord":require("../../functions/getWord"),
};


module.exports = {
invoke: async function(id, params) {
    const queryStringParameters = {};
    for (let p of params) {
        let pair = p.split('=');
        queryStringParameters[pair[0]] = pair[1];
    }
    const event = {
        queryStringParameters
    };
    const context = {
        electron: true
    };
    const method = methods[id];
    const data = await method.handler(event, context);

    return data;
}

};