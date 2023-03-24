import {useContext, useEffect} from "react";
import MapContext from "../Map/MapContext";
import OLTileLayer from "ol/layer/Tile";
import {TiledWmsSource} from "../Sources";

type Props = {
    sourceUrl: string
    sourceLayerName: string
    style: any,
    zIndex: number
}

const TiledWmsLayer = ({sourceUrl, sourceLayerName, style = null, zIndex = 1000}: Props) => {

    const map = useContext(MapContext);

    useEffect(() => {
        if (!map) return;
        let source = TiledWmsSource(sourceUrl, sourceLayerName);

        let tileLayer = new OLTileLayer({
            source,
            zIndex,
        });

        map.addLayer(tileLayer);
        tileLayer.setZIndex(zIndex);

        return () => {
            if (map) {
                map.removeLayer(tileLayer);
            }
        };
    }, [map]);

    return null;
};

export default TiledWmsLayer;
