<template>
  <section id="projects">
    <div class="wrapper">
      <h2>Projects</h2>
      <div class="project-card">
        <div class="img">
          <img src="/src/assets/img/booker-full.png" alt="" />
          <img src="/src/assets/img/booker/img2.png" alt="" />
          <p>After Login or Sign up</p>
          <img src="/src/assets/img/booker/img3.png" alt="" />
          <img src="/src/assets/img/booker/img4.png" alt="" />
          <img src="/src/assets/img/booker/img5.png" alt="" />
          <img src="/src/assets/img/booker/img6.png" alt="" />
          <img src="/src/assets/img/booker/img7.png" alt="" />
        </div>
        <div class="project-card__content">
          <h3>Booker</h3>
          <p>
            Booker is a web app for simplified book summary tracking. Featuring a clean landing page
            with a dark theme available. This web app utilizes firebase authetication to allow user
            to sign up or login. Inside the app you can read book summaries, add to saved list of
            books or create new Book summaries that other users can read. All of the data for each
            summary is loaded from firebase real-time data base.
          </p>
          <div class="tech">
            <span><sassIcon></sassIcon></span>
            <span><vueIcon></vueIcon></span>
          </div>
          <div class="links">
            <a href="https://kacper-baran.github.io/book-summary-website/" target="_blank"
              ><IconLink></IconLink>Live Demo
            </a>
            <a href="https://github.com/kacper-baran/book-summary-website" target="_blank"
              ><IconBrandGithub></IconBrandGithub>Code</a
            >
          </div>
        </div>
      </div>
      <div class="project-card">
        <div class="img">
          <img src="/src/assets/img/crypto-full.png" alt="" />
        </div>
        <div class="project-card__content">
          <h3>CryptoHub: Crypto Currencies api website</h3>
          <p>
            CryptoHub is website that allows to see trending crypto currencies thanks to a third
            party API CoinGecko that allow getting latest data. History of each coin is available in
            clean graphs that were built with grapJS.
          </p>
          <div class="tech">
            <span><cssIcon></cssIcon></span>
            <span><vueIcon></vueIcon></span>
          </div>
          <div class="links">
            <a href="https://kacper-baran.github.io/crypto-currency-app/" target="_blank"
              ><IconLink></IconLink>Live Demo
            </a>
            <a href="https://github.com/kacper-baran/guitar-ecommerce-webiste" target="_blank"
              ><IconBrandGithub></IconBrandGithub>Code</a
            >
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="img">
          <img src="/src/assets/img/guitar-shop-full3.png" alt="" />
        </div>
        <div class="project-card__content">
          <h3>Guitar e-commerce website</h3>
          <p>
            E-commerce website built with Vue. In this project I tried to create interesting and
            captivating designs with inspiriation from dribble.com
          </p>
          <div class="tech">
            <span><sassIcon></sassIcon></span>
            <span><vueIcon></vueIcon></span>
          </div>
          <div class="links">
            <a href="https://kacper-baran.github.io/guitar-ecommerce-webiste/" target="_blank">
              <IconLink></IconLink> Live Demo
            </a>
            <a href="https://github.com/kacper-baran/guitar-ecommerce-webiste" target="_blank"
              ><IconBrandGithub></IconBrandGithub> Code</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { IconBrandGithub, IconLink } from '@tabler/icons-vue'
import cssIcon from './Icons/cssIcon.vue'
import vueIcon from './Icons/vueIcon.vue'
import sassIcon from './Icons/sassIcon.vue'
</script>

<style scoped>
.wrapper {
  display: grid;
  place-items: center;
  gap: 2em;
  padding-block: 5em;
}

h2 {
  font-size: clamp(2rem, 9vw, 3rem);
}

.border {
  border: 1px solid white;
}

.project-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  max-width: 1100px;
  width: 100%;
  background-color: var(--color-background-mute);
  padding: 1em;
  border-radius: 6px;
}
h3 {
  font-size: 1.7rem;
}
.project-card__content {
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 1.4rem;
}

.tech {
  display: flex;
  gap: 2rem;
}

.links {
  display: flex;
  gap: 3rem;
}
.links a {
  display: flex;
  justify-self: center;
  align-items: center;
  gap: 0.5rem;
}

.img {
  display: grid;
  place-items: center;
  width: 100%;
  max-height: 350px;
  border-radius: 6px;
  overflow: scroll;
  box-shadow: 0 0 120px -70px aquamarine;
}
img {
}

.show-more {
  color: var(--color-text-accent);
}
@media (min-width: 768px) {
  .project-card {
    flex-direction: row;
  }
  .img {
    width: 80%;
  }
}
</style>
