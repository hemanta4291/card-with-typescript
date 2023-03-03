import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/users/UserSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./rootSaga";



const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer:{
        users:userReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(sagaMiddleware)

})

sagaMiddleware.run(rootSaga)


export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 