import ProductCard from '../components/ProductCard'
import { Product } from '../hooks/models';
import useProducts from '../hooks/useProducts'

interface ProductGridProps {
    products: Product[]
}

const ProductsPage = ({products}: ProductGridProps) => {


  return (
    <div className="mt-6 mb-8 mx-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products?.map(product => (
            <ProductCard key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image_url={product.imageName}
            rating={product.review}
            />
        ))}
    </div>
  )
}

export default ProductsPage