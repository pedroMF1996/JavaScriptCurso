import storage from 'redux-persist/lib/storage';

import {persistReducer} from 'redux-persist';


export default (reducers) => {
    const persistReducers = persistReducer(
        {
            key:'NOME-DA-APLICAÇÃO',
            storage,
            whitelist: ['exemple']
        },
        reducers
    );

    return persistReducers;
}

