import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserSlice from "./user/UserSlice.ts";


const rootReducer = combineReducers({
    likes: UserSlice, // Assuming UserSlice is your reducer
    // Add other reducers here if needed
  });




const persistConfig = {
    key:"root",
    storage,
    version:1,
}



const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleWare) => getDefaultMiddleWare({
        serializableCheck:false
    })
})

export const persistor = persistStore(store)