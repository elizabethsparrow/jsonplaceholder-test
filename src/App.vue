<script setup>
import { PostsComponent } from './widgets/posts'
</script>

<template>
  <div class="app__container">
    <posts-component />
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: fit-content;
  min-height: 100%;
  background: $blue;
}
.app__container {
  margin: 0 auto;
  width: 80%;
  height: 100%;
  padding: 24px 0;
}
</style>
