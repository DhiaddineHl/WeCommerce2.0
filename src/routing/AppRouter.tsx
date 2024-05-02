import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ProductForm from '../pages/ProductForm';
import HomePage from './HomePage';
import MyProductsPage from './MyProductsPage';

export const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <HomePage />
    },
    {
        path : '/create-product',
        element : <ProductForm />
    },
    {
        path : '/my-products',
        element : <MyProductsPage />
    },
])