import ShoppingCartProvider from '../../context/ShoppingCartContext'
import PageLayout from '../PageLayout'
import ProductDetails from '../../components/ProductDetails'
import useProducts from '../../hooks/useProducts'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {

    const { id } = useParams();

    const {data: product} = useProducts.fetchProductById(parseInt(id as string));
    console.log(product);
    
    
    if (!product) {
        return <div>Loading...</div>
    }

  return (
    <ShoppingCartProvider>
        <PageLayout>
            <ProductDetails product={product[0]} />
        </PageLayout>
    </ShoppingCartProvider>
  )
}

export default ProductDetailsPage