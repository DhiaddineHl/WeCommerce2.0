import {createBrowserRouter} from 'react-router-dom';
import ShopPage from './routes/ShopPage';
import CheckoutPage from './routes/CheckoutPage';
import ProductDetailsPage from './routes/ProductDetailsPage';
import HomePage from './routes/HomePage';
import ProductsListPage from './routes/ProductsListPage';

export const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <HomePage />
    },
    {
        path : '/shop',
        element : <ShopPage />
    },
    {
        path : '/checkout',
        element : <CheckoutPage />
    },
    {
        path: '/products/:id',
        element: <ProductDetailsPage />
    },
    {
        path: '/productLists/:name',
        element: <ProductsListPage />
    }
])