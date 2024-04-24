import { PhotoIcon } from '@heroicons/react/24/solid'
import { Text } from '@radix-ui/themes'
import { ChangeEvent } from 'react'
import { createClient } from '@supabase/supabase-js'


const supabase = createClient(import.meta.env.VITE_PROJECT_URL,import.meta.env.VITE_PROJECT_API_KEY)

const ImageUploadArea = () => {

  const uploadImage = async (e : ChangeEvent) => {
    console.log('Uploading image');
    const file = (e.target as HTMLInputElement).files?.[0];
    const fileName = 'file-1';
    const {error, data } = await supabase.storage
      .from('wecommerce-products-images')
      .upload(fileName, file as File);
      
    if (error) {
      console.error('Error uploading image', error);
    }
    console.log('Image uploaded', data);

    const image_url  = supabase.storage.from('wecommerce-products-images').getPublicUrl(fileName).data.publicUrl;
    console.log('Image URL', image_url);

  }

  return (
    <div className="col-span-full">
    <label htmlFor="cover-photo" className="block leading-6 text-gray-900">
        <Text weight={'medium'} >Upload the product image</Text>
    </label>
    <div className="mt-2 w-full flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
      <div className="text-center">
        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
        <div className="mt-4 flex text-sm leading-6 text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-white text-gray-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
          >
            <Text weight={'medium'} >Upload a file</Text>
            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e) => uploadImage(e)} />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
      </div>
    </div>
  </div>
  )
}

export default ImageUploadArea