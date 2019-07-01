

import { createStore, applyMiddleware } from "redux";


import { ShopReducer } from "./ShopReducers";
import { CommonReducer } from "./CommonReducer";
import { CartReducer } from "./CartReducer";
import { asyncActions } from "./AsyncMiddleware";


export const SportsStoreDataStore = 
    createStore(CommonReducer(ShopReducer, CartReducer), applyMiddleware(asyncActions));