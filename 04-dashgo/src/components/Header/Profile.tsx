import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex>
            <Box mr="4" textAlign="right">
                <Text>Nathan Holanda</Text>
                <Text color="gray.300" fontSize="small">
                    nathan.hl.contato@gmail.com
                </Text>
            </Box>
            <Avatar
                size="md"
                name="Nathan Holanda"
                src="https:github.com/nathanholanda.png"
            />
        </Flex>
    );
}
