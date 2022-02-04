# RapidAPI Dictionary Example App


https://slacker.ro/2020/02/18/build-a-dictionary-app-with-the-wordsapi-javascript/



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

