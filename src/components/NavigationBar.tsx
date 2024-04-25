import { Flex, Text, Badge, Button } from "@radix-ui/themes"
import { FaShop } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface NavigationBarProps {
  onOpenCart : () => void
}

const NavigationBar = ({onOpenCart} : NavigationBarProps) => {

  const {cartQuantity} = useShoppingCart();
  

  return (
    <Flex direction="row" justify={'between'} align={'center'} className="p-4 shadow-md" >
        <FaShop size={'40'} />
      <Flex gap={'6'}>
        <Text weight={'medium'} >Marketplace</Text>
        <Text weight={'medium'} >My Products</Text>
      </Flex>
      <Flex gap={'6'}>
        <Flex gap={'2'} align={'center'} onClick={onOpenCart}>
        <MdOutlineShoppingCart size={'30'}  />
        <Badge color="blue">
          <Text weight={'medium'}>{cartQuantity}</Text>
        </Badge>
        </Flex>
        <Button variant="surface" onClick={() => window.location.href = "http://localhost:5173/login-business"} >
          <Text weight={'medium'} >Login</Text>
          <FiLogIn />
          </Button>
      </Flex>
    </Flex>
  )
}

export default NavigationBar