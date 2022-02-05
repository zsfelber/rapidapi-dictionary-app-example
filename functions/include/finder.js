const FindFiles = require("node-find-files");

export let cnt=0,errors=0;

export function findFiles(rootFolder, fileModifiedDate, onFile) {
    var finder = new FindFiles({
        rootFolder,
        fileModifiedDate
    });
    var result,resolve,reject;
    cnt=0; errors=0;

    finder.on("match", function(strPath, stat) {
        if (onFile) onFile(strPath, stat);
        cnt++;
    });
    finder.on("complete", function() {
        resolve(cnt);
    });
    finder.on("patherror", function(err, strPath) {
        console.log("Error for Path " + strPath + " " + err);  // Note that an error in accessing a particular file does not stop the whole show
        errors++;
    });
    finder.on("error", function(err) {
        console.log("Global Error " + err);
        errors++;
    });

    result = new Promise((_resolve,_reject)=>{
        resolve = _resolve;
        reject = _reject;
        finder.startSearch();
    });
    return result;
}
