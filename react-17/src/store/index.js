import { createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from './models/rootReducers'

const rootReducer = (state , action) =>{
    if(action.type === 'LOGOUT'){
        state = undefined
    }

    return reducers(state, action)
}

const persistConfig = {
    key: 'SpotifyPocketStorage',
    storage,

}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const persistor = persistStore(store)

export { store, persistor }