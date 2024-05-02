import { Heading, Button } from '@radix-ui/themes'
import FormInput from '../components/FormInput'
import ImageUploadArea from '../components/ImageUploadArea'
import { Formik } from 'formik'
import { createClient } from '@supabase/supabase-js'
import { ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import useProducts from '../hooks/useProducts'



const supabase = createClient(
    import.meta.env.VITE_PROJECT_URL,
    import.meta.env.VITE_PROJECT_API_KEY
  )

interface ProductFormProps {
    name : string
    description : string
    price : number
}


const ProductForm = () => {

    const [image_url, setImageUrl] = useState<string>('');
    const createProduct = useProducts.createProduct();

    const uploadImage = async (e : ChangeEvent) => {

        const file = (e.target as HTMLInputElement).files?.[0];
        const fileName =  uuidv4();
        const {error, data } = await supabase.storage
          .from('wecommerce-products-images')
          .upload(fileName, file as File);
          
        if (error) {
          console.error('Error uploading image', error);
        }
        console.log('Image uploaded', data);
    
        const image_url  = supabase.storage.from('wecommerce-products-images').getPublicUrl(fileName).data.publicUrl;
        setImageUrl(image_url);
    
      }

    const initialValues : ProductFormProps = {
        name: '',
        description: '',
        price: 0,
    }

  return (
    <div className='m-8'>
        <Heading as="h2" size={'5'} mb={'4'}>Enter the product details</Heading>
        <Formik
            initialValues={initialValues}
            onSubmit={(values): void => {
                console.log({image_url : image_url, ...values})
                createProduct.mutate({image_url : image_url, ...values});
            }}
        >
            {({handleSubmit}) => (
                    <form className='m-8' onSubmit={handleSubmit} >
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
                                <ImageUploadArea onUpload={uploadImage} />
                            </div>
                        </div>
                        <Button type='submit' mt={'2'} color="gray" variant="solid" highContrast>
                            Save product
                        </Button>
                    </form>
            )}

        </Formik>

    </div>
  )
}

export default ProductForm