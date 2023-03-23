import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import {
    DragRotateAndZoom
} from 'ol/interaction';

const RotateInteraction = () => {
    const map  = useContext(MapContext);

    useEffect(() => {
        if (!map) return;

        let rotateInteraction = new DragRotateAndZoom()
        map.addInteraction(rotateInteraction)
    }, [map]);

    return null;
};

export default RotateInteraction;