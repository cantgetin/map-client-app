import React from "react";
import {WmsLayer} from "../../../types/types";
import TiledWmsLayer from "./TiledWmsLayer";

type Props = {
    layers: WmsLayer[] | undefined
}

const TiledWmsLayerGroup = ({layers}: Props) => {
    return (
        layers ?
            <>
                {layers.map(layer =>
                    layer.visible
                        ?
                        <TiledWmsLayer sourceUrl={layer.sourceUrl} sourceLayerName={layer.sourceLayerName}
                                       key={layer.id} style={null} zIndex={0}/>
                        : null)}
            </> : null
    );

};

export default TiledWmsLayerGroup;