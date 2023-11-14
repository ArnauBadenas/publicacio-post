<script setup lang="ts">
import { reactive } from 'vue';
import commentForm from './components/comment-form.vue';
import commentPost from './components/comment-post.vue';
import type Post from './types/Post';


const posts: Post[] = reactive([])
function postComment(post: Post) {
  posts.push(post);
}
</script>

<template>
  <main class="d-flex flex-column justify-content-center min-vh-100">
    <section id="title" class="d-flex align-items-center justify-content-center">
      <img src="https://img.icons8.com/ios/50/inscription.png" alt="inscription" />
      <h1 class="pt-2">My diary</h1>
    </section>
    <commentForm @gestionar-submit="postComment" class="d-flex flex-column align-items-center"></commentForm>
    <section id="comments" class="d-flex flex-column align-items-center">
      <commentPost class="w-50" v-for="post in posts" :key="post.postId" :comment="post.comment" :emoji="post.emoji"
        :date="post.addDate" :userId="post.userId"></commentPost>
    </section>
  </main>
</template>

<style scoped></style>
