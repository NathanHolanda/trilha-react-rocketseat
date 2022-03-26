import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react"
import { useSidebarContext } from "../../contexts/SidebarContext"
import { SidebarContent } from "./SidebarContent"

export function Sidebar() {
    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true,
    })

    if (isWideScreen) {
        return (
            <Box as="aside" w="64" mr="8">
                <SidebarContent />
            </Box>
        )
    }

    const {onClose, isOpen} = useSidebarContext()

    return (
        <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent bg="gray.800">
                    <DrawerCloseButton mt="6" />
                    <DrawerHeader />
                    <DrawerBody>
                        <SidebarContent />
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}
