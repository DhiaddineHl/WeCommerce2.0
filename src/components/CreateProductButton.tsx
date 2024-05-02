import { Button } from '@radix-ui/themes'
import { MdAddBusiness } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const CreateProductButton = () => {

    const navigate = useNavigate();

  return (
    <Button
     onClick={() => navigate('/create-product')}
     type='submit' mx={'3'} mt={'3'} color="gray" variant="solid" highContrast>
       <MdAddBusiness size={'20'} /> New product
    </Button>
  )
}

export default CreateProductButton