<template>
  <div class="wrapper projects section" id="portfolio">
    <h2><span>Portfolio</span></h2>
    <p class="descrptn">
      This is the list of projects that I have throughout my years of learning
      how to code.
    </p>
    <div class="card-list">
      <carousel :items-to-show="renderCount" :transition="500">
        <slide v-for="list in lists.projects" :key="list.id">
          <Card
            v-motion-slide-visible-left
            :project="list.name"
            :description="list.description"
            :github="list.github"
            :langs="list.langs"
          />
        </slide>

        <template #addons>
          <Pagination />
          <Navigation />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script setup>
import Card from "./Card.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useProjectStore } from "../store/projectStore.js";
// import { ref } from 'vue'

const lists = useProjectStore();
const renderCount = window.innerWidth <= 500 ? 1 : 3;
console.log(renderCount);
</script>

<style scoped>
.projects {
  margin-bottom: 2rem;
}

h2 {
  font-size: 24px;
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase;
  font-style: bold;
  border-bottom: var(--main-color) 2px solid;
  width: 30%;
}

.projects {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-list {
  overflow: hidden;
  width: 100%;
  margin-top: 20px;
}

/*  Responsive */
@media screen and (max-width: 500px) {
}
</style>
