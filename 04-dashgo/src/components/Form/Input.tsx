import { Input as ChakraInput, FormControl, FormLabel, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps{
    label?: string
    name: string
    type: string
}

export function Input({ label, name, ...rest }: InputProps) {
    return (
        <FormControl>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
            <ChakraInput
                {...rest}
                id={name}
                name={name}
                focusBorderColor='pink.500'
                bgColor='gray.900'
                variant='filled'
                _hover={{
                    bgColor: 'gray.900'
                }}
                size='lg'
            />
        </FormControl>
    )
}