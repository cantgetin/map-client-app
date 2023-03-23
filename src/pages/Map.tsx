import React, {useEffect} from 'react';
import OlMap from "../components/OpenLayers/Map/Map";
import {Layers, BaseTileLayer, VectorLayerGroup} from "../components/OpenLayers/Layers";
import {useParams} from "react-router";
import sampleMapData from "../../sample-map-data.json"
import Header from "../components/UI/Header";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {selectMap, setMap} from "../store/slices/mapSlice";
import Popover from "../components/UI/Popover";
import {Interactions, RotateInteraction} from "../components/OpenLayers/Interactions";
import {Controls, FullScreenControl} from "../components/OpenLayers/Controls";

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
                    <Popover/>
                    <Layers>
                        <BaseTileLayer type={map.baseLayer}/>
                        <VectorLayerGroup layers={map.wfsLayers}/>
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