import {
    Button as ChakraButton,
    ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
    isCurrent?: boolean;
    number: number;
}

export function Button({ isCurrent = false, number }: ButtonProps) {
    if (isCurrent) {
        return (
            <ChakraButton
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bgColor: "pink.500",
                    cursor: "default",
                }}
            >
                {number}
            </ChakraButton>
        );
    }

    return (
        <ChakraButton
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.700"
            _hover={{
                bg: "gray.500",
            }}
        >
            {number}
        </ChakraButton>
    );
}
