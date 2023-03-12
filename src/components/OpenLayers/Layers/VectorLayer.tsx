import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import OLVectorLayer from "ol/layer/Vector";
import wfsSource from "../Sources/WfsSource";

type Props = {
    sourceUrl: string,
    name: string
    style : any,
    zIndex: number
}

const VectorLayer = ( {sourceUrl, name, style = null, zIndex = 0}: Props) => {
    const map  = useContext(MapContext);


    useEffect(() => {
        if (!map) return;
        let source = wfsSource(sourceUrl, 10);
        let vectorLayer = new OLVectorLayer({
            source,
        });


        map.addLayer(vectorLayer);
        vectorLayer.setZIndex(zIndex);

        return () => {
            if (map) {
                map.removeLayer(vectorLayer);
            }
        };
    }, [map]);

    return null;
};

export default VectorLayer;