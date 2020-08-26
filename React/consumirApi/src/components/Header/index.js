import React from 'react'
import {FaHome, FaSignInAlt, FaUserAlt, FaCircle, FaPowerOff} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {linkIconSize} from '../../config/sizes';

import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

import {Nav} from './styles';

export default function Header() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
       dispatch(actions.loginFailure());
        history.push('/');
    }

    return (
        <Nav>
            <Link to='/'><FaHome size={linkIconSize}/></Link>
            <Link to="/Register"><FaSignInAlt size={linkIconSize}/></Link>
            {isLoggedIn?
                (<Link onClick={handleLogout} to="/logout"><FaPowerOff size={linkIconSize}/></Link>) :
                (<Link to="/login"><FaUserAlt size={linkIconSize}/></Link>)}
            {isLoggedIn && (<FaCircle size={linkIconSize} color="#70db70"/>)}
        </Nav>
    )
}
