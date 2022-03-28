import { Input as ChakraInput, FormControl, FormLabel, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps{
    label?: string
    name: string
    type: string
}

const Base: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, name, ...rest }: InputProps, ref) => {
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
                ref={ref}
                size='lg'
            />
        </FormControl>
    )
}

export const Input = forwardRef(Base)