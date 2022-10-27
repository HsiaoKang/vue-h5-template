<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})

const count = ref(0)

function a() {}
</script>

<template>
    <h1>{{ msg }}</h1>
    <p>{{ count }}</p>
    <div class="read-the-docs" style="" @click="a" @blur="a" @abort="a" @animationend="a">
        Click on the Vite and Vue logos to learn more
        <p class="p-4">kkk</p>
    </div>
</template>

<style scoped lang="scss">
.read-the-docs {
    width: 375px;
    background: blue;
}
.bb {
    font-size: 80px;
}
</style>
