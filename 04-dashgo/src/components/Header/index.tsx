import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import {RiNotificationLine, RiSearchLine, RiUserAddLine} from 'react-icons/ri'
import { Logo } from "./Logo";
import { NotificationsBox } from "./NotificationsBox";
import { SearchBox } from "./SearchBox";

export function Header(){
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
            <Logo/>
            <SearchBox/>
            <Flex
                ml='auto'
                align='center'
            >
                <NotificationsBox/>
                <Flex>
                    <Box mr='4' textAlign='right'>
                        <Text>Nathan Holanda</Text>
                        <Text color='gray.300' fontSize='small'>nathan.hl.contato@gmail.com</Text>
                    </Box>
                    <Avatar size='md' name='Nathan Holanda' src='https:github.com/nathanholanda.png'/>
                </Flex>
            </Flex>
        </Flex>
    )
}