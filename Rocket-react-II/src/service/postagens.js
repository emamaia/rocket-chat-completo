import axios from 'axios'

const config = {
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000
}

const protocolo = axios.create(config)

export function getPostagens () {
  const url = '/reprograma/T8-React-II/posts'
  return protocolo.get(url)
}