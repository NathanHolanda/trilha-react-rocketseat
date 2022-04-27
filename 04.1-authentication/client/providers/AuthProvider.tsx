import { createContext, ReactNode } from "react"
import { api } from "../services/api"

type SignInFormData = {
    email: string
    password: string
}

type AuthContextData = {
    signIn(credentials: SignInFormData): Promise<void>
    isAuthenticated: boolean
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({children}: AuthProviderProps){
    const isAuthenticated = false

    async function signIn({ email, password }: SignInFormData){
        const response = await api.post("sessions", {
            email,
            password
        })

        console.log(response.data)
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            signIn
        }}>
            { children }
        </AuthContext.Provider>
    )
}