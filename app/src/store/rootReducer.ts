import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import homeReducer from "./homeSlice"

export const rootReducer = combineReducers({
    user:  userReducer, 
    home: homeReducer
})
