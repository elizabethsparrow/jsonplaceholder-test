<script setup>
import { PostsList } from './widgets/posts-list'
</script>

<template>
  <div class="app__container">
    <posts-list class="app__posts" />
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: fit-content;
  min-height: 100%;
  @apply bg-slate-100;
}
.app__container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.app__posts {
  width: 80%;
  height: 100%;
  padding: 24px 0;

  @media (max-width: 768px) {
    width: 90%;
  }
}
</style>
