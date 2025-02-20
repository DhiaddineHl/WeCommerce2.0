import Paginator from '../../components/Paginator'
import ShoppingCartProvider from '../../context/ShoppingCartContext'
import ProductsPage from '../../pages/ProductsPage'
import PageLayout from '../PageLayout'

const ShopPage = () => {


  return (
    <ShoppingCartProvider>
      <PageLayout>
        <ProductsPage />
        <Paginator />
      </PageLayout>
    </ShoppingCartProvider>
  )
}

export default ShopPage