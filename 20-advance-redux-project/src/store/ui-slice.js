import { createSlice } from '@reduxjs/toolkit';

const initialState = { showShoppingCart: true, notification: null, }

const uiSlice = createSlice({
    name: "ui",
    initialState: initialState,
    reducers: {
        toggleShoppingCart(state) {
            state.showShoppingCart = !state.showShoppingCart;
        },

        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice;