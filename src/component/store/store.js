import { configureStore, createReducer } from "@reduxjs/toolkit";

// Reducer
import userReducer from '../reducers/user/userSlice';
import CaseReducer from '../reducers/cart/cartSlice';

export default configureStore({
    reducer:{
        user: userReducer,
        cart: createReducer,
    }
})