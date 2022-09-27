<template>
  <form @submit.prevent="handleSubmit()">
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="tag-input" name="tag" placeholder="Enter Tag" required v-model="editable.tag">
      <label for="floatingInput">Enter Tag</label>
    </div>
    <div class="form-floating mb-3">
      <input type="url" class="form-control" id="url-input" name="url" placeholder="Enter GIF URL" required v-model="editable.url">
      <label for="floatingPassword">Enter GIF URL</label>
    </div>
    <div class="text-end">
      <button class="btn btn-outline-light">Submit</button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { giftsService } from "../services/GiftsService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({})
    
    return {
      editable,
      async handleSubmit() {
        try {
          const giftData = {
            tag: editable.value.tag,
            url: editable.value.url,
            opened: false
          }

          await giftsService.addGift(giftData)
        }
        catch(error) {
          console.error('[handleSubmit]', error)
          Pop.error(error.message)
        }
      }      
    }
  }
}
</script>

<style scoped lang="scss">
  
</style>