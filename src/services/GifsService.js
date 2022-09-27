import { AppState } from "../AppState.js"
import { Gif } from "../models/Gif.js"
import { giphyServer } from "./AxiosService.js"

class GifsService {
  async setActiveGifsUrl(url) {
    AppState.activeGifUrl = url
  }

  async getGifs(search) {
    const res = await giphyServer.get("", {
      params: {
        limit: 10,
        q: search
      }
    })

    AppState.gifs = res.data.data.map(rawData => new Gif(rawData))
  }
}

export const gifsService = new GifsService()