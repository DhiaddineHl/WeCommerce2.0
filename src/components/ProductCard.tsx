import { Box, Text, Strong, Flex, Button, Avatar } from "@radix-ui/themes"
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import QuantityCounter from "./QuantityCounter";
import { useState } from "react";


interface ProductProps {
    id : number;
    name : string;
    description : string;
    price : number;
    image_url : string;
    rating : number;
}

function ProductCard({id, name, description, price, image_url, rating} : ProductProps) {

    const [quantityCounterVisible, setQuantityCounterVisible] = useState(false);

return (
    <Box id={id.toString()}>
        <figure className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
            src={image_url}
            alt="Bold typography"
            className="w-full h-full object-cover rounded-lg"
            />
        </figure>
        <Flex direction="column" gap="2" py="2">
            <Flex justify={'between'}>
                    <Strong>{name}</Strong>
                    <Strong>${price}</Strong>
            </Flex>
            <Text size={'2'} >{description}</Text>
            <Flex justify={'between'} align={'center'}>
                <Flex>
                    {Array.from({ length: rating }, (_, index) => (
                        <FaStar key={index} size={'20'} />
                    ))}
                </Flex>
            </Flex>
            <Flex direction={'row'} gap={'2'} align={'center'} >
                <Button variant="outline" size={'3'} color="gray" highContrast radius="full" onClick={
                    () => setQuantityCounterVisible(true)
                
                }>
                        Add to cart
                        <MdOutlineShoppingCart size={'20'} />
                </Button>
                { quantityCounterVisible && <QuantityCounter itemId={id} />}
            </Flex>
        </Flex>
    </Box>

)
}

export default ProductCard