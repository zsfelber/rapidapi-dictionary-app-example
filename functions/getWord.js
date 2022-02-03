const axios = require('axios');
const fs = require('fs');

function toDisplay(data) {

  // create new array to push data to
  let results = [];
  let result = {
    frequency:response.data.frequency,
    pronunciation:response.data.pronunciation,
    results
  };

  data.results.map(def => {
    let definitionArray = [];
    let definition = {
      partOfSpeech:def.partOfSpeech,
      properties:definitionArray
    };

    // creates array of keys in object
    const keys = Object.keys(def);
    keys.map(key => {

      // builds regex that looks for capital letters
      // The response parameters are in camelCase, so we need to ID
      // the capital letters and add spaces instead so the 
      // front end can easily display the parameter labels
      const regex = /(?=[A-Z])/;

      // creates presentable label
      const label = key.split(regex).join(' ').toLowerCase();

      // grabs the value for the parameter from the
      // definition object in response
      const value = def[key];

      // constructs new object to send to frontend
      let newObj = {
        label,
        value,
        isString: typeof value === 'string' ? true : false
      };

      definitionArray.push(newObj);
    })

    results.push(definition);
  });

  return result;
}

function load(wfpath, asobject) {

  if (fs.existsSync(wfpath)) {

    let ijson = fs.readFileSync(wfpath).toString();
    let data = JSON.parse(ijson);
    console.log("From cache file "+wfpath+"  asobject:"+asobject+"...\n");

    if (asobject) {
      return data;
    } else {
      let result = toDisplay(data);
      const ojson = JSON.stringify(result);         // modified
      return ojson;
    }

  } else {
    // send request to the WordsAPI
    const response = await axios({
      "method":"GET",
      "url":`https://wordsapiv1.p.rapidapi.com/words/${word}`,
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key":process.env.RAPIDAPI_KEY
      }
    });

    const djson = JSON.stringify(response.data);  // original
    fs.writeFile(wfpath, djson, (err) => {
      if (err) {
        console.error("Cache file "+wfpath+"  asobject:"+asobject+" write failure : "+err+"\n");
      } else {
        console.log("Cache file "+wfpath+"  asobject:"+asobject+" written successfully\n");
      }
    });

    if (asobject) {
      return response.data;
    } else {
      let result = toDisplay(response.data);
      const ojson = JSON.stringify(result);         // modified
      return ojson;
    }
  }

}

function traverse(by_def, word) {

  const wfpath = `cache/words/${word}`;
  const entry = load(wfpath, true);

  entry.results.map(val => {

    if (!by_def[val.definition]) {
      val.synonyms.push(entry.word);
      val.synonyms.sort();
      by_def[val.definition] = val.synonyms.join(", ");
      for (s in val.synonyms) {
        traverse(by_def, s);
      }
    }

  });

}

export async function handler(event, context) {

  //   extract the word query parameter from the HTTP request
  const word = event.queryStringParameters.word || "";
  const create_synonym_tree = event.queryStringParameters.create_synonym_tree=="true";

  try {

    if (!fs.existsSync("cache/words")){
      fs.mkdirSync("cache/words", { recursive: true });
    }

    if (create_synonym_tree) {
      console.log("create_synonym_tree:"+word);
      const by_def = {};
      //const entry = traverse(by_def, word);

    }

    const json = load(wfpath, false);

    return {
      statusCode: 200,
      body: json,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }

  } catch (err) {
    console.log(err)
    return { statusCode: 500, body: err.toString() }
  }
}
