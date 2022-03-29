import { createServer, Factory, Model } from "miragejs"
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
            server.createList("user", 10)
        },

        routes(){
            this.namespace = "api"
            this.timing = 750

            this.get("/users")
            this.post("/users")

            this.namespace = "" 
            this.passthrough()
        }
    })

    return server
}