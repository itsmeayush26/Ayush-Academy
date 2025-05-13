import authReducer from "../features/authslice";
import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "@/features/api/authApi";


const rootReducer = combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    auth:authReducer
});
export default rootReducer;