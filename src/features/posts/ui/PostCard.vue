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
      <h2 class="post-card__title">{{ post.title }}</h2>
      <p class="post-card__body">{{ post.body }}</p>
      <p class="post-card__user-name" v-if="user">
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

  &__title {
    @apply text-blue;
    line-height: 1.5;
  }

  &__body {
    line-height: 1.5;
  }

  &__user-name {
    @apply text-gray-400;
  }
}
</style>
