<script setup lang="ts">
import AppTitle from './components/AppTitle.vue'
import AddInvoice from './components/AddInvoice.vue'
import HomeView from './components/HomeView.vue'
</script>

<template>
  <main>
    <AppTitle msg="Vue Invoice Calc" />
    <AddInvoice />
    <HomeView />
  </main>
</template>
