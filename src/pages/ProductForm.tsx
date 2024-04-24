import { Heading, Button } from '@radix-ui/themes'
import FormInput from '../components/FormInput'
import ImageUploadArea from '../components/ImageUploadArea'


const ProductForm = () => {

  return (
    <div className='m-8'>
        <Heading as="h2" size={'5'} mb={'4'}>Enter the product details</Heading>
        <form className='m-8'>
            <div className='sm:flex gap-8 items-center'>
                <div  className='sm:w-1/3'>
                    <FormInput
                        htmlFor="name"
                        label="Name"
                        id="name"
                        type="text"
                    />
                    <FormInput
                        htmlFor="description"
                        label="Description"
                        id="description"
                        type="text"
                    />
                    <FormInput
                        htmlFor="price"
                        label="Price"
                        id="price"
                        type="number"
                    />
                </div>
                <div className='sm:w-1/3' >
                    <ImageUploadArea />
                </div>
            </div>
            <Button mt={'2'} color="gray" variant="solid" highContrast>
                Save product
            </Button>
        </form>
    </div>
  )
}

export default ProductForm