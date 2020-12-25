const modelHandling = () => {
  const data = require("./data.json");
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
// console.log(model);

module.getModel = modelHandling();
