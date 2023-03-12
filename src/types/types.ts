export enum BaseLayerType {
    OSM = "OSM",
    Bing = "Bing",
    None = "None"
}

export interface Layer {
    id: number,
    sourceUrl: string,
    name: string,
    visible: boolean
}

// TODO: add baseLayer enum to json, parse it
export interface MapData {
    id: number,
    name: string,
    centerX: number,
    centerY: number,
    zoom: number,
    wfsLayers: Layer[]
}