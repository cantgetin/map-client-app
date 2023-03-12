import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div style={{width: '100vw', height: '100vh', padding: '20px', boxSizing: 'border-box'}}>
            <h1>Map app</h1>
            <h2>Select the map you want:</h2>
            <ul>
                <li><Link to={'/map/1'}>Map 1 - Populated places</Link></li>
                <li><Link to={'/map/2'}>Map 2 - Roads</Link></li>
                <li><Link to={'/map/3'}>Map 3 - USA States</Link></li>
            </ul>
        </div>
    );
};

export default Home;