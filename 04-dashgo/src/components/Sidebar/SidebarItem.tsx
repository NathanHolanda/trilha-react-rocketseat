import { Icon, Text, Link, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface SidebarItemProps extends ChakraLinkProps{
    icon: IconType
    name: string
}

export function SidebarItem({icon, name, ...rest}: SidebarItemProps){
    return (
        <Link display='flex' alignItems='center' {...rest}>
            <Icon as={icon} fontSize='20' />
            <Text ml='4' fontWeight='medium'>{name}</Text>
        </Link>
    )
}