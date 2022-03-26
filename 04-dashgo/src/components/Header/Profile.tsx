import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps{
    showProfileInfo: boolean
}

export function Profile({showProfileInfo}: ProfileProps) {
    return (
        <Flex>
            {
                showProfileInfo &&
                <Box mr="4" textAlign="right">
                    <Text>Nathan Holanda</Text>
                    <Text color="gray.300" fontSize="small">
                        nathan.hl.contato@gmail.com
                    </Text>
                </Box>
            }
            <Avatar
                size="md"
                name="Nathan Holanda"
                src="https:github.com/nathanholanda.png"
            />
        </Flex>
    );
}
