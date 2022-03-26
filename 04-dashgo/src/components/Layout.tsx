import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { SidebarContextProvider } from "../contexts/SidebarContext";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface LayoutProps{
    children: ReactNode
}

export function Layout({children}: LayoutProps){
    return (
        <Flex direction='column'>
            <SidebarContextProvider>
                <Header />
                <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
                    <Sidebar />
                    {children}
                </Flex>
            </SidebarContextProvider>
        </Flex>
    )
}