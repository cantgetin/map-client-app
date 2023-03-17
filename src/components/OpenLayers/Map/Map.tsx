import React, {useState, useEffect} from "react"
import OlMap from 'ol/Map'
import OlView from 'ol/View'
import {fromLonLat} from "ol/proj";
import MapContext from "./MapContext";
import {Overlay} from "ol";
import {Popover, Typography} from "@mui/material";
import {Pixel} from "ol/pixel";

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

        const popup = new Overlay({});
        mapObject.addOverlay(popup);

        mapObject.on('click', function (evt) {
            setOpen(false)
            const feature = mapObject.forEachFeatureAtPixel(evt.pixel, function (feature) {
                return feature;
            });
            if (!feature) {
                return;
            }

            if (feature.get("NAME")) setPopupContent(feature.get("NAME"))
            else if (feature.get("name")) setPopupContent(feature.get("name"))
            else setPopupContent(feature.get("STATE_NAME"))

            handleClick(evt.pixel)
        });

        mapObject.on('pointerdrag', (evt) => {
            setOpen(false)
        })

        setMap(mapObject);

        return () => mapObject.setTarget(undefined);
    }, []);

    useEffect(() => {
        if (!map) return;
        map.getView().setCenter(fromLonLat([centerX, centerY]));
        map.getView().setZoom(zoom);
    }, [centerX, centerY, zoom])

    const [popupPosition, setPopupPosition] = useState<number[]>([0,0])
    const [open, setOpen] = useState<boolean>(false)
    const [popupContent, setPopupContent] = useState<string>('')
    const handleClick = (pixel: Pixel) => {
        setPopupPosition(pixel)
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    const id = open ? 'simple-popover' : undefined;

    return (
        <MapContext.Provider value={map}>
            <div ref={mapRef} style={{height: '100vh', width: '100vw'}}>
                {children}
            </div>
            <Popover
                id={id}
                open={open}
                anchorReference="anchorPosition"
                anchorPosition={{ top: popupPosition[1], left: popupPosition[0] }}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{pointerEvents: 'none'}}
            >
                <Typography sx={{ p: 2 }}>{popupContent}</Typography>
            </Popover>
        </MapContext.Provider>
    )
}

export default Map;