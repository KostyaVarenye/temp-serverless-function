const Airtable = require('airtable-node');
//dotenvpackage for safe apikey
require('dotenv').config()
//code is not safe, it is exposed and can be stolen!!! NOW ITS SAFE in .env
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appDh21gcCzW2v02j')
  .table('songs')
 

exports.handler = async (event, context, cb) => {
    try {
        const {records} = await airtable.list()
        const products = records.map((product)=>{
            const {id} = product;
            const {name, image, price} = product.fields
            const url = image[0].url
            return {id, name, url, price}
        })
        
        return {
            headers:{
            'Access-Control-Allow-Origin': '*'
        },
        statusCode: 200,
        body: JSON.stringify(products)
        }
        } catch (error) {
            return {
            statusCode: 500,
            body: 'general server error',
        }
        
    }
}