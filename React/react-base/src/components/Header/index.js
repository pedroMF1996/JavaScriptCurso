import React from 'react'
import {FaHome, FaSignInAlt, FaUserAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


import {linkIconSize} from '../../config/sizes';

import {Nav} from './styles';

export default function Header() {
    const botaoClicado = useSelector(state => state.exemple.botaoClicado)
    return (
        <Nav>
            <Link to='/'><FaHome size={linkIconSize}/></Link>
            <Link to="/login"><FaSignInAlt size={linkIconSize}/></Link>
            <Link to=""><FaUserAlt size={linkIconSize}/></Link>
            {botaoClicado ? 'clicado': 'não clicado'}
        </Nav>
    )
}
