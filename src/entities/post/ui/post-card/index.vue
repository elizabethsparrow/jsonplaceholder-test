<script setup>
import './styles.model.scss'

defineProps({
  post: {
    type: Object
  },
  userName: {
    type: String
  }
})
</script>

<template>
  <div class="post-card" v-if="post">
    <div class="post-card__container">
      <h2 class="post-card__title">{{ post.title }}</h2>
      <p class="post-card__body">{{ post.body }}</p>
      <p class="post-card__user-name" v-if="userName">
        {{ userName }}
      </p>
    </div>
  </div>
</template>
