import TileWMS from 'ol/source/TileWMS';

const TileWmsSourcePreset = (url: string, layerName: string) => {

    return new TileWMS({
        url: url,
        params: {
            'LAYERS': layerName,
            'TILED': true
        },
        serverType: 'geoserver',
        transition: 0,
        projection: 'EPSG:900913',
    })
}

export default TileWmsSourcePreset;