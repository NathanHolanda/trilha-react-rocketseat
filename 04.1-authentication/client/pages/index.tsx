import type { NextPage } from 'next'
import Head from 'next/head'
import { FormEvent, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const { signIn } = useAuth()

  function handleSubmit(event: FormEvent){
    event.preventDefault()

    signIn({email, password})
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          <fieldset style={{padding: "24px"}}>
            <div>
              <label htmlFor="email">E-mail: </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <br/>
            <div>
              <label htmlFor="password">Senha: </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>
            <br/>
            <div style={{textAlign: 'center'}}>
              <button style={{cursor: 'pointer'}} type="submit">Entrar</button>
            </div>
          </fieldset>
        </form>
      </main>
    </div>
  )
}

export default Home
