import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Header from "./Components/Header/Header.js";
import Layer from "./Components/Layer/Layer.js";
import ModelConfig from "./Components/ModelConfiguration/Configuration.js";
class App extends Component {
  state = {
    layers: [],
    ModelConfig: {
      optimizer: "SGD",
      lossFunction: "mean_squared_error",
      metrics: "accuracy",
    },
  };

  componentDidMount() {
    // Simple POST request with a JSON body using axios
    const article = { title: "React POST Request Example" };
    axios
      .post("http://localhost:5001/", article)
      .then((response) => this.setState({ articleId: response.data.id }));
  }

  submitButton = (e) => {
    // let data = this.state
    // console.log(data)
    // // create a new XMLHttpRequest
    // var xhr = new XMLHttpRequest()

    // // get a callback when the server responds
    // xhr.addEventListener('load', () => {
    //   // update the state of the component with the result here
    //   console.log(xhr.responseText)
    // })
    // // open the request with the verb and the url
    // xhr.open('POST', 'http://localhost:8000/')
    // // send the request
    // xhr.send(JSON.stringify(data))
    // xhr.onload = function() {
    //   alert(xhr.response);
    //  };

    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ "title": "React POST Request Example" }),
    // };
    // fetch("http://localhost:8000/", requestOptions).then((response) => {
    //   console.log(response);
    // });
    console.log(this.state)


    console.log("Hi");

    //e.prevenDefault()
    let data = this.state
    console.log('Want to post this:', data)
    var instance = axios.create();
    instance.defaults.headers.common['Content-Type'] = 'application/json';

    instance.post('http://localhost:8000/post', data, {
        headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  };

  addLayer = () => {
    console.log("Button Clicked !");

    const tempLayers = [...this.state.layers];
    const layerId = Date.now();
    tempLayers.push({ id: layerId, neurons: "", activationFunction: "relu" });
    this.setState({ layers: tempLayers });
    //console.log('New Layers count:', tempLayers[0])
    console.log(this.state);
  };

  deleteLayer = (index) => {
    const tempLayers = [...this.state.layers];
    tempLayers.splice(index, 1);

    this.setState({ layers: tempLayers });
  };

  neuronChangeHandler = (event, layerId) => {
    const layerIndex = this.state.layers.findIndex((layer) => {
      return layer.id === layerId;
    });
    const tempLayers = [...this.state.layers];

    const newNeurons = event.target.value;
    tempLayers[layerIndex].neurons = newNeurons;

    this.setState({ layers: tempLayers });
    console.log(this.state);
  };

  activationFunctionHandler = (event, layerId) => {
    const layerIndex = this.state.layers.findIndex((layer) => {
      return layer.id === layerId;
    });
    const tempLayers = [...this.state.layers];

    const newActivationFunction = event.target.value;
    console.log("Activation Fucntion:", event.target.value);
    tempLayers[layerIndex].activationFunction = newActivationFunction;

    this.setState({ layers: tempLayers });
    console.log(this.state);
  };

  //Model Conifguration Change Handlers

  optimizerChange = (event) => {
    const tempModelConfiguration = { ...this.state.ModelConfig };

    console.log("New Optimizer : ", event.target.value);
    tempModelConfiguration.optimizer = event.target.value;
    this.setState({
      ModelConfig: tempModelConfiguration,
    });
  };

  lossFunctionChange = (event) => {
    const tempModelConfiguration = { ...this.state.ModelConfig };

    console.log("New Loss Function : ", event.target.value);
    tempModelConfiguration.lossFunction = event.target.value;
    this.setState({
      ModelConfig: tempModelConfiguration,
    });
  };

  metricsChange = (event) => {
    const tempModelConfiguration = { ...this.state.ModelConfig };

    console.log("New Metrics : ", event.target.value);
    tempModelConfiguration.metrics = event.target.value;
    this.setState({
      ModelConfig: tempModelConfiguration,
    });
  };

  render() {
    let Layers = null;

    Layers = (
      <div className="Layers">
        {this.state.layers.map((layer, index) => {
          return (
            <Layer
              layerNumber={index}
              delete={() => this.deleteLayer(index)}
              neuronChange={(event) =>
                this.neuronChangeHandler(event, layer.id)
              }
              activationFunctionChange={(event) =>
                this.activationFunctionHandler(event, layer.id)
              }
              key={layer.id}
            />
          );
        })}
      </div>
    );

    return (
      <div>
        <Header />

        <div className="Layers">
          {Layers}
          <button className="Button" onClick={this.addLayer}>
            +
          </button>
        </div>
        <br />
        <ModelConfig
          lossFunctionChange={this.lossFunctionChange}
          metricsChange={this.metricsChange}
          optimizerChange={this.optimizerChange}
        />
        <br />
        <button onClick={this.submitButton} className="Submit">
          submit
        </button>
      </div>
    );
  }
}

export default App;
