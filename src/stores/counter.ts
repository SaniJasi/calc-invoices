import { defineStore } from 'pinia'

export interface CountItem {
  id: string,
  item: any
}

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: [] as CountItem[],
    id: 0,
    ready: false,
  }),
  actions: {
    addItem(item: any) {
      this.counter.push({ item, id: String(this.id++) })
    },
    deleteItem(itemId: string) {
      this.counter = this.counter.filter((object) => {
        return object.id !== itemId
      })
    },
  },
  persist: true
})
