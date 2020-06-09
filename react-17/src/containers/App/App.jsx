import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import './App.scss';
import Routes from '../../routes'
import {store,persistor }from '../../store'

export default  function App(){
    return(
        <Provider store={store}>
            <PersistGate loading={null}  persistor={persistor}>
                <BrowserRouter>
                    <div className="app" data-testid="app" >
                        <Routes />
                    </div>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}



