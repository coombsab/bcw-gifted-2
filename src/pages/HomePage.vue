<template>
 <div class="container-fluid home pt-5">
  <!-- SECTION Gifts go here -->
  <div class="row pt-4">
    <!-- <span class="text-visible">Hello, World!</span> -->
    <GiftCard v-for="g in gifts" :gift="g"/>
  </div>
</div>
<OffCanvas/>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";

export default {
  name: 'Home',
  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts()
      }
      catch(error) {
        console.error('[getGifts]', error)
        Pop.error(error.message)
      }
    }
    getGifts()

    return {
      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss">
  .home {
    background-image: url("https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80");
    background-size: cover;
    background-position: center;
    height: 100vh;
  }
  .horizontal-bar {
    width: 80%;
    height: 0.25rem;
    background-color: purple;
  }

  .text-visible {
    color: antiquewhite;
    text-shadow: 1px 1px rgba(128, 0, 128, 0.842), 0px 0px 4px rgba(255, 255, 0, 0.774);
  }

</style>
