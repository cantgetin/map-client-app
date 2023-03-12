import Map from "./components/Map/Map";
import React from "react";
import Layers from "./components/Layers/Layers";
import BaseTileLayer from "./components/Layers/BaseTileLayer";
import {BaseLayerType} from "./types/types";

function App() {

  return (
    <div className="App">
      <Map centerX={3} centerY={2} zoom={2}>
          <Layers>
              <BaseTileLayer type={BaseLayerType.OSM}/>
          </Layers>
      </Map>
    </div>
  )
}

export default App
