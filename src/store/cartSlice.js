import {  createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],

    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            
            if(existingItem) {
                existingItem.quantity++;

            }else {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                });
            }
        
        },
    }
})


export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;