import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ isClosed, ...rest }) {
    const isLoggedIn = false;
    
        if(isClosed && !isLoggedIn){
            return <Redirect to= { { pathname: '/login', state: { prevPath: rest.location.pathname } } } />
        }
        
        return <Route {...rest} />

}


MyRoute.defaultProps = {
    isClosed: false,
}

MyRoute.propTypes = {
    isClosed: PropTypes.bool
}