import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productsSlice from './reduxSlices/products-slice';
import cartSlice from './reduxSlices/cart-slice';
import wishSlice from './reduxSlices/wish-slice';
import productSlice from './reduxSlices/product-slice';
const middleware = [thunk];

export const store = configureStore({
    reducer: {
        products: productsSlice, 
        cart:cartSlice ,
        wish:wishSlice , 
        product: productSlice,
    },


});

export default store;