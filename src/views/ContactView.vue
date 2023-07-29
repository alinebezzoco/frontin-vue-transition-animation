<script setup>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'

const showModal = ref(false)
// const animated = ref(false)

// watch(animated, () => {
//   setTimeout(() => {
//     animated.value = false
//   }, 1500)
// })
</script>
<template>
  <div class="contact__container">
    <h2>Contact me!</h2>

    <form action="javascript:void(0);">
      <input type="text" placeholder="Name" name="name" required />
      <input type="email" placeholder="Email" name="email" required />
      <textarea placeholder="Message" name="message" required />
      <button @click="showModal = true" type="submit">Send a message</button>
      <!-- <Transition enter-active-class="animate__animated animate__fadeIn">
        <h1 v-show="animated">Animated!</h1>
      </Transition> -->
    </form>

    <Teleport to="body">
      <modal :show="showModal" @close="showModal = false"> </modal>
    </Teleport>
  </div>
</template>

<style scoped>
form {
  margin-top: 1rem;
}
input,
textarea {
  background: transparent;
  padding: 1rem;
  width: 100%;
  border: 1px solid var(--vt-c-white);
  border-radius: 10px;
  box-shadow: none;
  color: var(--vt-c-white);
  margin-bottom: 1rem;
  display: block;
}

input:focus-visible,
textarea:focus-visible {
  outline: hsla(160, 100%, 37%, 1) auto 1px;
}

button {
  background: hsla(160, 100%, 37%, 1);
  border-radius: 10px;
  color: var(--vt-c-white);
  border-style: none;
  padding: 1rem;
}
</style>
