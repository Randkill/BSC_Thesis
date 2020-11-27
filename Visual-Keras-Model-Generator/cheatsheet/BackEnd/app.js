var bodyParser = require("body-parser");
const fs = require("fs");
const express = require("express");
const spawn = require("child_process").spawn;
const PythonShell = require("python-shell");

const app = express();

// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  //allow cross origin requests
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, PUT, OPTIONS, DELETE, GET"
  );
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
});



app.post("/post", function (req, res, next) {
  //res.setHeader('Access-Control-Allow-Origin');

  console.log(req.body); // req.body contains the parsed body of the request.

  //saving recieved json
  console.log("Body : \n\n\n", JSON.stringify(req.body));
  fs.writeFile("./JSON_Handler/data.json", JSON.stringify(req.body), (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data is saved.");
  });

  // const data = modelHandling()
  // console.log('Data to be sent:', data)
  res.end('Post Finished!')
  console.log('POST REQUEST FINISHED !')

});
app.get("/get", function (req, res, next) {
  //pythonHandler();
  console.log("GET request started");

  var data = modelHandling()
  console.log(data)
  console.log('GET request Finished!')
  res.end(data)

});

app.listen(8001, "localhost");


const pythonHandler = () => {
  const { spawn } = require("child_process");
  const pyProg = spawn("python", ["./JSON_Handler/test.py"]);

  pyProg.stdout.on("data", function (data) {
    console.log(data.toString());
     
    return data.toString()
  });
};

const modelHandling = () => {
  const data = require("./JSON_Handler/data.json");
  // console.log(data);

  var model = "model.Sequential()";

  for (i = 0; i < data.layers.length; i++) {
    model = model.concat(
      "\nmodel.add(Dense(",
      data.layers[i].neurons,
      ', activation="',
      data.layers[i].activationFunction,
      '"))'
    );
    //console.log("hi");
  }
  model = model.concat(
    '\nmodel.compile(loss="',
    data.ModelConfig.lossFunction,
    '", optimizer="',
    data.ModelConfig.optimizer,
    '", metrics=["',
    data.ModelConfig.metrics,
    '"])'
  );

  console.log(model)
  return model;
};