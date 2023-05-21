<template>
  <form @submit.prevent="submitForm" class="add-invoice">
    <div class="add-invoice__col add-invoice__col--1">
      <input type="text" placeholder="Product name" required v-model="invoiceName" />
    </div>
    <div class="add-invoice__col add-invoice__col--2">
      <input type="number" placeholder="Price" v-model="invoicePrice" required />
    </div>
    <div class="add-invoice__col add-invoice__col--3">
      <input type="number" placeholder="Qty" required v-model="invoiceQty" />
    </div>
    <div class="add-invoice__col add-invoice__col--4">
      <button class="btn btn--primary btn--full">Add</button>
    </div>
  </form>
  <div v-if="showCompletionMessage" class="success">The invoice was added!</div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counterStore = useCounterStore()
    const invoiceName = ref<string>('')
    const invoicePrice = ref<number>(NaN)
    const invoiceQty = ref<number>(NaN)
    const showCompletionMessage = ref<boolean>(false)

    const submitForm = () => {
      counterStore.addItem({
        name: invoiceName.value,
        price: invoicePrice.value,
        qty: invoiceQty.value
      })

      showCompletionMessage.value = true
      setTimeout(() => {
        showCompletionMessage.value = false
        invoiceName.value = ''
        invoicePrice.value = NaN
        invoiceQty.value = NaN
      }, 2000)
    }

    return {
      invoiceName,
      invoicePrice,
      invoiceQty,
      showCompletionMessage,
      submitForm
    }
  }
}
</script>

<style scoped>
.add-invoice {
  display: flex;
  justify-content: space-between;
}
.add-invoice__col--1 {
  width: 60%;
}
.add-invoice__col--2,
.add-invoice__col--3,
.add-invoice__col--4 {
  width: 10%;
}

.add-invoice__col input {
  font-size: 14px;
  width: 100%;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: border-radius 0.2s;
  border-radius: 10px;
  outline: none;
  padding: 0 15px;
}
.add-invoice__col input:focus {
  border-color: #000;
}
</style>
