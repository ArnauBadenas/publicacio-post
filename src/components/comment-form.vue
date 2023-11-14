<script lang="ts" setup>
import type { Emoji } from '@/types/Emoji';
import type Post from '@/types/Post';
import { ref, watch, type Ref, reactive } from 'vue';

const emit = defineEmits<{
    (e: 'gestionar-submit', post: Post): void
}>()

const comment: Ref<string> = ref("")
const emoji: Ref<Emoji> = ref("happy")

const post: Post = reactive({
    comment: comment,
    emoji: emoji,
    addDate: new Date(),
    postId: 2,
    userId: 2
})

var charCount = 0
const maxCharacters = 280
const minCharacters = 1

watch(comment, () => {
    charCount = comment.value.length
})

</script>

<template>
    <form @submit.prevent="emit('gestionar-submit', post)" action="">
        <textarea v-model="comment" name="commentarea" id="commentarea" cols="30" rows="10"></textarea>
        <section class="d-flex align-items-center">
            <label for="happy" :class="{ 'checked': emoji === 'happy' }">
                <img src="../assets/emojis/happy.png" alt="">
                <input type="radio" name="happy" id="happy" value="happy" v-model="emoji">
            </label>
            <label for="smirk" :class="{ 'checked': emoji === 'smirk' }">
                <img width="54" height="54" src="../assets/emojis/smirk.png" alt="">
                <input type="radio" name="smirk" id="smirk" value="smirk" v-model="emoji">
            </label>
            <label for="neutral" :class="{ 'checked': emoji === 'neutral' }">
                <img src="../assets/emojis/neutral.png" alt="">
                <input type="radio" name="neutral" id="neutral" value="neutral" v-model="emoji">
            </label>
            <label for="confused" :class="{ 'checked': emoji === 'confused' }">
                <img src="../assets/emojis/confused.png" alt="">
                <input type="radio" name="confused" id="confused" value="confused" v-model="emoji">
            </label>
            <label for="sad" :class="{ 'checked': emoji === 'sad' }">
                <img src="../assets/emojis/sad.png" alt="">
                <input type="radio" name="sad" id="sad" value="sad" v-model="emoji">
            </label>
            <label for="crying" :class="{ 'checked': emoji === 'crying' }">
                <img src="../assets/emojis/crying.png" alt="">
                <input type="radio" name="crying" id="crying" value="crying" v-model="emoji">
            </label>
        </section>
        <p>{{ charCount }} / {{ maxCharacters }}</p>
        <button :disabled="charCount > maxCharacters || charCount < minCharacters" type="submit" class="btn btn-primary">Remember</button>
    </form>
</template>

<style scoped>
textarea {
    resize: none;
    width: 50%;
}

/* HIDE RADIO */
[type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}

label.checked img {
    background-color: red;
}

img {
    border: 3px solid transparent;
    /* Set a default border for the images */
}
</style>