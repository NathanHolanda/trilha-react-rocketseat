import { Input as ChakraInput, FormControl, FormLabel, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps{
    label?: string
    name: string
    type: string
    error?: FieldError
}

const Base: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, name, error, ...rest }: InputProps, ref) => {
    return (
        <FormControl isInvalid={!!error}>
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
            { !!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
    )
}

export const Input = forwardRef(Base)