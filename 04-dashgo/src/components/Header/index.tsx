import { Flex, IconButton, Icon, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarContext } from "../../contexts/SidebarContext";
import { Logo } from "./Logo";
import { NotificationsBox } from "./NotificationsBox";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header(){
    const {onOpen} = useSidebarContext()

    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
          as='header'
          w='100%'
          maxW={1480}
          h='20'
          mx='auto'
          mt='4'
          px='6'
          align='center'
        >
            <IconButton
              icon={<Icon as={RiMenuLine}/>}
              aria-label="Abrir menu de navegação"
              fontSize="24"
              variant="unstyled"
              onClick={onOpen}
              mr="2"
            />
            <Logo/>
            <SearchBox showBox={isWideScreen}/>
            <Flex
                ml='auto'
                align='center'
            >
                <NotificationsBox/>
                <Profile showProfileInfo={isWideScreen}/>
            </Flex>
        </Flex>
    )
}