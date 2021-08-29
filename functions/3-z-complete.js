const Airtable = require('airtable-node');
require('dotenv').config()

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appDh21gcCzW2v02j')
  .table('songs')
 

exports.handler = async (event, context) => {

    const {id} = event.queryStringParameters

    if(id){
        try {
            const product = await airtable.retrieve(id)
            //case object is error, means no product id found
            if(product.error){
                console.log(product)
                return {
                    headers:{
            'Access-Control-Allow-Origin': '*'
        },
                    statusCode:404,
                    body: `No product with id : ${id}`,
                }
            }
            //else we found it
            return {
                headers:{
            'Access-Control-Allow-Origin': '*'
        },
                statusCode:200,
                body: JSON.stringify(product),
            }
        } catch (error) {
            //case the was some error
            return {
                headers:{
            'Access-Control-Allow-Origin': '*'
        },
                statusCode:500,
                body: 'server error',
            }
        }
        
    }
    try {
        const {records} = await airtable.list()
        const products = records.map((product)=>{
            const {id} = product;
            const {name, artist, album, genre, image, price} = product.fields
            const image = image
            return {id, name, artist, album, genre, url, price}
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
                headers:{
            'Access-Control-Allow-Origin': '*'
        },
            statusCode: 500,
            body: 'general server error',
        }
        
    }
}