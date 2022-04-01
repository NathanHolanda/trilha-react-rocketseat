import { useQuery } from "react-query"
import { api } from "../services/axios"

interface User{
    id: number
    name: string
    email: string
    createdAt: string
}

interface GetUserResponse{
    total: number
    users: User[]
}

async function getUsers(page: number, perPage: number ): Promise<GetUserResponse> {
    const response = await api.get("users", {
        params: { page, perPage }
    })
    const total = Number(response.headers["x-total-count"])
    const {data} = response

    const users = data.users.map(user => {
        return {
            ...user,
            createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })

    return { total, users }
}

export function useUsers(page: number, perPage: number = 10){
    const query = useQuery(['users', page], () => getUsers(page, perPage))

    return query
}