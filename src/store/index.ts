import { acceptHMRUpdate, defineStore } from 'pinia'

export const Store = defineStore({
  id: 'Store',
  state: () => ({
    count: 0
  }),
  getters: {
    getCount(state) {
      return state.count
    }
  },
  actions: {
    setCount(data:number) {
      this.count = data
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(Store, import.meta.hot))
}
