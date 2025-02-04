<script setup>
import { ref } from "vue";

const messege = ref('Hello vue 3.0')
</script>

<template>
<div>
    <h1>MyComponent</h1>
    <p>{{ messege }}</p>
    <input v-model="messege" />
</div>
</template>

<style scoped lang="scss">
</style>