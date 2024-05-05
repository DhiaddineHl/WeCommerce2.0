import useProducts from "../hooks/useProducts";


interface CartItemProps {
  id : number,
  quantity : number,
  deleteItem : (id : number) => void
}

const CartItem = ({id, quantity, deleteItem} : CartItemProps) => {

  const {data : products} = useProducts.fetchProducts();

  const product = products?.find(product => product.id === id)

  return (
    <li key={id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img
      src={product?.image_url}
      alt={product?.name}
      className="h-full w-full object-cover object-center"
      />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
      <div>
      <div className="flex justify-between text-base font-semibold text-gray-900">
        <h3>
          <a>{product?.name}</a>
        </h3>
        <p className="ml-4">{product?.price} $</p>
      </div>
      </div>
      <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-gray-500">Qty {quantity}</p>

      <div className="flex">
        <button
        type="button"
        className="font-semibold text-indigo-600 hover:text-indigo-500"
        onClick={ () => deleteItem(id)}
        >
        Remove
        </button>
      </div>
      </div>
      </div>
    </li>
  )
}

export default CartItem