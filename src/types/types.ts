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
export interface WmsLayer extends Layer {
    sourceLayerName: string,
}
export interface MapData {
    id: number,
    name: string,
    centerX: number,
    centerY: number,
    zoom: number,
    baseLayer: BaseLayerType,
    wfsLayers?: Layer[]
    wmsLayers?: WmsLayer[]
}