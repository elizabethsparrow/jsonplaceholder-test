<script setup>
defineProps({
  post: {
    type: Object
  },
  user: {
    type: Object
  }
})
</script>

<template>
  <div class="post-card" v-if="post">
    <div class="post-card__container">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <p v-if="user">
        {{ user.name }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-card {
  @apply bg-white text-black rounded p-3;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;
    height: 100%;
  }
}
</style>
