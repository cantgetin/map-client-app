import {useContext, useEffect} from "react";
import MapContext from "../Map/MapContext";
import OLTileLayer from "ol/layer/Tile";
import {BingMaps, OSM} from "ol/source";
import {BaseLayerType} from "../../types/types";

type Props = {
    type: BaseLayerType
    zIndex?: number
}

const BaseTileLayer = ({type, zIndex = 0}: Props) => {

    const map = useContext(MapContext);

    useEffect(() => {
        if (!map) return;
        let source;
        switch (type) {
            case BaseLayerType.Bing:
                source = new BingMaps({key: import.meta.env.VITE_BING_MAPS_KEY, imagerySet: 'AerialWithLabelsOnDemand'});
                break;
            case BaseLayerType.OSM:
                source = new OSM();
                break;
            case BaseLayerType.None:
                source = undefined;
                break;
        }

        let baseTileLayer = new OLTileLayer({
            source,
            zIndex,
        });

        map.addLayer(baseTileLayer);
        baseTileLayer.setZIndex(zIndex);

        return () => {
            if (map) {
                map.removeLayer(baseTileLayer);
            }
        };
    }, [map]);

    return null;
};

export default BaseTileLayer;