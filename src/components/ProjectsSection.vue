<template>
  <section id="projects">
    <div class="wrapper">
      <h2>Projects</h2>
      <div class="project-card">
        <div class="img"></div>
        <div class="project-card__content">
          <h3>Booker</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae qui facere sequi
            eaque velit neque alias iure optio libero nesciunt!
          </p>
          <div>
            <span>Vue </span>
            <span>SASS</span>
          </div>
          <div>
            <a href="https://kacper-baran.github.io/book-summary-website/" target="_blank"
              >Live Demo
            </a>
            <a href="https://github.com/kacper-baran/book-summary-website" target="_blank">Code</a>
          </div>
          <router-link to="/booker" class="show-more">Show more...</router-link>
        </div>
      </div>
      <div class="project-card">
        <div class="img"></div>
        <div class="project-card__content">
          <h3>CryptoHub: Crypto Currencies api website</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae qui facere sequi
            eaque velit neque alias iure optio libero nesciunt!
          </p>
          <div>
            <span>Vue </span>
            <span>SASS</span>
          </div>
          <div>
            <a href="https://kacper-baran.github.io/crypto-currency-app/" target="_blank"
              >🔗 Live Demo
            </a>
            <a href="https://github.com/kacper-baran/crypto-currency-app" target="_blank">Code</a>
          </div>
          <router-link to="/cryptohub" class="show-more">Show more...</router-link>
        </div>
      </div>

      <div class="project-card">
        <div class="img"></div>
        <div class="project-card__content">
          <h3>Booker</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae qui facere sequi
            eaque velit neque alias iure optio libero nesciunt!
          </p>
          <div>
            <span>Vue </span>
            <span>SASS</span>
          </div>
          <div>
            <a href="">Live Demo </a>
            <a href="">Code</a>
          </div>
          <a class="show-more" href="">Show more...</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.wrapper {
  display: grid;
  place-items: center;
  gap: 2em;
  padding-block: 5em;
}

.project-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1em;
  max-width: 900px;
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

  gap: 1em;
}

.img {
  width: 100%;
  height: 300px;
  border-radius: 6px;
  background-color: #ffffff0f;
}
.show-more {
  color: var(--color-text-accent);
}
@media (min-width: 768px) {
  .project-card {
    flex-direction: row;
  }
}
</style>
