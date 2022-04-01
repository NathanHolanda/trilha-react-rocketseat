import { createServer, Factory, Model, Response } from "miragejs";
import { faker } from "@faker-js/faker"

interface User{
    id: number
    name: string
    email: string
    created_at: string
}

export function mirageServer(){
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                id(i){
                    return i+1
                },
                name(){ 
                    return faker.name.findName()
                },
                email(){ 
                    return faker.internet.email().toLocaleLowerCase()
                },
                createdAt(){
                    return faker.date.recent()
                }
            })
        },

        seeds(server){
            server.createList("user", 100)
        },

        routes(){
            this.namespace = "api"
            this.timing = 750

            this.get("/users", (schema, request) => {
                const total = schema.all("user").length
                const { page = 1, perPage = 10} = request.queryParams

                const pageStart = (Number(page) - 1) * Number(perPage)
                const pageEnd = Number(pageStart) + Number(perPage)

                const users = schema.all("user").slice(pageStart, pageEnd).models

                return new Response(
                    200,
                    { "x-total-count": String(total) },
                    { users }
                )
            })

            this.get("/users/:id")

            this.post("/users")

            this.namespace = "" 
            this.passthrough()
        }
    })

    return server
}