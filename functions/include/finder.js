const FindFiles = require("node-find-files");

let vars={cnt:0,errors:0};

exports.vars = vars;

exports.findFiles = function(rootFolder, fileModifiedDate, onFile) {
    var finder = new FindFiles({
        rootFolder,
        fileModifiedDate
    });
    var result,resolve,reject;
    vars.cnt=0; vars.errors=0;

    finder.on("match", function(strPath, stat) {
        if (onFile) onFile(strPath, stat);
        vars.cnt++;
    });
    finder.on("complete", function() {
        resolve(vars.cnt);
    });
    finder.on("patherror", function(err, strPath) {
        console.log("Error for Path " + strPath + " " + err);  // Note that an error in accessing a particular file does not stop the whole show
        vars.errors++;
    });
    finder.on("error", function(err) {
        console.log("Global Error " + err);
        vars.errors++;
    });

    result = new Promise((_resolve,_reject)=>{
        resolve = _resolve;
        reject = _reject;
        finder.startSearch();
    });
    return result;
}
