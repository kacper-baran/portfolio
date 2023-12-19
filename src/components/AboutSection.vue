<template>
  <section class="wrapper" id="about">
    <div>
      <img src="../assets/baran-small.png" alt="skull of a ram" />
    </div>
    <div>
      <h2>About me</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quam atque harum unde
        reprehenderit! Tempore in nulla temporibus architecto quos, sequi quo nostrum quidem
        sapiente, molestias, nesciunt asperiores? Similique velit commodi iure voluptatem ratione!
        In, sunt ut. Itaque at, cum dolorum magni odit impedit velit ullam saepe. Quia modi quod,
        dolor tenetur adipisci mollitia consectetur cupiditate unde, odit repellendus nulla? Amet
        quaerat optio alias praesentium perferendis, illum esse culpa consequuntur officia
        repellendus a rem rerum veritatis aperiam maiores dolorum. Praesentium incidunt atque
        aspernatur velit maiores laboriosam sint. Ad quaerat unde inventore eligendi eos, saepe
        dignissimos incidunt modi labore, rem animi!
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

div:has(img) {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff0f;
  padding: 1em;
  border-radius: 6px;
  height: 400px;
}

@media (min-width: 768px) {
  section {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
