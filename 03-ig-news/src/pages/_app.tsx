import {AppProps} from 'next/app'
import {SessionProvider as NextAuthProvider} from 'next-auth/react'
import '../styles/globals.scss'
import { Layout } from './../components/Layout';

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextAuthProvider>
  )
}

export default MyApp
