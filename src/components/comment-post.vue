<script lang="ts" setup>
const props = defineProps(['comment', 'emoji', 'date','userId'])
const filePath = `../src/assets/emojis/${props.emoji}.png`
const currentDate = `${props.date.getDate()}/${props.date.getMonth()}/${props.date.getFullYear()} ${props.date.getHours()}:${props.date.getMinutes()}`
</script>

<template>
    <article class="row align-items-center">
        <div class="col-2">
            <img :src="filePath" alt="">
        </div>
        <div class="col-8">
            <p >{{ props.comment }}</p>
        </div>
        <div class="d-flex flex-row-reverse">
            <ul>
                <li>
                    <p>Usuari: {{ props.userId }}</p>
                </li>
                <li>
                    <p>Data d'enviament: {{ currentDate }}</p>
                </li>
            </ul>
            
            
        </div>
    </article>
</template>
<style scoped>
img{
    width: 100px;
}
</style>