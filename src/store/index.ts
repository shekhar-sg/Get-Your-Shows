import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {showApi} from "./api/showApi.ts";
import {setupListeners} from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: combineReducers({
        [showApi.reducerPath]: showApi.reducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(showApi.middleware)
});
setupListeners(store.dispatch)

export default store;