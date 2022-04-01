import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { mirageServer } from '../services/mirage'
import { theme } from '../styles/theme'
import { ReactQueryDevtools } from 'react-query/devtools'
import { PaginationContextProvider } from '../contexts/PaginationContext'

const queryClient = new QueryClient()

if(process.env.NODE_ENV === "development") {
  mirageServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <PaginationContextProvider>
          <Component {...pageProps} />
        </PaginationContextProvider>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default MyApp