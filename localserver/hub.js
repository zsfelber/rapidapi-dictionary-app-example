const methods = {
    "crawl-foreground":require("../functions/crawl-foreground"),
    "generate-indexes-foreground":require("../functions/generate-indexes-foreground"),
    "getWord":require("../functions/getWord"),
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