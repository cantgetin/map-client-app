import React, {useEffect, useState} from 'react';
import OlMap from "../components/OpenLayers/Map/Map";
import Layers from "../components/OpenLayers/Layers/Layers";
import BaseTileLayer from "../components/OpenLayers/Layers/BaseTileLayer";
import {useParams} from "react-router";
import VectorLayerGroup from "../components/OpenLayers/Layers/VectorLayerGroup";
import sampleMapData from "../../sample-map-data.json"
import {BaseLayerType, MapData} from '../types/types'

const Map = () => {

    const {id} = useParams<{ id: string }>();
    const [map, setMap] = useState<MapData>()

    useEffect(() => {
        if (!id) return

        setMap(sampleMapData.maps[Number(id)-1])
        console.log(sampleMapData.maps[Number(id)-1])
    }, [id])

    return (
        map ?
        <OlMap centerX={map.centerX} centerY={map.centerY} zoom={map.zoom}>
            <Layers>
                <BaseTileLayer type={BaseLayerType.OSM}/>
                <VectorLayerGroup layers={map.wfsLayers}/>
            </Layers>
        </OlMap>
            : null
    );
};

export default Map;