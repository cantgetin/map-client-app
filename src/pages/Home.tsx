import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div style={{width: '100vw', height: '100vh', padding: '20px', boxSizing: 'border-box'}}>
            <h1>Map app</h1>
            <p>This is basic app that shows information on maps.</p>
            <p>It has WFS layers with points, lines, polygons and some WMS Layers.</p>
            <p>Made with React Typescript and Redux using OpenLayers library for maps.</p>
            <h4>Select the map:</h4>
            <ul>
                <li><Link to={'/map/1'}>Map 1 - Populated places (points)</Link></li>
                <li><Link to={'/map/2'}>Map 2 - Roads (lines)</Link></li>
                <li><Link to={'/map/3'}>Map 3 - USA States (polygons)</Link></li>
                <li><Link to={'/map/4'}>Map 4 - USA States WMS (Tiled Image)</Link></li>
            </ul>
        </div>
    );
};

export default Home;