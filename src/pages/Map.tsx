import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {Header, Popover } from "../components/UI";
import OlMap from "../components/OpenLayers/Map/Map";
import {Layers, BaseTileLayer, VectorLayerGroup} from "../components/OpenLayers/Layers";
import {Interactions, RotateInteraction} from "../components/OpenLayers/Interactions";
import {Controls, FullScreenControl} from "../components/OpenLayers/Controls";
import {selectMap, setMap} from "../store/slices/mapSlice";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import sampleMapData from "../../sample-map-data.json"
import TiledWmsLayerGroup from "../components/OpenLayers/Layers/TiledWmsLayerGroup";

const Map = () => {

    const {id} = useParams<{ id: string }>();

    const dispatch = useAppDispatch();
    const map = useAppSelector(selectMap);

    useEffect(() => {
        if (!id) return
        dispatch(setMap(sampleMapData.maps[Number(id)-1]))
    }, [id])

    useEffect(() => {
        console.log(map)
    }, [map])

    return (
        map ?
            <>
                <Header/>
                <OlMap centerX={map.centerX} centerY={map.centerY} zoom={map.zoom}>
                    <Popover/>
                    <Layers>
                        <BaseTileLayer type={map.baseLayer}/>
                        <VectorLayerGroup layers={map.wfsLayers}/>
                        <TiledWmsLayerGroup layers={map.wmsLayers}/>
                    </Layers>
                    <Controls>
                        <FullScreenControl/>
                    </Controls>
                    <Interactions>
                        <RotateInteraction/>
                    </Interactions>
                </OlMap>
            </>
            : null
    );
};

export default Map;