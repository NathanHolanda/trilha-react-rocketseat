import { Button, Box, HStack, Flex } from "@chakra-ui/react";

export function Pagination() {
    return (
        <Flex align='center' justify='space-between' mt='8'>
            <Box>
                <strong>0 à 10 de 100 resultados</strong>
            </Box>
            <HStack spacing="2">
                <Button
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
                    1
                </Button>
                <Button
                    size="sm"
                    fontSize="xs"
                    width="4"
                    bg="gray.700"
                    _hover={{
                        bg: "gray.500",
                    }}
                >
                    2
                </Button>
                <Button
                    size="sm"
                    fontSize="xs"
                    width="4"
                    bg="gray.700"
                    _hover={{
                        bg: "gray.500",
                    }}
                >
                    3
                </Button>
                <Button
                    size="sm"
                    fontSize="xs"
                    width="4"
                    bg="gray.700"
                    _hover={{
                        bg: "gray.500",
                    }}
                >
                    4
                </Button>
            </HStack>
        </Flex>
    );
}
