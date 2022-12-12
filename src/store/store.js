import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../Home/homeSlice'
import { createLogger } from 'redux-logger'
import { cartReducer } from '../Cart/store/cartSlice'




let middlewares = []
if (process.env.NODE_ENV === 'development'){

    const logger = createLogger({
        collapsed:(getstate,action ,logEntry)=>!logEntry.error,
    })
    middlewares.push(logger)

    }
    export default configureStore({
        reducer:{
            Home: homeReducer,
            cart:cartReducer
            
        },
        middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(middlewares),
        devTools: process.env.NODE_ENV !== 'production',
    })

