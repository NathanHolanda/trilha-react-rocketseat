import { Box, HStack, Stack } from "@chakra-ui/react";
import { usePagination } from "../../contexts/PaginationContext";
import { Button } from "./Button";
import { CurrentPageSiblings } from "./CurrentPageSiblings";

interface PaginationProps{
    rowDirection: boolean
    currentPage?: number
    itemsPerPage?: number
    totalItems: number
}

export function Pagination({
    rowDirection,
    currentPage = 1,
    itemsPerPage = 10,
    totalItems
}: PaginationProps) {

    const {onPageChange} = usePagination()
    
    const siblings = 2
    const lastPage = Math.floor(totalItems / itemsPerPage)

    if(currentPage < 0) currentPage = 1
    if(currentPage > lastPage) currentPage = lastPage

    const lastPageItem = itemsPerPage * currentPage
    const firstPageItem = lastPageItem - itemsPerPage + 1

    return (
        <Stack
          align="center"
          justify='space-between'
          mt='8'
          direction={rowDirection ? 'row' : 'column'}
          spacing='2'
        >
            <Box>
                <strong>{firstPageItem} à {lastPageItem} de {totalItems} resultados</strong>
            </Box>
            <HStack spacing="2">
                { currentPage > 1 && <Button number={1} onPageChange={onPageChange} /> }

                { currentPage > 2 && <CurrentPageSiblings type="left" currentPage={currentPage} quantity={siblings} /> }

                <Button isCurrent number={currentPage} />

                { currentPage < lastPage - 1 && <CurrentPageSiblings type="right" currentPage={currentPage} quantity={siblings} lastPage={lastPage} /> }

                { currentPage < lastPage && <Button number={lastPage} onPageChange={onPageChange} /> }
            </HStack>
        </Stack>
    );
}
