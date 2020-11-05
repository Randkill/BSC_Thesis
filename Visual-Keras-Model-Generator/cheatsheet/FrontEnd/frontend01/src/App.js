import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header/Header.js";
import Layer from "./Components/Layer/Layer.js";

class App extends Component {
  state = {
    layers: []
  }

  addLayer = () => {
    console.log('Button Clicked !')

    const tempLayers = [...this.state.layers]
    const layerId = Date.now()
    tempLayers.push({id: layerId, neurons: '', activationFunction: 'relu'});
    this.setState({layers: tempLayers})
    //console.log('New Layers count:', tempLayers[0])
    console.log(this.state)
  }

  deleteLayer = (index) => {
    const tempLayers = [...this.state.layers]
    tempLayers.splice(index, 1)

    this.setState({layers: tempLayers})
  }

  neuronChangeHandler = (event, layerId) => {
    const layerIndex = this.state.layers.findIndex(layer => {
      return (layer.id === layerId)
    })
    const tempLayers = [...this.state.layers]

    const newNeurons = event.target.value
    tempLayers[layerIndex].neurons = newNeurons

    this.setState({layers: tempLayers})
    console.log(this.state)
  }

  activationFunctionHandler = (event, layerId) => {
    const layerIndex = this.state.layers.findIndex(layer => {
      return (layer.id === layerId)
    })
    const tempLayers = [...this.state.layers]

    const newActivationFunction = event.target.value
    console.log('Activation Fucntion:',event.target.value)
    tempLayers[layerIndex].activationFunction = newActivationFunction

    this.setState({layers: tempLayers})
    console.log(this.state)
  }

  submitButton = () => {
    
  }

  render() {
    let Layers = null
    
    Layers = (
      <div className="Layers">
        {
          this.state.layers.map((layer, index) => {
            return(
              <Layer layerNumber={index}
              delete={() => this.deleteLayer(index)}
              neuronChange={(event) => this.neuronChangeHandler(event, layer.id)}
              activationFunctionChange={(event) => this.activationFunctionHandler(event, layer.id)}
              key={layer.id}
              />
            )
          })
        }
      </div>
    )

    return (
      <div>
        <Header />

        <div className="Layers">
          {Layers}
          <button className="Button" onClick={this.addLayer}>+</button>
        </div>
        <button onClick={this.submitButton}>submit</button>
      </div>
    );
  }
}

export default App;
