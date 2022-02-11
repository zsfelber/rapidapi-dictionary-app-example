const methods = {
    "crawl-background":require("../lambda/crawl-background"),
    "generate-indexes-background":require("../lambda/generate-indexes-background"),
    "getWord":require("../lambda/getWord"),
};


module.exports = {
invoke: async function(id, params) {
    const event = {
        queryStringParameters : params
    };
    const context = {
        electron: true
    };
    const method = methods[id];
    const data = await method.handler(event, context);

    return {
        json:function() {
            return data
        }
    };
}

};