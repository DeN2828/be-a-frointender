<!-- PilotModal.vue -->
<template>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h3>Pilots</h3>
        <ul>
          <li v-for="pilot in pilots" :key="pilot.url">{{ pilot.name }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pilots: Array,
      showModal: Boolean,
    },
    methods: {
      closeModal() {
        this.$emit('close-modal');
      },
    },
  };
  </script>
  