// get the required packages
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// to parse the incoming request from express
app.use(bodyParser.json());

// access the static web page
app.use(express.static(__dirname + '/public'));

// get route
app.get('/', (req, res) => {
    res.send("Hello Rest API!");
});

// post route
app.post('/hello', (req, res) => {
    let body = req.body;
    body.message = "Hello " + body.name;

    // send json back as response
    res.json(body);
});

// listening port
app.listen(3000, () => {
    console.log("Server listening on port 3000!");
});