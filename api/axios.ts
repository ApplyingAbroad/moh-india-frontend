import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL:
    'https://6fa8ws6v.api.sanity.io/v1/graphql/production/default?query={allService{title%20description}}', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 5000, // request timeout
})

// export this
export default service
