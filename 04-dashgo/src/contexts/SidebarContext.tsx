import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { createContext, ReactNode, useContext } from 'react';

interface SidebarContextProps{
    children: ReactNode
}

const Context = createContext({} as UseDisclosureReturn)

export function SidebarContextProvider({children}: SidebarContextProps){
    const disclosure = useDisclosure()

    return (
        <Context.Provider value={disclosure}>
            {children}
        </Context.Provider>
    )
}

export const useSidebarContext = () => useContext(Context)