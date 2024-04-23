import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/Product_Slice";

export const store =configureStore({


    reducer :{
        product:productReducer
    }
})
