<script setup>
import { computed, ref } from 'vue'
import { getAllPosts, getUsers } from '@/shared/api'
import { PostCard } from '@/features/posts'
import { findPostsByUserId, findUsersByName, findUserById } from '../model'

const posts = ref([]),
  users = ref([]),
  searchInputValue = ref(null),
  searchedPosts = computed(() =>
    searchInputValue.value
      ? findPostsByUserId(
          posts.value,
          searchedUsers.value?.map((el) => el.id)
        )
      : posts.value
  ),
  searchedUsers = computed(() => findUsersByName(users.value, searchInputValue.value))

const onLoadComponent = async () => {
  try {
    posts.value = await getAllPosts().then((response) => response.data)
    users.value = await getUsers().then((response) => response.data)
  } catch (error) {
    throw error
  }
}

onLoadComponent()
</script>

<template>
  <div class="posts-component">
    <input
      type="text"
      v-model="searchInputValue"
      class="posts-component__search-input"
      placeholder="Поиск"
    />
    <div class="posts-component__container">
      <post-card
        v-for="post in searchedPosts"
        :post="post"
        :user="findUserById(users, post.userId)"
      />
      <p v-if="searchedPosts.length <= 0">Результаты не найдены</p>
    </div>
  </div>
</template>

<style lang="scss">
.posts-component {
  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 425px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__search-input {
    @apply mb-2;
  }
}
</style>
