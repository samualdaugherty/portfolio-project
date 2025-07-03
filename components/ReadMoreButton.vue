<template>
  <div class="read-more-container">
    <button class="read-more-button" @click="$emit('click')">
      Read It Now!
    </button>
    <img src="/read-it-scribble.svg" alt="" class="scribble" />
  </div>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>

<style scoped>
.read-more-container {
  position: relative;
  display: inline-block;
}

.read-more-button {
  position: relative;
  z-index: 2;
  background: none;
  border: none;
  font-family: 'Alumni Sans', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: transform 0.2s ease;
}

.scribble {
  position: absolute;
  bottom: 14px;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 1;
}
</style> 