<template>
  <footer>
    <div class="wrapper">
      <p>Copyright &copy; 2023. All rights are reserved</p>
      <div class="socials">
        <a href="">
          <IconBrandGithub stroke-width="1.5" size="40"></IconBrandGithub>
        </a>
        <a href=""> <IconBrandLinkedin stroke-width="1.5" size="40"></IconBrandLinkedin></a>
        <a href="">
          <IconBrandInstagram stroke-width="1.5" size="40"></IconBrandInstagram>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-vue'
</script>

<style scoped>
footer {
  background-color: var(--color-background-mute);
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-block: 2rem;
  gap: 2em;
}
.socials {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
a {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width: 768px) {
  .wrapper {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
