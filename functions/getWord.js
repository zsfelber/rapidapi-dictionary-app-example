const axios = require('axios')

export async function handler(event, context) {

//   extract the word query parameter from the HTTP request
  const word = event.queryStringParameters.word || "automobile";

  try {

    // send request to the WordsAPI
    const response = await axios({
      "method":"GET",
      "url":`https://wordsapiv1.p.rapidapi.com/words/${word}`,
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key":process.env.RAPIDAPI_KEY
      }
    })

    // START OF NEW CODE
    // create new array to push data to
    let results = [];
    let result = {
      frequency:response.data.frequency,
      pronunciation:response.data.pronunciation,
      results
    };

    response.data.results.map(def => {
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
    })
    // END NEW CODE

    return {
      statusCode: 200,
      body: JSON.stringify(result),  // modified
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  } catch (err) {
    console.log(err)
    return { statusCode: 500, body: err.toString() }
  }
}
