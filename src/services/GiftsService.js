import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { sandboxServer } from "./AxiosService.js"

class GiftsService {
  async getGifts() {
    const res = await sandboxServer.get("/api/gifts")
    AppState.gifts = res.data.map(gift => new Gift(gift))
  }

  async removeGift(giftId) {
    const gift = AppState.gifts.find(g => g.id === giftId)
    if (!gift) {
      throw new Error("Cannot Remove Gift.  Invalid Gift ID.")
    }
    if (gift.opened) {
      await sandboxServer.delete(`/api/gifts/${giftId}`)
      AppState.gifts = AppState.gifts.filter(g => g.id !== giftId)
    }
  }

  async openGift(giftId) {
    const openedGift = AppState.gifts.find(gift => gift.id === giftId)
    if (!openedGift) {
      throw new Error("Cannot open gift.  Invalid Gift ID.")
    }
    openedGift.opened = !openedGift.opened
    const res = await sandboxServer.put(`/api/gifts/${giftId}`, openedGift)
    openedGift.url = res.data.url
  }

  async addGift(giftData) {
    console.log(giftData)
    const res = sandboxServer.post("/api/gifts", giftData)
    AppState.gifts = [new Gift(res.data), ...AppState.gifts]
  }

}

export const giftsService = new GiftsService()