import { Icon, Text, Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconType } from "react-icons";

interface SidebarItemProps extends ChakraLinkProps{
    icon: IconType
    name: string
    href: string
}

export function SidebarItem({icon, name, href, ...rest}: SidebarItemProps){
    const router = useRouter()

    const route = router.asPath
    const secondSlashPosition = route.indexOf('/', 1)
    const mainRoute = { name: route, isCurrent: false }

    if( secondSlashPosition > 0 )
        mainRoute.name = route.slice(0, secondSlashPosition)

    if( mainRoute.name === href )
        mainRoute.isCurrent = true

    return (
        <Link href={href} passHref>
            <ChakraLink
                color={mainRoute.isCurrent ? "pink.400" : "gray.50"}
                display="flex"
                alignItems="center"
                {...rest}
            >
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                    {name}
                </Text>
            </ChakraLink>
        </Link>
    );
}