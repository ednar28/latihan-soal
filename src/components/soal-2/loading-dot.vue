<script setup lang="ts"></script>

<template>
  <span class="dot absolute" />
</template>

<style lang="postcss" scoped>
.dot:after {
  animation: dotty steps(1, end) 1s infinite;
  content: '';
}
</style>
<style>
@keyframes dotty {
  0% {
    content: '';
  }
  25% {
    content: '.';
  }
  50% {
    content: '..';
  }
  75% {
    content: '...';
  }
  100% {
    content: '';
  }
}
</style>
