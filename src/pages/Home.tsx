import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div style={{width: '100vw', height: '100vh', padding: '20px', boxSizing: 'border-box'}}>
            <h1>Map app</h1>
            <span>This is basic app that shows information on maps (points, lines, polygons), made in React Typescript using the OpenLayers library.</span>
            <h4>Select the map:</h4>
            <ul>
                <li><Link to={'/map/1'}>Map 1 - Populated places (points)</Link></li>
                <li><Link to={'/map/2'}>Map 2 - Roads (lines)</Link></li>
                <li><Link to={'/map/3'}>Map 3 - USA States (polygons)</Link></li>
            </ul>
        </div>
    );
};

export default Home;