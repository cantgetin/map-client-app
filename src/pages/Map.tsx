import React, {useEffect, useState} from 'react';
import OlMap from "../components/OpenLayers/Map/Map";
import Layers from "../components/OpenLayers/Layers/Layers";
import BaseTileLayer from "../components/OpenLayers/Layers/BaseTileLayer";
import {useParams} from "react-router";
import VectorLayerGroup from "../components/OpenLayers/Layers/VectorLayerGroup";
import sampleMapData from "../../sample-map-data.json"
import {BaseLayerType, MapData} from '../types/types'
import Header from "../components/UI/Header";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {selectMap, setMap} from "../store/slices/mapSlice";

const Map = () => {

    const {id} = useParams<{ id: string }>();

    const dispatch = useAppDispatch();
    const map = useAppSelector(selectMap);

    useEffect(() => {
        if (!id) return
        dispatch(setMap(sampleMapData.maps[Number(id)-1]))
    }, [id])

    return (
        map ?
            <>
                <Header/>
                <OlMap centerX={map.centerX} centerY={map.centerY} zoom={map.zoom}>
                    <Layers>
                        <BaseTileLayer type={map.baseLayer}/>
                        <VectorLayerGroup layers={map.wfsLayers}/>
                    </Layers>
                </OlMap>
            </>
            : null
    );
};

export default Map;