import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header/Header.js";
import Layer from "./Components/Layer/Layer.js";

function App() {
  return (
    <div>
      <Header />

      <div className="Layers">
        <Layer />
        <Layer />
      </div>
    </div>
  );
}

export default App;
