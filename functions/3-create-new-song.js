//dotenvpackage for safe apikey
require('dotenv').config()
var Airtable = require('airtable');

var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY})
.base('appDh21gcCzW2v02j');

exports.handler = async (event, context)=>{
    const {name, url, price, artist,genre, album, contractAddress} = JSON.parse(event.body);
    console.log(name,desc,url,price,artist,album)

    base('songs').create([
    {
        "fields": {
        "name": name,
        "image": [
            {
            "url": url
            }
        ],
        "price": Number(price),
        "artist": artist,
        "album": album,
        "genre": [
            genre
        ],
        "featured": true,
        "contractAddress": contractAddress
        }
    }
    ], function(err, records) {
    if (err) {
        console.error(err);
        return{
            headers:{
            'Access-Control-Allow-Origin': '*'
            },
            statusCode: 500,
            body: JSON.stringify(err),
        }
    }
    records.forEach(function (record) {
        console.log(record.getId());
    });
    });
return {
    headers:{
        'Access-Control-Allow-Origin': '*'
    },
    statusCode: 200,
    body: 'created successfully'
    }
}
