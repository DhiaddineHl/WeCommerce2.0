import { Flex, Strong } from '@radix-ui/themes'
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { useShoppingCart } from '../context/ShoppingCartContext';

interface QuantityCounterProps {
    itemId : number;
}

const QuantityCounter = ({itemId} : QuantityCounterProps) => {


    const {
        getItemQuantity,
         increaseCartquantity,
          decreaseCartquantity,
            cartItems
        } = useShoppingCart();

        const quantity = getItemQuantity(itemId);

        console.log(cartItems);
        

  return (
    <Flex justify={'between'} align={'center'} className='bg-slate-200 rounded-3xl h-11'>
        <button className='p-4' onClick={() => decreaseCartquantity(itemId)} >
            <IoMdRemove size={20} />
        </button>
        <span className='p-4'>
            <Strong>{quantity}</Strong>
        </span>
        <button className='p-4' onClick={() => {increaseCartquantity(itemId)}} >
            <IoMdAdd size={20} />
        </button>
    </Flex>
  )
}

export default QuantityCounter