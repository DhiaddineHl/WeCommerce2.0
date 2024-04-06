import React from 'react'
import { Box, Card, Inset, Text, Strong, Flex, Button } from "@radix-ui/themes"
import QuantityCounter from './QuantityCounter'
import CartQuantityCounter from './CartQuantityCounter'

const CartItem = () => {
  return (
    <Flex justify={'between'}>
        <Flex>
            <figure className="aspect-h-1 aspect-w-1 w-1/4 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-20">
                <img
                src={'/images/mini-car.jpg'}
                alt="Bold typography"
                className="w-full h-full object-cover rounded-lg"
                />
            </figure>
            <Flex direction={'column'}>
                <Text className='font-semibold' >Mini car</Text>
                <Text>$100</Text>
                <Text>delete</Text>
            </Flex>
        </Flex>
            <CartQuantityCounter />
            <Text>total</Text>

    </Flex>
  )
}

export default CartItem