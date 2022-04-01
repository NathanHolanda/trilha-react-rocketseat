import { createContext, ReactNode, useContext, useState } from "react";

interface PaginationContextProps{
    onPageChange: (page: number) => void;
    page: number;
}

interface PaginationContextProviderProps{
    children: ReactNode
}

const Context = createContext<PaginationContextProps>({} as PaginationContextProps)

export function PaginationContextProvider({children}: PaginationContextProviderProps){
    const [page, setPage] = useState<number>(1)
    const onPageChange = (page: number) => setPage(page)

    return(
        <Context.Provider value={{page, onPageChange}}>
            {children}
        </Context.Provider>
    )
}

export function usePagination(){
    const pagination = useContext(Context)

    return pagination
}