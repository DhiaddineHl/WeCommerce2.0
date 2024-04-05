import { Box, Card, Inset, Text, Strong, Flex, Button } from "@radix-ui/themes"
import { MdOutlineShoppingCart } from "react-icons/md";
import watch from '../assets/images/watch.jpg'
import shoe from '../assets/images/Shoe.jpg'


function ProductCard() {
return (
    <Box maxWidth={'20%'} className="m-12">
        <figure className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
            src={watch}
            alt="Bold typography"
            className="w-full h-full object-cover rounded-lg"
            />
        </figure>
        <Flex direction="column" gap="2" py="2">
            <Flex justify={'between'}>
                    <Strong>Product Name</Strong>
                    <Strong>$price</Strong>
            </Flex>
            <Text size={'2'} >Description of the product</Text>
            <Text>Rating</Text>
            <Button variant="outline" size={'2'} color="gray" highContrast radius="full">
                    Add to cart
                    <MdOutlineShoppingCart size={'20'} />
            </Button>
        </Flex>
    </Box>

)
}

export default ProductCard