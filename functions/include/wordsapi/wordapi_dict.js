const axios = require('axios');
const fs = require('fs');


exports.wordsApiDictionary = async function(word) {

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
  
    return response.data;
};