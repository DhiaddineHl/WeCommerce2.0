import { FiLogIn } from 'react-icons/fi';
import { Product } from '../hooks/models';
import { Button, Flex, Heading, Text } from '@radix-ui/themes';

interface FeaturedListProps {
    title: string;
    products: Product[];
}

const FeaturedList = () => {
    return (
        <Flex direction="column" gap="4" className="p-6 rounded-xl ">
            <Flex direction="row" justify="between" align="center">
                <Heading as="h2" size="5" className="text-gray-900 font-semibold">
                    Title
                </Heading>
                <Button variant="surface" >
                    <Text weight={'medium'} >View all</Text>
                    <FiLogIn />
                </Button>
            </Flex>
            <Flex direction="column" gap="4">
                <FeaturedListItem />
                <FeaturedListItem />
                <FeaturedListItem />
            </Flex>
        </Flex>
    );
};

export default FeaturedList;

const FeaturedListItem = () => {
    return (
        <Flex 
            gap="4" 
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all cursor-pointer"
        >
            {/* Product Image */}
            <img 
                src={"https://via.placeholder.com/150"} 
                alt={"Product Image"} 
                className="w-24 h-24 object-cover rounded-md bg-gray-200"
            />

            {/* Product Details */}
            <Flex direction="column" gap="2" className="flex-1">
                <Text size="4" className="text-gray-600 leading-relaxed max-w-prose">
                    Product Name
                </Text>
                <Text className="text-gray-600 text-sm">⭐ 4 / 5</Text>
                <Text className="text-indigo-600 font-semibold text-lg">$500</Text>
            </Flex>
        </Flex>
    );
};
