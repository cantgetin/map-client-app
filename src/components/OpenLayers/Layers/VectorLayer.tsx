import {useContext, useEffect} from "react";
import MapContext from "../Map/MapContext";
import OLVectorLayer from "ol/layer/Vector";
import wfsSource from "../Sources/WfsSource";
import {Fill, Stroke, Style} from "ol/style";
import CircleStyle from "ol/style/Circle";

type Props = {
    sourceUrl: string,
    name: string
    style: any,
    zIndex: number
}

const VectorLayer = ({sourceUrl, name, style = null, zIndex = 10}: Props) => {
    const map = useContext(MapContext);

    const universalStyles = new Style({
        image: new CircleStyle({
            radius: 5,
            fill: new Fill({
                color: 'red',
            }),
            stroke: new Stroke({
                color: 'black',
                width: 3
            })
        }),
        stroke: new Stroke({
            color: 'red',
            width: 3,
        }),
        fill: new Fill({
            color: 'rgba(255, 0, 0, 0.1)',
        }),
    })

    useEffect
    (() => {
        if (!map) return;
        let source = wfsSource(sourceUrl, 1);
        let vectorLayer = new OLVectorLayer({
            source: source,
            style: universalStyles,
        });

        map.addLayer(vectorLayer);
        vectorLayer.setZIndex(zIndex);

        return () => {
            if (map) {
                map.removeLayer(vectorLayer);
            }
        };
    }, [map, sourceUrl]);

    return null;
};

export default VectorLayer;