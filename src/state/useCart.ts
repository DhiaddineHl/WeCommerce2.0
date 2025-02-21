import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './cartStore'; // Adjust the import based on your store setup
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from './slices/CartSlice';
import { Product } from '../hooks/models';

export const useCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const cartQuantity = cartItems.reduce((total, item) => total + item.qty, 0);

    const getItemQuantity = (id: number) => {
        const item = cartItems.find(item => item.id === id);
        return item ? item.qty : 0;
    };

    return {
        cartItems,
        cartQuantity,
        getItemQuantity,
        addToCart: (product: Product) => dispatch(addToCart(product)),
        removeFromCart: (id: number) => dispatch(removeFromCart(id)),
        increaseQuantity: (id: number) => dispatch(increaseQuantity(id)),
        decreaseQuantity: (id: number) => dispatch(decreaseQuantity(id)),
    };
};