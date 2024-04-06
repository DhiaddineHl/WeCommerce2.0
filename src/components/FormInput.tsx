import { Text } from "@radix-ui/themes"

interface FormInputProps {
    htmlFor: string
    label: string
    id : string
    type : string
}

const FormInput = ({htmlFor, label, id, type} : FormInputProps) => {
  return (
    <div className="mb-4">
        <label htmlFor={htmlFor}>
            <Text weight={'medium'} >{label}</Text>
        </label>
        <div className="mt-2">
            <input
                type={type}
                id={id}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
            />
        </div>
    </div>
  )
}

export default FormInput