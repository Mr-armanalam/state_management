import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../redux_reducer/slicer1";

export const store = configureStore({
    reducer: {
        //user1: userReducer
        counter: userReducer
    }
})