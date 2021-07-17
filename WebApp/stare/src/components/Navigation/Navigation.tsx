import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { routes } from '../../utils/navigation';
import { Route } from '../../utils/navigation/route';
import Link from './Link';

const useStyles = makeStyles(() => ({
    navigationContainer: {
        position: 'fixed',
        width: '120px',
        left: 0,
        top: 0,
        height: '100vh',
        backgroundColor: '#272727',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
    },

    links: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    }
}));

function Navigation() {
    const classes = useStyles();

    const history = useHistory();

    function onRouteClick(route: Route): void {
        history.push(route.path);
    }
    
    return (
        <div className={classes.navigationContainer}>
            <div className={classes.links}>
                {
                    routes.map((route, index) => (
                        <Link key={`navigation_route_${index}`} route={route} onClick={onRouteClick}/>
                    ))
                }
            </div>
        </div>
        
    )
}

export default Navigation;