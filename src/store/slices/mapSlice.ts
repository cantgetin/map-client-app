import {createSlice} from "@reduxjs/toolkit";
import {BaseLayerType, MapData} from "../../types/types";
import {RootState} from "../store";

const initialState = <MapData>{
    id: 0,
    name: '',
    centerX: 0,
    centerY: 0,
    zoom: 0,
    wfsLayers: [],
    wmsLayer: [],
    baseLayer: BaseLayerType.None
}

const layerTypeMap = new Map<string, BaseLayerType>(Object.values(BaseLayerType).map((v) => [v, v]))

function parseEnumString(text: string): BaseLayerType {
    if (layerTypeMap.get(text)) return layerTypeMap.get(text)!
    else return BaseLayerType.None
}

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setMap(state, action) {
            state.id = action.payload.id,
                state.name = action.payload.name,
                state.centerX = action.payload.centerX,
                state.centerY = action.payload.centerY,
                state.zoom = action.payload.zoom,
                state.wfsLayers = action.payload.wfsLayers,
                state.wmsLayers = action.payload.wmsLayers,
                state.baseLayer = parseEnumString(action.payload.baseLayer)
        },
        changeBaseLayer(state, action: { payload: string, type: any }) {
            state.baseLayer = parseEnumString(action.payload)
        }
    }
})
export const selectMap = (state: RootState) => state.map
export const {setMap, changeBaseLayer} = mapSlice.actions

export default mapSlice.reducer
