<script setup>
import { computed, ref } from 'vue'
import { PostCard, findPostsByUserId, getAllPosts } from '../../../entities/post'
import { getUsers, findUsersByName, findUserById } from '../../../entities/user'
import './styles.model.scss'

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
        :user-name="findUserById(users, post.userId)?.name"
      />
      <p v-if="searchedPosts.length <= 0">Результаты не найдены</p>
    </div>
  </div>
</template>

<style lang="scss"></style>
