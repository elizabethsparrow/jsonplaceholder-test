<script setup>
import { computed, ref } from 'vue'
import { PostCard, findPostByUserName, getAllPosts } from '../../../entities/post'
import { getUsers } from '../../../entities/user'
import './styles.model.scss'

const posts = ref([]),
  searchInputValue = ref(null),
  searchedPosts = computed(() =>
    searchInputValue.value ? findPostByUserName(posts.value, searchInputValue.value) : posts.value
  )

const onLoadComponent = async () => {
  const users = await getUsers().then((response) => response.data)
  posts.value = await getAllPosts().then((response) => response.data)
  posts.value?.forEach((post) => {
    let user = users.find((el) => el.id === post.userId)

    if (user) {
      post.user = user
    }
  })
  console.log(posts.value)
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
      <post-card v-for="post in searchedPosts" :post="post" />
      <p v-if="searchedPosts.length <= 0">Результаты не найдены</p>
    </div>
  </div>
</template>

<style lang="scss"></style>
