import { createClient } from 'next-sanity'

const config = {
  projectId: '6fa8ws6v',
  dataset: 'production',
  // useCdn: true,s
  apiVersion: '2021-10-21',
  useCdn: true,
}

const client = createClient(config)

export const previewClient = createClient({
  ...config,
  useCdn: true,
})

export const getClient = (usePreview: any) =>
  usePreview ? previewClient : client

export default client
