import * as React from 'react'
import { Provider } from 'react-redux'
import App from './app/App'
import {PersistGate} from 'redux-persist/integration/react'
// import {store,persistor} from './app/store'
import {store,persistor} from "./app/store"

export default function AppWrapper(){
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    )
}