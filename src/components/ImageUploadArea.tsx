import { PhotoIcon } from '@heroicons/react/24/solid'
import { Text } from '@radix-ui/themes'
import { ChangeEvent } from 'react'



interface ImageUploadAreaProps {
  onUpload : (e : ChangeEvent) => void
}


const ImageUploadArea = ({onUpload} : ImageUploadAreaProps) => {

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
            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={onUpload} />
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