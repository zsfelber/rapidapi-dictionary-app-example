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


http://localhost:8888/?word=4&mode=words_by_frequency&ffrom=4.51&fto=100&
2163
{
    "crap": 1,
    "dear": 1,
    "dumb": 1,
    "freak": 1,
    "jack": 1,
    "bob": 1,
    "jerk": 1,
    "jerry": 1,
    "jimmy": 1,
    "lee": 1,
    "mike": 1,
    "nick": 1,
    "nuts": 1,
    "piss": 1,
    "roger": 1,
    "sam": 1
}
http://localhost:8888/?word=11&mode=words_by_frequency&ffrom=4.16&fto=4.505
1510
{
    "boo": 1,
    "buck": 1,
    "bust": 1,
    "butt": 1,
    "carter": 1,
    "chill": 1,
    "chuck": 1,
    "closet": 1,
    "cock": 1,
    "coke": 1,
    "cos": 1,
    "crane": 1,
    "crush": 1,
    "cunt": 1,
    "dean": 1,
    "decent": 1,
    "desert": 1,
    "doll": 1,
    "dong": 1,
    "downtown": 1,
    "drag": 1,
    "duck": 1,
    "dump": 1,
    "estate": 1,
    "fabulous": 1,
    "filthy": 1,
    "forth": 1,
    "hail": 1,
    "hop": 1,
    "jay": 1,
    "ken": 1,
    "kitty": 1,
    "maid": 1,
    "mayor": 1,
    "moron": 1,
    "naughty": 1,
    "nasty": 1,
  "pens": 1,
  "pot": 1,
  "precious": 1,
  "prick": 1,
  "principal": 1,
  "pro": 1,
  "punch": 1,
  "punk": 1,
  "purse": 1,
  "raj": 1,
  "ram": 1,
  "realise": 1,
  "recall": 1,
  "rick": 1,
  "rip": 1,
  "rubbish": 1,
  "rude": 1,
  "sally": 1,
  "seal": 1,
  "servant": 1,
  "shore": 1,
  "slut": 1,
  "struck": 1,
  "sue": 1,
  "tears": 1,
  "tear": 1,
  "tip": 1,
  "toast": 1,
  "trigger": 1,
  "trunk": 1,
  "vice": 1,
  "wallet": 1,
  "wanting": 1,
  "woo": 1
}

http://localhost:8888/?word=9&mode=words_by_frequency&ffrom=3.71&fto=4.155&
3025
{
  "ail": 1,
  "alas": 1,
  "amber": 1,
  "aryan": 1,
  "assault": 1,
  "asylum": 1,
  "attic": 1,
  "audition": 1,
  "auto": 1,
  "avenge": 1,
  "attached": 1,
  "bachelor": 1,
  "backed": 1,
  "backup": 1,
  "backyard": 1,
  "bail": 1,
  "bait": 1,
  "banging": 1,
  "bark": 1,
  "barn": 1,
  "bearing": 1,
  "blink": 1,
  "bliss": 1,
  "bloke": 1,
  "bollocks": 1,
  "bolt": 1,
  "booth": 1,
  "booty": 1,
  "booze": 1,
  "bore": 1,
  "bout": 1,
  "brat": 1,
  "breast": 1,
  "breeze": 1,
  "bribe": 1,
  "bud": 1,
  "bugger": 1,
  "bully": 1,
  "bump": 1,
  "bun": 1,
  "busted": 1
}