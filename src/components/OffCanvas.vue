<template>
  
  <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDark"
  aria-labelledby="offcanvasDarkLabel">
  <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasDarkLabel">Gifted</h5>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body text-dark d-flex flex-column">
        <GiftForm/>
      <div class="horizontal-bar my-5 align-self-center"></div>
        <!-- <GifForm/> -->
      <div class="d-flex justify-content-between align-items-center">
        <!-- TODO Previous -->
        <button class="btn" onclick="" title="Previous Page"><i class="mdi mdi-arrow-left-thick fs-3 text-light"></i></button>
        <h4 class="text-light"><span id="current-page">1</span> / <span id="total-pages">100</span></h4>
        <!-- TODO Next -->
        <button class="btn" onclick="" title="Next Page"><i class="mdi mdi-arrow-right-thick fs-3 text-light"></i></button>
      </div>
      <div class="container-fluid">
        <!-- SECTION gifs go here -->
        <div class="row">
          <!-- <GifCard v-for="g in gifs" :gif="g"/> -->
        </div>
      </div>
    </div>
  </div>
  
  <i class="mdi mdi-plus fs-3 selectable text-visible ms-3 mt-3 off-canvas-icon" onclick="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDark" aria-controls="offcanvasDark"></i>
</template>

<script>
import { AppState } from "../AppState.js"
import { computed } from '@vue/reactivity';

export default {
  setup() {
    
    return {
      gifs: computed(() => AppState.gifs)
    }
  }
}
</script>

<style scoped lang="scss">
  .off-canvas-icon {
    position: fixed;
    top: 0.5%;
    left: 0.5%;
  }
  .text-visible {
    color: antiquewhite;
    text-shadow: 1px 1px rgba(128, 0, 128, 0.842), 0px 0px 4px rgba(255, 255, 0, 0.774);
  }
</style>