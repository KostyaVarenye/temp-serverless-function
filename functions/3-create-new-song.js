//dotenvpackage for safe apikey
require('dotenv').config()

var Airtable = require('airtable');
        var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY})
        .base('appDh21gcCzW2v02j');

        base('songs').create({
        "name": "divide",
        "desc": "divide",
        "image": [
            {
            "url": "https://images-na.ssl-images-amazon.com/images/I/61MHPCXEdFS._SL1369_.jpg"
            }
        ],
        "price": 60,
        "artist": "ed sheeran",
        "album": "divide"
        }, function(err, record) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(record.getId());
});