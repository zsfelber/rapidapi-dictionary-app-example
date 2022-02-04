const axios = require('axios');
const fs = require('fs');

function singleWordToDisplay(data) {

  // create new array to push data to
  let results = [];
  let result = {
    frequency:data.frequency,
    pronunciation:data.pronunciation,
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

async function loadSingleWord(word, asobject) {

  const wfpath = `cache/words/${word}`;

  if (fs.existsSync(wfpath)) {

    let ijson = fs.readFileSync(wfpath).toString();
    let data = JSON.parse(ijson);
    console.log("From cache file/single "+wfpath+"  asobject:"+asobject+"...\n");

    if (asobject) {
      return data;
    } else {
      let result = singleWordToDisplay(data);
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
        console.error("Cache file/single "+wfpath+"  asobject:"+asobject+" write failure : "+err+"\n");
      } else {
        console.log("Cache file/single "+wfpath+"  asobject:"+asobject+" written successfully\n");
      }
    });

    if (asobject) {
      return response.data;
    } else {
      let result = singleWordToDisplay(response.data);
      const ojson = JSON.stringify(result);         // modified
      return ojson;
    }
  }

}



async function traverseCluster(tresult, word) {

  const wfpath = `cache/words/${word}`;
  const entry = await loadSingleWord(word, true);
  const by_def = tresult.by_def;
  if (!tresult.master) {
    tresult.master = entry;
  }

  for (let key in entry.results) {
    const val = entry.results[key]; 

    if (!by_def[val.definition]) {
      let groupWords = [];
      groupWords.push.apply(groupWords, val.synonyms);
      groupWords.push.apply(groupWords, val.similarTo);
      groupWords.push(entry.word);
      groupWords.sort();
      const words = groupWords.join(", ");
      by_def[val.definition] = {
          definition:val.definition, 
          words, 
          key:groupWords.length+"::::::"+words
      };

      for (s in groupWords) {
        await traverseCluster(tresult, s);
      }
    }

  }

  return true;
}

async function loadCluster(word, asobject) {

  const cfpath = `cache/clusters/${word}`;
  if (fs.existsSync(cfpath)) {
    let ijson = fs.readFileSync(cfpath).toString();
    let result = JSON.parse(ijson);
    console.log("From cache file/cluster "+cfpath+"  asobject:"+asobject+"...\n");

    if (asobject) {
      return result;
    } else {
      return ijson;
    }

  } else {

    const by_def = {};
    const by_key = [];
    let tresult = {
      by_def
    };
    //const entry = await traverseCluster(tresult, word);
    for (let def in by_def) {
      const defobj = by_def[def];
      by_key.push(defobj);
    }
    by_key.sort((firstEl, secondEl) => {
      return firstEl.key.compare(secondEl.key);
    } );
    for (let defobj in by_key) {
      delete defobj.key;
    }
    let result = {
      frequency:tresult.master.frequency,
      pronunciation:tresult.master.pronunciation,
      noClusterEntries:by_key.length,
      results:by_key
    };

    const cjson = JSON.stringify(result);
    fs.writeFile(cfpath, cjson, (err) => {
      if (err) {
        console.error("Cluster file/cluster "+cfpath+"  write failure : "+err+"\n");
      } else {
        console.log("Cluster file/cluster "+cfpath+"  written successfully\n");
      }
    });

    if (asobject) {
      return result;
    } else {
      return cjson;
    }
  }
}


export async function handler(event, context) {

  //   extract the word query parameter from the HTTP request
  const word = event.queryStringParameters.word || "";
  const create_synonym_cluster = event.queryStringParameters.create_synonym_cluster=="true";

  try {

    if (!fs.existsSync("cache/words")){
      fs.mkdirSync("cache/words", { recursive: true });
    }
    if (!fs.existsSync("cache/clusters")){
      fs.mkdirSync("cache/clusters");
    }

    let json;
    if (create_synonym_cluster) {
      console.log("create_synonym_cluster:"+word);

      json = await loadCluster(word, false);
    } else {

      json = await loadSingleWord(word, false);
    }


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
