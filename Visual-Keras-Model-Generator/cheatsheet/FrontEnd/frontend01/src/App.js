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
    tempLayers.push({info: '', id: layerId});
    this.setState({layers: tempLayers})
    //console.log('New Layers count:', tempLayers[0])
    console.log(this.state)
  }

  deleteLayer = (index) => {
    const tempLayers = [...this.state.layers]
    tempLayers.splice(index, 1)

    this.setState({layers: tempLayers})
  }

  submitButton = () => {
    console.log('State is ',this.state)
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
