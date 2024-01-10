<template>
  <section class="wrapper" id="about">
    <div>
      <img src="../assets/img/app.jpeg" alt="coffee with a macbook" />
    </div>
    <div>
      <h2>About me 🐏</h2>
      <p>
        Hey, I'm Kacper Baran, a front-end developer from Poland. I'm on a mission to bring digital
        experiences to life. With a deep appreciation for design aesthetics and a knack for the
        latest technologies, I specialize in creating websites that not only function seamlessly but
        also captivate users visually. Whether I'm translating creative concepts into code or
        optimizing user journeys, I'm committed to pushing the boundaries of front-end development.
        Plus, I thrive in collaborative environments—I work well in teams and believe that the best
        results come from collective effort.
      </p>
    </div>
  </section>
</template>

<script></script>

<style scoped>
section {
  display: grid;
  place-items: center;
  max-width: 1000px;
  gap: 2em;
}

h2 {
  font-weight: 700;
}

div:has(img) {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

img {
  border-radius: 6px;
  box-shadow: 0 0 120px -50px aquamarine;
}

@media (min-width: 768px) {
  section {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
