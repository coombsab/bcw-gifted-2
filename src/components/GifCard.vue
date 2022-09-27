<template>
  <div class="col-md-6 my-2">
    <div class="card selectable" @click="setActiveGifUrl()">
      <div class="card-body">
        <img :src="gif.images.downsized.url" :alt="gif.title" class="img-fluid img-offcanvas">
        <p>{{gif.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Gif } from "../models/Gif.js";
import { gifsService } from "../services/GifsService.js";

export default {
  props: {
    gif: { type: Gif, requird: true }
  },
  setup(props) {
    
    return {
      async setActiveGifUrl() {
        try {
          await gifsService.setActiveGifUrl(props.gif.images.original.url)
        }
        catch(error) {
          console.error('[setActiveGif]', error)
          Pop.error(error.message)
        }
      }
      
    }
  }
}
</script>

<style scoped lang="scss">
  .img-offcanvas {
    min-height: auto;
    max-height: auto;
  }
</style>