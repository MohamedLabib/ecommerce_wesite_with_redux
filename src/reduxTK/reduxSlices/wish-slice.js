import { createSlice } from "@reduxjs/toolkit";
export const wishSlice = createSlice({

    initialState: [],
    name: "wishSlice",
    reducers: {
        ADD_TO_WISH: (state, action) => {
            const existed = state.find((product) => product.name === action.payload.name);
            if (existed) {
                return;
            } else {
                state.push(action.payload)
            }

        },

        REMOVE_FROM_WISH: (state, action) => {
            return state.filter((product) => product.name !== action.payload.name);
        },
        CLEAR_WISH: () => {
            return [];
        },
    }
})

export const { ADD_TO_WISH, REMOVE_FROM_WISH, CLEAR_WISH } = wishSlice.actions;
export default wishSlice.reducer; 
