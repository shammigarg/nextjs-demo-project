import { createSlice } from '@reduxjs/toolkit';

const initialState = { showShoppingCart: true }

const uiSlice = createSlice({
    name: "ui",
    initialState: initialState,
    reducers: {
        toggleShoppingCart(state) {
            state.showShoppingCart = !state.showShoppingCart
        }

    }
})

export const uiActions = uiSlice.actions

export default uiSlice;