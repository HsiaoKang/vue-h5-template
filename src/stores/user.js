import { acceptHMRUpdate } from 'pinia'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        name: '',
    }),
    actions: {
        login() {
            this.$patch({
                name: 'gatsby',
            })
        },
        logout() {
            this.$patch({
                name: '',
            })
        },
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
