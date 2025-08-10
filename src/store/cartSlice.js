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
        // Ação para remover um item do carrinho
        removeFromCart(state, action) {
            const idToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== idToRemove);
        },
        // Ação para aumentar a quantidade de um item
        incrementQuantity(state, action) {
            const idToIncrement = action.payload;
            const existingItem = state.items.find(item => item.id === idToIncrement);
            if (existingItem) {
                existingItem.quantity++;
            }
        },
        // Ação para diminuir a quantidade de um item
        decrementQuantity(state, action) {
            const idToDecrement = action.payload;
            const existingItem = state.items.find(item => item.id === idToDecrement);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity--;
                } else {
                    // Se a quantidade for 1, remove o item completamente
                    state.items = state.items.filter(item => item.id !== idToDecrement);
                }
            }
        },
    }
})


export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;