<template>
  <div class="container">
    {{ props.projectId }}
  </div>
</template>

<script setup>
const props = defineProps(['projectId'])
</script>

<style scoped>
.container {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
</style>
