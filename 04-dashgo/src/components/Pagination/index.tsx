import { HStack, Stack } from "@chakra-ui/react";
import { Button } from "./Button";
import { Results } from "./Results";

interface PaginationProps{
    rowDirection: boolean
}

export function Pagination({rowDirection}: PaginationProps) {
    return (
        <Stack
          align="center"
          justify='space-between'
          mt='8'
          direction={rowDirection ? 'row' : 'column'}
          spacing='2'
        >
            <Results />
            <HStack spacing="2">
                <Button isCurrent number={1} />
                <Button number={2} />
                <Button number={3} />
                <Button number={4} />
            </HStack>
        </Stack>
    );
}
