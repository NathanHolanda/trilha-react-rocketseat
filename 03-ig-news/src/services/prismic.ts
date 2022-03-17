import * as prismic from '@prismicio/client'

interface PrismicClientConfig{
    accessToken: string
}

const repositoryName = 'rocketseat-chapter3-ignews'
const endpoint = prismic.getRepositoryEndpoint(repositoryName)

export function createClient(config: PrismicClientConfig) {
  const client = prismic.createClient(endpoint, {
    ...config,
  })

  return client
}