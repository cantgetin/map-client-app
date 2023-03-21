import React, {useContext, useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import {Pixel} from "ol/pixel";
import {Overlay} from "ol";
import MapContext from "../OpenLayers/Map/MapContext";
import MuiPopover from "@mui/material/Popover";

const Popover = () => {

    const map = useContext(MapContext);

    useEffect(() => {
        if (map == null) return;

        const popup = new Overlay({});
        map.addOverlay(popup);

        map.on('click', function (evt) {
            setOpen(false)
            const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
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

        map.on('pointerdrag', () => setOpen(false))

    }, [map])

    const [popupPosition, setPopupPosition] = useState<number[]>([0, 0])
    const [open, setOpen] = useState<boolean>(false)
    const [popupContent, setPopupContent] = useState<string>('')

    const handleClose = () => {
        setOpen(false)
    };

    const handleClick = (pixel: Pixel) => {
        setPopupPosition(pixel)
        setOpen(true)
    };

    const id = open ? 'simple-popover' : undefined;

    return (
        <MuiPopover
            id={id}
            open={open}
            anchorReference="anchorPosition"
            anchorPosition={{top: popupPosition[1], left: popupPosition[0]}}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            sx={{pointerEvents: 'none'}}
        >
            <Typography sx={{p: 2}}>{popupContent}</Typography>
        </MuiPopover>
    );
};

export default Popover;