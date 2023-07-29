<script setup>
const props = defineProps({
  show: Boolean
})
</script>
<template>
  <Transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <!-- :duration="{ enter: 10, leave: 200 }" -->

    <div v-if="props.show" class="modal">
      <div class="modal__container">
        <div class="modal__body">
          <slot name="body">Message sent!</slot>
        </div>

        <div class="modal__footer">
          <slot name="footer">
            <button class="modal-default-button" @click="$emit('close')">OK</button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: opacity 0.3s ease;
}

.modal__container {
  width: 250px;
  margin: auto;
  padding: 1.5rem;
  background-color: var(--vt-c-white);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal__body {
  margin: 1rem 0;
  color: #000;
}
</style>
