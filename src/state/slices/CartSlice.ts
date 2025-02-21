import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product } from '../../hooks/models';

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.items[itemIndex].qty += 1;
            } else {
                state.items.push({ ...action.payload, qty: 1 });
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (itemIndex >= 0) {
                state.items[itemIndex].qty += 1;
            }
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (itemIndex >= 0) {
                if (state.items[itemIndex].qty === 1) {
                    state.items.splice(itemIndex, 1);
                } else {
                    state.items[itemIndex].qty -= 1;
                }
            }
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;