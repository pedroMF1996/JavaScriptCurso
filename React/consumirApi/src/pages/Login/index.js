import React, {useState, useEffect} from 'react';
import {toast} from 'react-toastify';
import {isEmail} from 'validator';
import {useDispatch, useSelector} from 'react-redux';
import {get} from 'lodash';

import * as actions from '../../store/modules/auth/actions';

import Load from '../../components/Loading';

import {Form} from './styles';
import {Container} from '../../style/globalStyles';

export default function Login(props) {
    const dispatch = useDispatch();

    const prevPath = get(props, 'location.state.prevPath', '/');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLoading =  useSelector(state => state.auth.isLoading);

    useEffect(()=>{
        console.log('isLoading: '+isLoading);
    },[isLoading])

    function handleSubmit(e){
        let formErrors = false;
        
        e.preventDefault();
        
        if(password.length < 6 || password.length > 55){
            formErrors = true;
            toast.error('A senha deve ter entre 6 e 55 caracteres');
        }
        
        if(!isEmail(email)){
            formErrors = true;
            toast.error('Email inválido!');
        }
        
        if(formErrors){
            return;
        }
        
        dispatch(actions.loginRequest({email, password, prevPath}));
        
    }
    
    return (
        <Container>
        <Load isLoading={isLoading}/>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
        <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    id="email"
                    placeholder="Email"
                    autoComplete="email"
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    id="password"
                    placeholder="Senha"
                    autoComplete="current-password"
                />
                <button type="submit">Acessar</button>
            </Form>
        </Container>
    )
}
