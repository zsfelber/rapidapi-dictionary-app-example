const path = require("path");
const appDir = path.resolve(__dirname, "../..").normalize();

const methods = {
    "getWord":require("../../functions/getWord"),
    "saveGroups":require("../../functions/saveGroups"),
    "/getWord":require("../../functions/getWord"),
    "/saveGroups":require("../../functions/saveGroups"),
};


module.exports = {
forward: async function(url, queryStringParameters) {
    console.log("http forward ", url, queryStringParameters);
 
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
        electron: false
    };
    const method = methods[url.pathname];
    if (method) {
        const json = await method.handler(event, context);

        return json;    
    } else {
        return null;
    }
}

};