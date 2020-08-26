import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

export default function MyRoute({ isClosed, ...rest }) {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    
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