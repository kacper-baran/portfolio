<template>
  <!-- <nav>
    <div class="wrapper">
      <div>KBdev</div>
      <ul>
        <li><a href="">link</a></li>
        <li><a href="">link</a></li>
        <li><a href="">link</a></li>
        <li><a href="">link</a></li>
      </ul>
    </div>
  </nav> -->
  <nav id="navbar">
    <div class="container wrapper">
      <div>KBdev</div>
      <ul class="menu" :class="{ menuActive: menuActive }">
        <li>
          <router-link class="nav-link" @click="closeMenu" :to="{ name: 'home' }">
            Home
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" @click="closeMenu" :to="{ name: 'home', hash: '#about' }">
            About
          </router-link>
        </li>
        <li>
          <router-link
            class="nav-link"
            @click="closeMenu"
            :to="{ name: 'home', hash: '#projects' }"
          >
            Projects
          </router-link>
        </li>
        <li>
          <router-link
            class="nav-link"
            @click="closeMenu"
            :to="{ name: 'home', hash: '#contact' }"
          >
            Contact
          </router-link>
        </li>
      </ul>
      <button class="hamburger desktop" :class="{ active: hamburgerActive }" @click="handleMenu">
        <div class="hamburger__inner">
          <div class="hamburger-item"></div>
          <div class="hamburger-item"></div>
          <div class="hamburger-item"></div>
        </div>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const menuActive = ref(false)
const hamburgerActive = ref(false)

const body = document.querySelector('body')
const handleMenu = () => {
  hamburgerActive.value = !hamburgerActive.value
  menuActive.value = !menuActive.value
  body.classList.toggle('locked')
}

const closeMenu = () => {
  menuActive.value = false
  hamburgerActive.value = false
  body.classList.remove('locked')
}
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-background-soft);
  z-index: 10;
  padding: 0.5em;
}

.menu {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  inset: 0;
  list-style: none;
  background-color: var(--color-background);
  translate: 120vw;
  transition: translate 0.3s ease-out;
  z-index: 100;
}

.menuActive {
  translate: 0;
  padding: 0;
}
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;
  padding-inline: 1rem;
}

.hamburger {
  position: relative;
  background-color: transparent;
  padding: 1em;
  width: 40px;
  z-index: 1000;
}

.hamburger-item {
  position: absolute;
  height: 4px;
  width: 100%;
  background-color: white;
  transition: all 0.2s ease-out;
}
.hamburger-item:first-child {
  top: 0;
}

.hamburger-item:last-child {
  bottom: 0;
}
.hamburger-item:nth-child(2) {
  top: 50%;
  translate: 0 -50%;
}

.hamburger.active .hamburger-item:first-child,
.hamburger.active .hamburger-item:last-child {
  right: 0;
  width: 90%;
}

.hamburger.active .hamburger-item:first-child {
  rotate: -135deg;
}
.hamburger.active .hamburger-item:last-child {
  rotate: 135deg;
}

.hamburger.active .hamburger-item:nth-child(2) {
  left: 0;
  width: 85%;
}
.nav-link {
  padding: 1em;
  position: relative;
}

@media (min-width: 768px) {
  .menu {
    position: relative;
    inset: auto;
    height: auto;
    width: auto;
    translate: 0;
    background-image: url();
    background-color: transparent;
  }
  ul,
  .menu {
    flex-direction: row;
  }

  .desktop {
    display: none;
  }
  .menu a {
    font-size: var(--font-size-1);
  }
}
</style>
