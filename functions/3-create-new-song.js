//dotenvpackage for safe apikey
require('dotenv').config()
var Airtable = require('airtable');

var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY})
.base('appDh21gcCzW2v02j');

exports.handler = async (event, context) =>{
    const {name, desc, url, price, artist, album} = event.queryStringParameters;

    base('songs').create({
    "name": name,
    "desc": desc,
    "image": [
        {
        "url": url
        }
    ],
    "price": price,
    "artist": artist,
    "album": album

    }, function(err, record) {
    if (err) {
        return {
            statusCode: 500,
            body: 'general server error',
        }
    }
    console.log(record.getId());
});
return {
        statusCode: 200,
        body: 'created successfully'
        }
}
