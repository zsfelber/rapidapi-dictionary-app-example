const methods = {
    "crawl-background":require("../functions/crawl-background"),
    "generate-indexes-background":require("../functions/generate-indexes-background"),
    "getWord":require("../functions/getWord"),
};


export async function invoke(id, params) {
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

