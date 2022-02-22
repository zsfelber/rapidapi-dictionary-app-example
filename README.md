# RapidAPI Dictionary Example App


https://slacker.ro/2020/02/18/build-a-dictionary-app-with-the-wordsapi-javascript/



npm install netlify-cli -g 



Example application built with RapidAPI and the WordsAPI for a blog post.

netlify link 

netlify dev

netlify deploy --prod

https://app.netlify.com/sites/epic-morse-69bbe0/deploys

Logs:              https://app.netlify.com/sites/epic-morse-69bbe0/deploys/61f961dc385f962dd88e8120
Unique Deploy URL: https://61f961dc385f962dd88e8120--epic-morse-69bbe0.netlify.app
Website URL:       https://epic-morse-69bbe0.netlify.app

https://github.com/netlify/cli/issues/409

    "build:lambda": "netlify-lambda build functions --config ./webpack.config.dev.js",

    /*"build_functions": "netlify-lambda build functions/getWord -c webpack.functions.js",*/

    "build:lambda": "netlify-lambda build functions --config ./webpack.config.dev.js"


Okay I got it working with TypeScript. For anyone wondering:

    "build:lambda": "netlify-lambda build src/lambda --config ./webpack.config.dev.js",
    "dev": "npx --node-arg=--inspect netlify dev"
in the webpack.config.dev.js

module.exports = {
    devtool: 'inline-source-map',
    optimization: { minimize: false }
};
run dev script and attach a debugger to localhost:9229

a
    "lambda-serve": "npx --node-arg=--inspect netlify-lambda serve",
    "lambda-build": "netlify-lambda build functions --config ./webpack.config.dev.js",
    "debug": "netlify dev",
    "test": "echo \"Error: no test specified\" && exit 1"


b
    "lambda-serve": "netlify-lambda serve functions",
    "lambda-build": "netlify-lambda build functions",
    "debug": "netlify dev",
    "test": "echo \"Error: no test specified\" && exit 1"


words_by_frequency:4.28..100
Items fit:3088 nonfit:53387 no data:25

~most 3000
words_by_frequency:4.2..100
Items fit:3471 nonfit:53004 no data:25



old 8
http://localhost:8888/?word=8&mode=words_by_frequency&ffrom=3.35&fto=3.705&
new 8
http://localhost:8888/?word=8&mode=words_by_frequency&ffrom=3.12&fto=3.385&
3000/old 8 -> new 8
http://localhost:8888/?word=8&mode=words_by_frequency&ffrom=3.12&fto=3.345&
2645





...

use new 8
http://localhost:8888/?word=8&mode=words_by_frequency&ffrom=3.12&fto=3.345&

!!!!űűűű



https://www.cssscript.com/popover-around-element/





// "https"://www.ef.com/wwen/english-resources/english-vocabulary/top-3000-words/

// "https"://englishgrammarhere.com/vocabulary/10000-most-common-words-in-english-part-5/


    /*"start": "netlify dev",
    "debug": "netlify dev",*/
    "start": "node express/start.js",



https://www.electron.build/


/*     "e-dir": "electron-builder --dir",
    "e-pack": "electron-builder --prepackaged dist/linux-unpacked",
    "e-dist": "electron-builder",
 */

https://www.christianengvall.se/electron-packager-tutorial/

    "e-pack": "electron-packager ./ --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=true --out=release-builds"


https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists


https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists/A_Frequency_Dictionary_of_German


https://www.wordfrequency.info/samples.asp

https://invokeit.wordpress.com/frequency-word-lists/

https://onedrive.live.com/?id=3732E80B128D016F%213584&cid=3732E80B128D016F

opensubtitles_frequencies.txt