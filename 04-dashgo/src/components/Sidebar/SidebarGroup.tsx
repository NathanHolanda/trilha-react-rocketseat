import { Box, Text, Stack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { SidebarItem } from "./SidebarItem";

interface SidebarGroupProps{
    name: string
    items: {
        icon: IconType
        name: string
        href: string
    }[]
}

export function SidebarGroup({name, items}: SidebarGroupProps){
    return (
        <Box>
            <Text fontWeight= 'bold' color='gray.400' fontSize='small ' textTransform='uppercase'>{name}</ Text>
            <Stack spacing='4' mt='8' align='stretch'>
                {
                    items.map(item => (
                        <SidebarItem key={item.name} icon={item.icon} name={item.name} href={item.href} />
                    ))
                }
            </Stack>
        </Box>
    )
}