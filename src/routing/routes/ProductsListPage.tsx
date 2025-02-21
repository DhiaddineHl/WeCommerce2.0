import React from 'react'
import ProductDetails from '../../components/ProductDetails'
import ShoppingCartProvider from '../../context/ShoppingCartContext'
import PageLayout from '../PageLayout'
import { useParams } from 'react-router-dom'
import useProductsLists from '../../hooks/useProductsLists'
import ProductsPage from '../../pages/ProductsPage'

const ProductsListPage = () => {

    const { name } = useParams();
    const { data: productLists, isFetching } = useProductsLists.getProductListByName(name as string);
    
    if (isFetching) {
        return <div>Loading...</div>; // Show a loading state when fetching new data
    }
    
    return (
            <PageLayout>
                {productLists?.[0]?.items ? (
                    <ProductsPage products={productLists[0].items} />
                ) : (
                    <div>No products found</div>
                )}
            </PageLayout>
    );
}

export default ProductsListPage