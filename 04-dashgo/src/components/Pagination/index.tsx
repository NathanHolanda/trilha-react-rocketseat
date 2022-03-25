import { HStack, Flex } from "@chakra-ui/react";
import { Button } from "./Button";
import { Results } from "./Results";

export function Pagination() {
    return (
        <Flex align='center' justify='space-between' mt='8'>
            <Results />
            <HStack spacing="2">
                <Button isCurrent number={1} />
                <Button number={2} />
                <Button number={3} />
                <Button number={4} />
            </HStack>
        </Flex>
    );
}
