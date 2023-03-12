import React, {useState, useEffect} from "react"
import OlMap from 'ol/Map'
import OlView from 'ol/View'
import {fromLonLat} from "ol/proj";
import MapContext from "./MapContext";

type Props = {
    children: any,
    zoom: number,
    centerX: number,
    centerY: number
}

const Map = ({children, zoom, centerX, centerY}: Props) => {


    const mapRef = React.useRef<HTMLDivElement>(null);

    const [map, setMap] = useState<OlMap | null>(null);

    useEffect(() => {
        let center = fromLonLat([centerX, centerY])

        let options = {
            view: new OlView({zoom, center}),
            layers: [],
            controls: [],
            overlays: []
        };

        let mapObject: OlMap = new OlMap(options);
        mapObject.setTarget(mapRef.current!);
        setMap(mapObject);

        return () => mapObject.setTarget(undefined);
    }, []);

    useEffect(() => {
        if (!map) return;
        map.getView().setCenter(fromLonLat([centerX, centerY]));
        map.getView().setZoom(zoom);
    }, [centerX, centerY, zoom])

    return (
        <MapContext.Provider value={map}>
            <div ref={mapRef} style={{height: '100vh', width: '100vw'}}>
                {children}
            </div>
        </MapContext.Provider>
    )
}

export default Map;