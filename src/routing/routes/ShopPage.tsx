import Paginator from '../../components/Paginator'
import ShoppingCartProvider from '../../context/ShoppingCartContext'
import useProducts from '../../hooks/useProducts'
import ProductsPage from '../../pages/ProductsPage'
import PageLayout from '../PageLayout'

const ShopPage = () => {

  const {data : products} = useProducts.fetchProducts();

  if (!products) {
    return <div>Loading...</div>
  }

  return (
    <ShoppingCartProvider>
      <PageLayout>
        <ProductsPage products={products} />
        <Paginator />
      </PageLayout>
    </ShoppingCartProvider>
  )
}

export default ShopPage