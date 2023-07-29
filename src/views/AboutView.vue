<script setup>
import { ref } from 'vue'
import gsap from 'gsap'
import { shuffle as _shuffle } from 'lodash'

const lists = ref([
  {
    title: 'tatudobem-api',
    description:
      'API desenvolvida em Node.js que lista todas as universidades e instituições que oferecem atendimento psicológico gratuito no Brasil'
  },
  {
    title: 'theblackwomenhistory-api',
    description: 'Mulheres negras da história" é uma REST API usando o Firebase'
  },
  {
    title: 'ibge-search-name',
    description:
      'A React app that checks if your name has been or is popular for some time in Brazil according to data extracted from IBGE API'
  },
  { title: 'mydodo', description: 'Create a todo list in your Google Chrome browser' }
])

const shuffle = () => {
  lists.value = _shuffle(lists.value)
}

const beforeEnter = (el) => {
  el.style.opacity = 0
  el.style.transform = 'translateY(100px)'
}

const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    onComplete: done,
    delay: el.dataset.index * 0.2
  })
}
</script>
<template>
  <div class="about__container">
    <div class="about__profile">
      <h1>About me</h1>
      <p>Front-end dev @ Pismo, mentor and instructor of EuProgrAmo FE II course at @programaria</p>
    </div>
    <div class="about__projects">
      <h2>Check my last projects</h2>
      <!-- <button @click="shuffle">Shuffle items</button> -->

      <!-- with hooks (js) -->
      <transition-group appear tag="ul" @before-enter="beforeEnter" @enter="enter">
        <li v-for="(list, index) in lists" :key="list.title" :data-index="index">
          <p class="title">{{ list.title }}</p>
          <p class="description">{{ list.description }}</p>
        </li>
      </transition-group>
      <!-- without hooks (only css) -->
      <!-- <transition-group name="list" tag="ul">
        <li v-for="(list, index) in lists" :key="list.title" :data-index="index">
          <p class="title">{{ list.title }}</p>
          <p class="description">{{ list.description }}</p>
        </li>
      </transition-group> -->
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about__container {
    display: flex;
    flex-direction: column;
  }
  .about__profile {
    margin: 1.5rem auto;
  }
  .about__projects button {
    background: hsla(160, 100%, 37%, 1);
    border-radius: 10px;
    color: var(--vt-c-white);
    border-style: none;
    padding: 0.5rem;
  }
  .about__projects ul {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin: 1rem auto;
  }
  .about__projects li {
    list-style-type: none;
    border: 1px solid var(--vt-c-white);
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
