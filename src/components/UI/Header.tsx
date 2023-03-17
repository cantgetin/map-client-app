import React from 'react';
import classes from './Header.module.scss'
import {Link, useNavigate} from "react-router-dom";
import sampleMapData from "../../../sample-map-data.json"
import {BaseLayerType} from "../../types/types";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {changeBaseLayer, selectMap} from "../../store/slices/mapSlice";

const Header = () => {
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const map = useAppSelector(selectMap);

    type enumKey = keyof typeof BaseLayerType

    return (
        <div className={classes.header}>
            <Link to='/'>Home</Link>
            <div className={classes.header_menu}>
                <span>Map:</span>
                <select onChange={event => navigate(`/map/${event.target.value}`)} value={map.id}>
                    {
                        sampleMapData.maps.map((map) =>
                            <option key={map.id} value={map.id}>{map.name}</option>
                        )
                    }
                </select>
            </div>
            <div className={classes.header_menu}>
                <span>Base layer:</span>
                <select onChange={event => dispatch(changeBaseLayer(event.target.value))} value={map.baseLayer}>
                    {
                        (Object.keys(BaseLayerType) as Array<enumKey>).map((key) =>
                            <option key={key}>{key}</option>
                        )
                    }
                </select>
            </div>
        </div>
    );
};

export default Header;