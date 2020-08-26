import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import {isEmail} from 'validator';

import Load from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

import {Container} from '../../style/globalStyles';
import {Form} from './styles';

export default function Register() {
    const dispatch = useDispatch();

    const id =  useSelector(state => state.auth.user.id);
    const nomeStorage =  useSelector(state => state.auth.user.nome);
    const emailStorage =  useSelector(state => state.auth.user.email);
    const isLoading =  useSelector(state => state.auth.isLoading);

    const [nome,setNome] = useState(''); 
    const [email,setEmail,] = useState('');
    const [password,setPassword] = useState('');
    
    React.useEffect(()=> {
        if(!id) return;
        if(!emailStorage) return;
        if(!nomeStorage) return;

        setNome(nomeStorage);
        setEmail(emailStorage);
    }, [emailStorage, id, nomeStorage]);

    async function handleSubmitSingUp(e){
        
        e.preventDefault();
        let formErrors = false;
        
        if(nome.length < 3 || nome.length > 255){
            formErrors = true;    
            toast.error('Seu nome deve ter entre 3 e 255 caractéres(letras).\nObs: espaço também conta como caractére.');
        }
        if(!id && (password.length < 6 || password.length > 55)){
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
        
        dispatch(actions.registerRequest({nome, email, password, id}));
    }
    
    return (
        <Container>
        <Load isLoading={isLoading}/>
            <h1>{id ? 'Editar dados': 'Crie sua conta'}</h1>
            <Form onSubmit={handleSubmitSingUp}>
                <label htmlFor="nome">
                    Nome
                    <input 
                        type="text" 
                        id="nome" 
                        value={nome} 
                        onChange={e => {setNome(e.target.value)}}
                        placeholder="Escreva seu nome aqui"/>
                </label>
                <label htmlFor="email">
                    Email
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={e => {setEmail(e.target.value)}}
                        placeholder="Escreva seu email aqui"/>
                </label>
                <label htmlFor="senha">
                    Senha
                    <input 
                        type="password" 
                        id="senha" 
                        value={password} 
                        onChange={e => {setPassword(e.target.value)}}
                        placeholder="Escreva sua senha aqui"/>
                </label>
                <button 
                    type="submit"
                    onClick={handleSubmitSingUp}>
                    {id? 'Salvar': 'Criar minha conta'}
                </button>
            </Form>
        </Container>
    )
}
