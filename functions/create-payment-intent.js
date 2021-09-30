
exports.handler = async function(event, context){
  
  if(event.body){
    //parse the data received from post if we have the body 'POST'
    const {cart, total_amount} = JSON.parse(event.body)
    return{
    headers:{
          'Access-Control-Allow-Origin': '*'
      },
    statusCode: 200,
    body: JSON.stringify(cart),
  }
  }
  
  // else we do not have body meants, we perform 'GET' request
  return{
    headers:{
          'Access-Control-Allow-Origin': '*'
      },
    statusCode: 200,
    body: 'Create payment intent',
  }
}