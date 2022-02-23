//const axios = require('axios');
//const fs = require('fs');

const fetch = require("../../fetch");

exports.wordsApiDictionary = async function(word) {
    let url = `https://wordsapiv1.p.rapidapi.com/words/${word}`;

    // send request to the WordsAPI
    /*const response = await axios({
        "method":"GET",
        url,
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key":process.env.RAPIDAPI_KEY
        }
      });*/

    let body = await fetch.fetchTextFromHttpUrl(url,
      {
        "method":"GET",
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key":process.env.RAPIDAPI_KEY
      },
      {word}
    );
    let data = JSON.parse(body);
    
    return data;
};