<template>
  <TheNav></TheNav>
  <TheHeader></TheHeader>
  <main>
    <AboutSection></AboutSection>
    <ProjectsSection></ProjectsSection>
    <ContactSection></ContactSection>
  </main>
  <TheFooter />
</template>

<script setup>
import TheNav from '../components/TheNav.vue'
import TheHeader from '../components/TheHeader.vue'
import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import TheFooter from '../components/TheFooter.vue'
</script>

<style scoped></style>
