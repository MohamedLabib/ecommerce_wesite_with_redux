import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        ADD_TO_CART: (state, action) => {
            const existed = state.find((product) => product.name === action.payload.name);
            if (existed) {
                existed.qty += 1;
            } else {
                const productClone = { ...action.payload, qty: 1 };
                state.push(productClone);
            }

        },
        DECREASE_QTY: (state, action) => {
            const existed = state.find((product) => product.id === action.payload.id);
            if (existed) {
                if (existed.qty > 1) {
                    existed.qty -= 1;
                } else {
                    return state.filter((product) => product.id !== action.payload.id);
                }

            }
        },
        REMOVE_FROM_CART: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id);
        },
        CLEAR_CART: () => {
            return [];
        },
    }
})

export const { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_QTY, CLEAR_CART } = cartSlice.actions;
export default cartSlice.reducer; 
