const axios = require('axios');
const fs = require('fs');
const MAX_WORDS = 10;
const CACHE_CLUSTERS = false;

function singleWordToDisplay(data) {

  // create new array to push data to
  let results = [];
  let result = {
    frequency:data.frequency,
    pronunciation:data.pronunciation,
    results, etc:""
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

    console.log("From cache file/single "+wfpath+"  asobject:"+asobject+"...\n");
    let ijson = fs.readFileSync(wfpath).toString();
    let data = JSON.parse(ijson);

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

  const by_def = tresult.by_def;
  const by_w = tresult.by_w;

  if (!tresult.noWords) {
    tresult.noWords = 0;
  }

  if (by_w[word]) {
    return true;
  } else if (tresult.noWords >= MAX_WORDS) {
    return false;
  } else {
    tresult.noWords++;
    by_w[word] = 1;
    console.log(tresult.noWords + "/" + MAX_WORDS);

    const entry = await loadSingleWord(word, true);

    if (!tresult.master) {
      tresult.master = entry;
    }
  
    for (let key in entry.results) {
      const val = entry.results[key]; 

      if (!by_def[val.definition]) {
          
          let definition = val.definition; 
          let synonyms = [];
          let similar = [];
          let words = [];

          synonyms.push.apply(synonyms, val.synonyms);
          synonyms.push(entry.word);
          synonyms.sort();

          similar.push.apply(similar, val.similarTo);
          similar.sort();

          words.push.apply(words, synonyms);
          words.push.apply(words, similar);

          by_def[val.definition] = {
              definition, synonyms, similar, key:synonyms.length+"::::::"+synonyms.join(", ")
          };

          for (let w of words) {
            await traverseCluster(tresult, w);
          }
      }

    }

    return true;
  }
}

async function loadCluster(word, asobject) {

  const cfpath = `cache/clusters/${word}`;
  if (CACHE_CLUSTERS && fs.existsSync(cfpath)) {
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
    const by_w = {};
    const by_key = [];
    let tresult = {
      by_def,
      by_w    };
    const entry = await traverseCluster(tresult, word);
    by_key.push.apply(by_key, Object.values(by_def));
    const cmp = (firstEl, secondEl) => {
      return firstEl.key.localeCompare(secondEl.key);
    };
    by_key.sort(cmp);
    for (let defobj of by_key) {
      delete defobj.key;
    }
    let result = {
      frequency:tresult.master.frequency,
      pronunciation:tresult.master.pronunciation,
      noClusterEntries:by_key.length,
      results:by_key
    };

    let cjson;
    if (CACHE_CLUSTERS) {
      cjson = JSON.stringify(result);
      fs.writeFile(cfpath, cjson, (err) => {
        if (err) {
          console.error("Cluster file/cluster "+cfpath+"  write failure : "+err+"\n");
        } else {
          console.log("Cluster file/cluster "+cfpath+"  written successfully\n");
        }
      });
    }

    if (asobject) {
      return result;
    } else {
      if (!cjson) {
        cjson = JSON.stringify(result);
      }
      return cjson;
    }
  }
}


export async function handler(event, context) {

  //   extract the word query parameter from the HTTP request
  const word = event.queryStringParameters.word || "";
  const synonym_cluster = event.queryStringParameters.synonym_cluster=="true";

  try {

    if (!fs.existsSync("cache/words")){
      fs.mkdirSync("cache/words", { recursive: true });
    }
    if (!fs.existsSync("cache/clusters")){
      fs.mkdirSync("cache/clusters");
    }

    let json;
    if (synonym_cluster) {
      console.log("synonym_cluster:"+word);

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
