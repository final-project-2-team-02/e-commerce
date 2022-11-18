import { configureStore, combineReducers } from "@reduxjs/toolkit";
import marketReduc from '../redux/ecom'
import userReduc from '../redux/userredux'
// import dataReduce from '../redux/loginredux'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";



const persistConfig = {
    key: "root",
    version: 1,
    storage,
};
const reducer = combineReducers({
    ecom: marketReduc,
    user: userReduc,
    // data: dataReduce
});

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
    reducer: {
        persistedReducer
    }
})

export const persistedStore = persistStore(store);
