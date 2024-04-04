import { Flex, Text, Badge, Button } from "@radix-ui/themes"
import { FaShop } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";

const NavigationBar = () => {
  return (
    <Flex direction="row" justify={'between'} align={'center'} className="p-4 shadow-md" >
        <FaShop size={'40'} />
      <Flex gap={'6'}>
        <Text weight={'medium'} >Products</Text>
        <Text weight={'medium'} >Dashboard</Text>
      </Flex>
      <Flex gap={'6'}>
        <Flex gap={'2'} align={'center'}>
        <MdOutlineShoppingCart size={'30'} />
        <Badge color="blue">0</Badge>
        </Flex>
        <Button variant="surface">
          <Text weight={'medium'} >Login</Text>
          <FiLogIn />
          </Button>
      </Flex>
    </Flex>
  )
}

export default NavigationBar