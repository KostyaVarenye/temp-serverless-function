// domain/.netlify/functions/1-hello
// netlify is looking for this function named .handler
// async function will return a poromise, we can set it with callback function too
// event has a lot of useful stuff about the even,
// context has stuff like: user identity and stuff...

/* can call this with JSON.stringify(song) in the body
const song = { name: 'Bicycle race',
artist: 'Queen'}
*/

//must return status code and must have a body(string)
exports.handler = async (event, context) => {
    return {
        statusCode:200,
        body: 'first example test',
    }
}