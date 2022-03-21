import { AppProps } from 'next/app'
import { SessionProvider as NextAuthProvider } from 'next-auth/react'
import '../styles/globals.scss'
import { Layout } from './../components/Layout';
import { PrismicProvider } from '@prismicio/react';
import { repositoryName } from '../services/prismic';
import Link from 'next/link';
import { PrismicPreview } from '@prismicio/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <PrismicProvider
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>
              {children}
            </a>
          </Link>
        )}
      >
        <Layout>
          <PrismicPreview repositoryName={repositoryName}>
            <Component {...pageProps} />
          </PrismicPreview>
        </Layout>
      </PrismicProvider>
    </NextAuthProvider>
  )
}

export default MyApp    