const path = require("path");
const appDir = path.resolve(__dirname, "../..").normalize();

const methods = {
    "getWord":require("../../functions/getWord"),
    "saveGroups":require("../../functions/saveGroups"),
    "/getWord":require("../../functions/getWord"),
    "/saveGroups":require("../../functions/saveGroups"),
};


module.exports = {
forward: async function(urlpath, queryStringParameters) {
    let urlelems = urlpath.split("/");
    let pathname = urlelems[urlelems.length-1];

    console.log("http forward ", pathname, queryStringParameters);
 
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
    const method = methods[pathname];
    if (method) {
        const json = await method.handler(event, context);

        return json;    
    } else {
        return null;
    }
}

};