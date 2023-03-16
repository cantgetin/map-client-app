import React from 'react';
import {Layer} from "../../../types/types";
import VectorLayer from "./VectorLayer";

type Props = {
    layers: Layer[]
}

const VectorLayerGroup = ({layers}: Props) => {
    return (
        <>
            {layers.map(layer =>
                layer.visible
                    ?
                    <VectorLayer sourceUrl={layer.sourceUrl} name={layer.name} key={layer.id} style={null} zIndex={10}/>
                    : null)}
        </>
    );

};

export default VectorLayerGroup;