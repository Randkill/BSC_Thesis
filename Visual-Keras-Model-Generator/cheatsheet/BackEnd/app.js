var bodyParser = require('body-parser');

const express = require('express');

const app = express();

// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.post('/post', function(req, res, next){
    //res.setHeader('Access-Control-Allow-Origin');

    console.log(req.body); // req.body contains the parsed body of the request.
    res.end('Done')
});
app.get('/get', function(req,res, next){
    console.log('get request completed')
    res.end('Done')
})



app.listen(8000, 'localhost');