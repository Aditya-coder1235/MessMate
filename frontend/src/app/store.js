import {configureStore} from '@reduxjs/toolkit'
import messReducer from '../features/messSlice'

export const store=configureStore({
    reducer:{
        mess:messReducer
    }
})