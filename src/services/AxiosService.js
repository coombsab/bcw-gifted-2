import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const sandboxServer = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/',
  timeout: 3000
})

export const giphyServer = Axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/search',
  timout: 3000,
  params: { api_key: 'PKCC7utEVmo55VxTHcdC6soAgftkKXMU' }
})