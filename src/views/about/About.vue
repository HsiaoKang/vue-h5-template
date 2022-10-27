<script setup>
import { useUserStore } from '@/stores/user'
import { useRoute } from 'vue-router'
const userStore = useUserStore()
const route = useRoute()
console.log()

defineProps({
    msg: String,
})

const login = () => {
    userStore.login();
}
const logout = () => {
    userStore.logout()
}
</script>

<template>
    this is about page name:{{ userStore.name }}
    <div>
        <button v-if="userStore.name" @click="logout">logout</button>
        <button v-else @click="login">login</button>
    </div>
    <p>add some text </p>
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
