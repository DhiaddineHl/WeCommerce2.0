import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ProductsPage from '../pages/ProductsPage';
import ProductForm from '../pages/ProductForm';
import HomePage from './HomePage';

export const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <HomePage />
    },
    {
        path : '/create-product',
        element : <ProductForm />
    }
])