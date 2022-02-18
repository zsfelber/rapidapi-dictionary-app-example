const path = require("path");
const appDir = path.resolve(__dirname, "../..").normalize();

const methods = {
    "crawl-collect.all":require("../functions/crawl-collect-all"),
    "crawl-generate-indexes":require("../functions/crawl-generate-indexes"),
    "getWord":require("../../functions/getWord"),
    "saveGroups":require("../../functions/saveGroups"),
    "findCollocation":require("../../functions/findCollocation"),
    "findPhrases":require("../../functions/findPhrases"),
};


module.exports = {
invoke: async function(id, params) {
    console.log("localserver invoke "+id, params);
    const queryStringParameters = {};
    for (let p of params) {
        let pair = p.split('=');
        queryStringParameters[pair[0]] = pair[1];
    }
    const resolvePath = {
        rel:function(dirname, rel) {
            const abs = path.join(dirname, rel);
            //console.log("e-resolvePath dirname:"+dirname+" rel:"+rel+ " -> "+abs);
            return abs;
        },
        abs:function(rel) {
            const abs = path.join(appDir, rel);
            //console.log("e-resolvePath app:"+appDir+" rel:"+rel+ " -> "+abs);
            return abs;
        }
    };
    const event = {
        queryStringParameters
    };
    const context = {
        resolvePath,
        electron: true
    };
    const method = methods[id];
    const data = await method.handler(event, context);

    return data;
}

};