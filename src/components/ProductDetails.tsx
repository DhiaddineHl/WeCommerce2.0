import { Box, Text, Strong, Flex, Button, Avatar, Heading } from "@radix-ui/themes"
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import QuantityCounter from "./QuantityCounter";
import { Product } from "../hooks/models";

interface ProductDetailsProps {
    product : Product;
}

const ProductDetails = ({product} : ProductDetailsProps) => {
  return (
    <Flex
      direction="row"
      justify="center"
      align="center"
      gap="6"
      py="6"
      className="max-w-6xl mx-auto px-4"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105">
        <img
          src={"/images/" + product.imageName}
          alt="Bold typography"
          className="h-[500px] w-auto object-cover bg-gray-200"
        />
      </div>

      {/* Product Details */}
      <Flex direction="column" gap="4" className="w-1/2">
        <Heading as="h2" size="8" className="font-bold text-gray-900">
          {product.name}
        </Heading>

        <Heading size="7" className="text-gray-700">${product.price}</Heading>

        <Text size="4" className="text-gray-600 leading-relaxed max-w-prose">
          {product.description}
        </Text>

        {/* Action Buttons */}
        <Flex direction="row" gap="4" align="center">
          <Button
            variant="solid"
            size="4"
            color="gray"
            highContrast
            radius="full"
            className="flex items-center gap-2 px-6 py-3 text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300"
          >
            <MdOutlineShoppingCart size={20} />
            Add to Cart
          </Button>
          <QuantityCounter itemId={product.id} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductDetails;

