<template>
  <section id="contact">
    <div class="container">
      <h2>Contact</h2>
      <IconMailFilled size="40"></IconMailFilled>
      <p>kacperbaran0411@gmail.com</p>
    </div>
  </section>
</template>

<script setup>
import { IconMailFilled } from '@tabler/icons-vue'
</script>

<style scoped>
section {
  display: grid;
  place-items: center;
  min-height: 50vh;
  padding-block: 5em;
}
.container {
  display: grid;
  place-items: center;
}

.container > *:where(:not(:first-child)) {
  margin-top: 2rem;
}
h2 {
  font-size: 2rem;
  text-align: center;
}
p {
  font-size: clamp(1.2rem, 5vw, 3rem);
  color: var(--color-text-accent);
}
</style>
