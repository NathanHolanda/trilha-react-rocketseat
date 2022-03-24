import { Icon, Text, Link, IconProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface SidebarItemProps{
    icon: IconType
    name: string
}

export function SidebarItem({icon, name}: SidebarItemProps){
    return (
        <Link display='flex' alignItems='center'>
            <Icon as={icon} fontSize='20' />
            <Text ml='4' fontWeight='medium'>{name}</Text>
        </Link>
    )
}