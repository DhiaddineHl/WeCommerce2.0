import { Flex, Text, Badge, Button } from "@radix-ui/themes"
import { FaShop } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import { useState } from "react";

interface NavigationBarProps {
  onOpenCart : () => void
}

const NavigationBar = ({onOpenCart} : NavigationBarProps) => {

  const cookies = new Cookies();

  const {cartQuantity} = useShoppingCart();


  const token = cookies.get('wecommerce_access_token');
   const [access_token, setAccessToken] = useState<string | null>(token);
  

  return (
    <Flex direction="row" justify={'between'} align={'center'} className="p-4 shadow-md" >
        <FaShop size={'40'} />
        {
          access_token && 
          <Flex gap={'6'}>
            <Link to={"/"}>
              <Text weight={'medium'} >Marketplace</Text>
            </Link>
            <Link to={"/my-products"}>
              <Text weight={'medium'} >My Products</Text>
            </Link>
          </Flex>
        }
      <Flex gap={'6'}>
        <Flex gap={'2'} align={'center'} onClick={onOpenCart}>
        <MdOutlineShoppingCart size={'30'}  />
        <Badge color="blue">
          <Text weight={'medium'}>{cartQuantity}</Text>
        </Badge>
        </Flex>
        {!access_token
         ?
        <Button variant="surface" onClick={() => window.location.href = "http://localhost:3001/login-business"} >
          <Text weight={'medium'} >Login</Text>
          <FiLogIn />
          </Button>
          :
          <Button variant="surface" onClick={() => {
            cookies.remove('wecommerce_access_token', {sameSite: "none", secure:true})
            setAccessToken(null)
          }} >
          <Text weight={'medium'} >Logout</Text>
          <FiLogIn />
          </Button>
        }
      </Flex>
    </Flex>
  )
}

export default NavigationBar