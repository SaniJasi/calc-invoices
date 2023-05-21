<template>
  <div v-if="computedInvoicesList.length > 0">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invoice in computedInvoicesList" :key="invoice.id">
          <td>
            <input type="checkbox" :value="invoice.id" v-model="selectedIds" />
          </td>
          <td>
            <h2>{{ invoice.item.name }}</h2>
          </td>
          <td>
            {{ invoice.item.price }}
          </td>
          <td>{{ invoice.item.qty }}</td>
          <td>${{ invoice.item.price * invoice.item.qty }}</td>
        </tr>
      </tbody>
    </table>
    <div class="controls">
      <button class="btn btn--outline" @click="removeItem">Delete</button>
      <span>Total: ${{ totalSum }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counterStore = useCounterStore()
    const selectedIds = ref<number[]>([])
    const computedInvoicesList = computed(() => counterStore.counter)

    const totalSum = computed(() => {
      return computedInvoicesList.value.reduce((sum, invoice) => {
        const price = Number(invoice.item.price)
        const qty = Number(invoice.item.qty)
        return sum + price * qty
      }, 0)
    })

    const removeItem = () => {
      for (const id of selectedIds.value) {
        counterStore.deleteItem(String(id))
      }
      selectedIds.value = []
    }

    return {
      computedInvoicesList,
      totalSum,
      selectedIds,
      removeItem
    }
  }
}
</script>
