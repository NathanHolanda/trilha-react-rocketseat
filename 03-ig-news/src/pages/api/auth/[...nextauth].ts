import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { fauna } from "../../../services/fauna"
import {query as q} from 'faunadb'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: 'https://github.com/login/oauth/authorize?scope=read:user+user:email'
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({user}){
        const {email, name} = user

        const getUserByEmail = q.Match(
            q.Index('user_by_email'),
            q.Casefold(user.email)
        )

        fauna.query(
            q.If(
                q.Not(
                    q.Exists(
                        getUserByEmail
                    )
                ),
                q.Create(
                    q.Collection('users'),
                    {
                        data: {
                        email,
                        name
                        }
                    }
                ),
                q.Get(
                    getUserByEmail
                )
            )
        )
        .then(ret => console.log(ret))
        .catch(err => console.log(err))

        return true
    }
  } 
})