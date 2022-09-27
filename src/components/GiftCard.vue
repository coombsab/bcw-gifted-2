<template>
  <div class="col-md-4 my-3 px-3" v-if="gift.opened">
    <div class="card text-center bg-dark text-visible">
      <div class="card-body p-2 img-card">
        <img :src="gift.url" class="img-fluid rounded" :alt="gift.tag" :title="gift.tag ? gift.tag : 'No Tag'">
        <i class="mdi mdi-delete selectable delete on-hover" @click="removeGift()"></i>
      </div>
    </div>
  </div>
  <div class="col-md-4 my-3 px-3" v-else>
    <div class="card open-gift-img">
    <!-- TODO make onclick to toggle opened and send edit to server -->
      <div class="card-body open-card selectable d-flex justify-content-center align-items-center" @click="openGift()">
        <p>{{gift.tag}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Gift } from "../models/Gift.js";
import { giftsService } from "../services/GiftsService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    gift: { type: Gift, required: true }
  },

  setup(props) {
    
    return {
      async removeGift() {
        try {
          const yes = await Pop.confirm("Delete this GIF?")
          if(!yes) {
            return
          }
          await giftsService.removeGift(props.gift.id)
        }
        catch(error) {
          console.error('[removeGift]', error)
          Pop.error(error.message)
        }
      },
      async openGift() {
        try {
          await giftsService.openGift(props.gift.id)
        }
        catch(error) {
          console.error('[openGift]', error)
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .img-card {
    position: relative;
    height: 52.5vh;
  }

  .delete {
    position: absolute;
    top: 2%;
    right: 2%;
  }

  .text-visible {
    color: antiquewhite;
    text-shadow: 1px 1px rgba(128, 0, 128, 0.842), 0px 0px 4px rgba(255, 255, 0, 0.774);
  }

  .open-card {
    background-color: rgba(0, 0, 0, 0.288);
    color: antiquewhite;
    text-shadow: 3px 3px rgba(128, 0, 128, 0.842), 0px 0px 5px rgba(255, 255, 0, 0.774);
    font-weight: 900;
    font-size: 24px;
    border-radius: 2rem;
  }

  .open-card:hover {
    background-color: rgba(128, 0, 128, 0.151);
  }

  .open-gift-img {
    background-image: url('https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80');
    background-size: cover;
    background-position: center;
    min-height: 52.5vh;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 6rem;
    padding-bottom: 6rem;
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