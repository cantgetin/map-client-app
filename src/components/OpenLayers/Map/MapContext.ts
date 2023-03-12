import React from "react";
import olMap from 'ol/Map'

const MapContext = React.createContext<olMap | null>(null);
export default MapContext;