import React from 'react'
import PropTypes from 'prop-types';

import {Container} from './styles';

export default function Loading({isLoading}) {
    if(!isLoading) return<></>;

    return (
        <Container>
            <div/>
            <span>Carregando. . .</span>
        </Container>
    )
}

Loading.defaultProps = {
    isLoading: true
}

Loading.propType = {
    isLoading: PropTypes.bool,
}