import { makeStyles } from '@material-ui/core';
import React from 'react';

import { Route } from '../../utils/navigation/route';

const useStyles = makeStyles(() => ({
    link: {
        width: '100%',
        color: 'white',
        cursor: 'pointer',
        marginTop: '24px',
        border: '1px solid #505050',
        borderRadius: '10px',
        padding: '8px 12px',
        display: 'flex',
        justifyContent: 'center',

        '&:hover': {
            backgroundColor: '#505050',
        }
    }
}));

interface LinkProps {
    route: Route;
    onClick: (route: Route) => void;
}

function Link({route, onClick}: LinkProps) {
    const classes = useStyles();

    return (
        <div className={classes.link} onClick={() => onClick(route)}>
            {route.label}
        </div>
    );
}

export default Link;