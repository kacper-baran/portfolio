<template>
  <header class="wrapper">
    <div class="heading">
      <div>
        <div class="small">Hi my name is</div>
        <p class="accent">Kacper Baran</p>
        <h1>Front-End Vue Developer 👨‍💻</h1>
      </div>
      <div class="socials">
        <a target="_blank" href="https://github.com/kacper-baran">
          <IconBrandGithub stroke-width="1.5" size="40"></IconBrandGithub>
        </a>
        <a target="_blank" href="">
          <IconBrandLinkedin stroke-width="1.5" size="40"></IconBrandLinkedin
        ></a>
      </div>
      <p>Tech stack:</p>
      <div class="tech">
        <div class="tech__item">
          <htmlIcon />
        </div>
        <div class="tech__item">
          <cssIcon />
        </div>
        <div class="tech__item">
          <jsIcon />
        </div>
        <div class="tech__item">
          <vueIcon />
        </div>
        <div class="tech__item">
          <sassIcon />
        </div>
      </div>
    </div>
    <div class="hero-img">
      <img src="../assets/img/me.jpeg" alt="picture of me" />
    </div>
  </header>
</template>
<script setup>
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-vue'
import cssIcon from './Icons/cssIcon.vue'
import jsIcon from './Icons/jsIcon.vue'
import htmlIcon from './Icons/htmlIcon.vue'
import vueIcon from './Icons/vueIcon.vue'
import sassIcon from './Icons/sassIcon.vue'
</script>
<style scoped>
header {
  display: flex;
  place-items: center;
  flex-direction: column;
  gap: 4em;
  min-height: 100vh;
  max-width: 900px;
  padding-block: 8rem;
  line-height: 1.3;
}
.hero-img {
  max-width: 300px;
  width: 100%;
  height: 350px;
  box-shadow: 0 0 120px -50px aquamarine;
  overflow: clip;
  border-radius: 8px;
}
.tech {
  display: flex;
  gap: 1em;
  margin-block: 1em;
}

.socials {
  display: flex;
  gap: 2em;
  margin-block: 1em;
}

.accent {
  color: var(--color-text-accent);
  font-size: 1.4rem;
}

h1 {
  font-weight: 700;
  font-size: 2.7em;
  line-height: 1;
}

.text {
  margin-top: 1.5rem;
  margin-bottom: 2rem;
}

img {
  scale: 1.6;
}

@media (min-width: 768px) {
  header {
    flex-direction: row;
    line-height: 1.2;
  }
  .accent {
    font-size: 1.5rem;
  }
  h1 {
    line-height: 1.2;
  }
}
</style>
