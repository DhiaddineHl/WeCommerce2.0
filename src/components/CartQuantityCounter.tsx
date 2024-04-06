import { Flex } from '@radix-ui/themes'
import React from 'react'

const CartQuantityCounter = () => {
  return (
    <Flex direction={'column'} align={'center'}>
        <button className='bg-black rounded-full' >-</button>
        <span>1</span>
        <button className='bg-black rounded-full'>+</button>
    </Flex>
  )
}

export default CartQuantityCounter