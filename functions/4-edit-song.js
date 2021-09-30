require('dotenv').config()
var Airtable = require('airtable');

var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY})
.base('appDh21gcCzW2v02j');

exports.handler = async (event, context) => {
      const {name, url, price, artist,genre, album, contractAddress} = JSON.parse(event.body);


  base('songs').update([
    {
      "id": id,
      "fields": {
        "name": name,
        "image": [
          {
            "id": "attUFe4cJXIXPVX81"
          }
        ],
        "price": price,
        "artist": artist,
        "album": album,
        "genre": [
          "rap"
        ],
        "featured": true,
        "contractAddress": contractAddress
      }
    }
  ], function(err, records) {
    if (err) {
      console.log(err);
    
      return {
        statusCode: 500,
        body: 'general server error'
      }
    }
    records.forEach(function(record) {
      console.log(record.get('name'));
    });
  });
}