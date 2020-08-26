import {call, put, all, takeLatest} from 'redux-saga/effects';
import {get} from 'lodash';
import {toast} from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';


function* loginRequest(payload){
    console.log('saga', payload);
    const {email, password, prevPath} = payload.payload;

    try{
        const response = yield call(axios.post, '/tokens', {email, password});
        yield put(actions.loginSuccess({...response.data}));

        toast.success('Login bem sucedido');

        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        
        history.push(prevPath);
    }catch{
        toast.error('Usuário ou senha inválido(s).');
        yield put(actions.loginFailure());
    }
}

function* registerRequest(args){
    console.log(args);
    const {nome, email, password, id} = args.payload;
    console.log({nome, email, password, id});
    try {
        if(id){
            yield call(axios.put, '/users', {
                nome, 
                email,
                password: password || undefined
            });
            toast.success('Conta alterada com sucesso');

            yield put(actions.registerUpdatedSuccess({nome, email, password}));
        }else{
            yield axios.post('/users', {nome, email, password});
            toast.success('Você fez seu cadastro!');
            yield put(actions.registerCreatedSuccess({nome, email, password}));
            history.push('/');
        }
    } catch (e) {
        const errors = get(e, 'response.data.error', []);
        const status = get(e, 'response.status', 0);

        if(status === 401){
            toast.error('Você precisa fazer login novamente');
            yield put(actions.loginFailure());
            return history.push('/login');
        }
        if(errors.length > 0){
            errors.map(e => toast.error(e));
        }else{
            toast.error('Erro desconhecido');
        }
        yield put(actions.registerFailure());
    }
}

function presistRehydrate(payload){
    const token = get(payload, 'payload.auth.token');
    console.log(token);
    if(!token) return;
    axios.defaults.headers.Authorization = `Bearer ${token}`;
}
 
export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.REGISTER_REQUEST, registerRequest),
    takeLatest(types.PERSIST_REHYDRATE, presistRehydrate)
    ]
);