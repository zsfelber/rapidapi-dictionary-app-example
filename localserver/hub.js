const methods = {
    "crawl-background":require("../lambda/crawl-background"),
    "generate-indexes-background":require("../lambda/generate-indexes-background"),
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