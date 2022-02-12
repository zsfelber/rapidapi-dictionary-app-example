const methods = {
    "crawl-foreground":require("../lambda/crawl-foreground"),
    "generate-indexes-foreground":require("../lambda/generate-indexes-foreground"),
    "getWord":require("../lambda/getWord"),
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