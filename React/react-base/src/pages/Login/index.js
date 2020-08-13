import React from 'react';
import {useDispatch} from 'react-redux';

import * as exempleActions from '../../store/modules/exemple/actions';

import {Title, Paragrafo} from './styles';
import {Container} from '../../style/globalStyles';

export default function Login() {
    const dispath = useDispatch();

    function handleClick(e){
        e.preventDefault();

        dispath(exempleActions.clicaBotaoRequest());
    }

    return (
        <Container>
            <Title isRed={false}>
                Hello word
            </Title>
            <Paragrafo>
                lorem
            </Paragrafo>
            <button type='button' onClick={handleClick}>
                Click-me!
            </button>
        </Container>
    )
}
