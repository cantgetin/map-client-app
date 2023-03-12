import React from 'react';
import OlMap from "../components/Map/Map";
import Layers from "../components/Layers/Layers";
import BaseTileLayer from "../components/Layers/BaseTileLayer";
import {BaseLayerType} from "../types/types";

const Map = () => {
    return (
        <OlMap centerX={61.384235} centerY={55.138498} zoom={7}>
            <Layers>
                <BaseTileLayer type={BaseLayerType.OSM}/>
            </Layers>
        </OlMap>
    );
};

export default Map;