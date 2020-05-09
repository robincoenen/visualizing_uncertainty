const perspective = require('perspective-api-client')

const express = require('express')
const app = express()
 
require('dotenv').config()


API_KEY = process.env.myApi_Key
DISCOVERY_URL = process.env.myDiscovery_URL

app.get('/perspective', async function (req, res) {
    const perspectiveClient = new perspective(
        options = {
            "apiKey": API_KEY}
    )
    const text = req.query.text;
    const result = await perspectiveClient.analyze(text);
    const toxicScore = result.attributeScores.TOXICITY.summaryScore.value;
    console.log(`Probabiltiy of [${text}] is toxic is: ${toxicScore}`)
        res.send(JSON.stringify(toxicScore))
})
 
app.listen(8080, function () {  console.log('Example app listening on port 8080!');});
app.use(express.static('public'));

//const input = "Trump is a weird motherfucker"
//async function main(input) {
//    const perspectiveClient = new perspective(
//        options = {
//            "apiKey": API_KEY}
//    )
//    
//    const text = input;
//    const result = await perspectiveClient.analyze(text);
//    const toxicScore = result.attributeScores.TOXICITY.summaryScore.value;
//    console.log(`Probabiltiy of [${text}] is toxic is: ${toxicScore}`)
//} 
//
//function myFunction() {
//   const input = document.getElementById("myText").value;
//  document.getElementById("demo").innerHTML = input;
//  console.log(input)
//  main(input);
//
//}