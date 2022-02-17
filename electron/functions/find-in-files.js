
// cant install in windows :
//const findInFiles =  require('fast-find-in-files');

//     let sorries = await fastFindInFiles.findInFiles(`${CACHE_DIR}/words`, "Sorry pal, you were just rate limited by the upstream server.");

// using this one:
const findInFiles =  require('find-in-files');

exports.findInFiles = function(dir, pattern) {
    let input = findInFiles.findSync(pattern, dir);

    let result = [];
    for (var filename in input) {
        filePath = dir + filename;
        //var res = input[filename];
        //console.log(
        //    'found "' + res.matches[0] + '" ' + res.count
        //    + ' times in "' + filename + '"'
        //);
        result.push({filePath});
    }
}