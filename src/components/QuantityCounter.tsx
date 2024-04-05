import { Flex, Strong } from '@radix-ui/themes'
import { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";

const QuantityCounter = () => {

    const [quantity, setQuantity] = useState<number>(0)

  return (
    <Flex className='bg-slate-200 rounded-3xl w-36 h-11 items-center justify-center'>
        <button className='p-4' onClick={() => setQuantity(quantity - 1)} >
            <IoMdRemove size={20} />
        </button>
        <span className='p-4'>
            <Strong>{quantity}</Strong>
        </span>
        <button className='p-4' onClick={() => setQuantity(quantity + 1)} >
            <IoMdAdd size={20} />
        </button>
    </Flex>
  )
}

export default QuantityCounter