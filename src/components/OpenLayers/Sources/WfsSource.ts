import VectorSource from "ol/source/Vector";
import {GeoJSON} from "ol/format";
import {bbox as bboxStrategy} from 'ol/loadingstrategy';

const WfsSource = (url: string, maxFeatures: number) => {

    return new VectorSource({
        format: new GeoJSON(),
        url: `${url}&count=${maxFeatures}`,
        strategy: bboxStrategy,
    });
}

export default WfsSource;