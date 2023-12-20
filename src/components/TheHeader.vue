<template>
  <header class="wrapper">
    <div class="heading">
      <div>
        <div class="small">Hi my name is</div>
        <p class="accent">Kacper Baran</p>
        <h1>Front-End Vue Developer 👨‍💻</h1>
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quam ipsam vel tempora
          deleniti? Officia.
        </p>
      </div>

      <div class="socials">
        <a target="_blank" href="https://github.com/kacper-baran">
          <IconBrandGithub stroke-width="1.5" size="40"></IconBrandGithub>
        </a>
        <a target="_blank" href="">
          <IconBrandLinkedin stroke-width="1.5" size="40"></IconBrandLinkedin
        ></a>
        <a target="_blank" href="">
          <IconBrandInstagram stroke-width="1.5" size="40"></IconBrandInstagram>
        </a>
      </div>
      <p>Tech stack:</p>
      <div class="tech">
        <div class="tech__item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>HTML5 Logo Badge</title>
            <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512" />
            <path fill="#EF652A" d="M256,472 L405,431 440,37 256,37" />
            <path
              fill="#EBEBEB"
              d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"
            />
            <path
              fill="#FFF"
              d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"
            />
          </svg>
        </div>
        <div class="tech__item">
          <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
            <path
              fill="#264de4"
              d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"
            />
            <path fill="#2965f1" d="M405.388 431.408l35.148-393.73H256v435.146z" />
            <path
              fill="#ebebeb"
              d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"
            />
            <path
              fill="#fff"
              d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"
            />
          </svg>
        </div>
        <div class="tech__item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
            <rect width="630" height="630" fill="#f7df1e" />
            <path
              d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"
            />
          </svg>
        </div>
        <div class="tech__item">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 261.76 226.69">
            <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
              <g transform="translate(178.06 235.01)">
                <path
                  d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
                  fill="#41b883"
                />
              </g>
              <g transform="translate(178.06 235.01)">
                <path
                  d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
                  fill="#34495e"
                />
              </g>
            </g>
          </svg>
        </div>
        <div class="tech__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 547.8 410.6"
            enable-background="new 0 0 547.8 410.6"
            xml:space="preserve"
          >
            <path
              fill="#CD6799"
              d="M471.4,236c-19.1,0.1-35.7,4.7-49.6,11.5c-5.1-10.1-10.2-19.1-11.1-25.7c-1-7.7-2.2-12.4-1-21.6  c1.2-9.2,6.6-22.3,6.5-23.3s-1.2-5.7-12.2-5.8c-11-0.1-20.5,2.1-21.6,5c-1.1,2.9-3.2,9.5-4.6,16.3c-1.9,10-22,45.7-33.5,64.4  c-3.7-7.3-6.9-13.7-7.6-18.8c-1-7.7-2.2-12.4-1-21.6c1.2-9.2,6.6-22.3,6.5-23.3c-0.1-1-1.2-5.7-12.2-5.8c-11-0.1-20.5,2.1-21.6,5  c-1.1,2.9-2.3,9.7-4.6,16.3c-2.3,6.6-29,66.2-36,81.6c-3.6,7.9-6.7,14.2-8.9,18.5c0,0,0,0,0,0s-0.1,0.3-0.4,0.8  c-1.9,3.7-3,5.7-3,5.7s0,0,0,0.1c-1.5,2.7-3.1,5.2-3.9,5.2c-0.6,0-1.7-7.2,0.2-17c4-20.7,13.5-52.9,13.4-54c0-0.6,1.8-6.2-6.2-9.1  c-7.8-2.9-10.6,1.9-11.3,1.9c-0.7,0-1.2,1.7-1.2,1.7s8.7-36.2-16.6-36.2c-15.8,0-37.6,17.3-48.4,32.9c-6.8,3.7-21.3,11.6-36.8,20.1  c-5.9,3.3-12,6.6-17.7,9.7c-0.4-0.4-0.8-0.9-1.2-1.3c-30.6-32.7-87.2-55.8-84.8-99.7c0.9-16,6.4-58,108.7-109  C233.9,19,300.9,30.5,312.5,56c16.6,36.4-35.9,104-122.9,113.8c-33.2,3.7-50.6-9.1-55-13.9c-4.6-5-5.3-5.3-7-4.3c-2.8,1.5-1,6,0,8.6  c2.6,6.8,13.3,18.8,31.4,24.7c16,5.2,54.9,8.1,102-10.1c52.7-20.4,93.9-77.1,81.8-124.6C330.7,2,250.7-13.9,175,13  C130,29,81.2,54.2,46.1,87c-41.7,39-48.3,72.9-45.6,87.1c9.7,50.4,79.2,83.2,107,107.5c-1.4,0.8-2.7,1.5-3.8,2.1  c-13.9,6.9-66.9,34.6-80.1,63.9c-15,33.2,2.4,57,13.9,60.2c35.7,9.9,72.4-7.9,92.1-37.3c19.7-29.4,17.3-67.6,8.2-85.1  c-0.1-0.2-0.2-0.4-0.4-0.6c3.6-2.1,7.3-4.3,10.9-6.4c7.1-4.2,14.1-8.1,20.1-11.3c-3.4,9.3-5.9,20.4-7.1,36.4  c-1.5,18.8,6.2,43.2,16.3,52.8c4.5,4.2,9.8,4.3,13.2,4.3c11.8,0,17.1-9.8,23-21.4c7.2-14.2,13.7-30.7,13.7-30.7s-8.1,44.6,13.9,44.6  c8,0,16.1-10.4,19.7-15.7c0,0.1,0,0.1,0,0.1s0.2-0.3,0.6-1c0.8-1.3,1.3-2.1,1.3-2.1s0-0.1,0-0.2c3.2-5.6,10.4-18.3,21.1-39.4  c13.8-27.2,27.1-61.2,27.1-61.2s1.2,8.3,5.3,22.1c2.4,8.1,7.4,17,11.4,25.6c-3.2,4.5-5.2,7-5.2,7s0,0,0.1,0.1  c-2.6,3.4-5.4,7.1-8.5,10.7c-10.9,13-23.9,27.9-25.7,32.2c-2.1,5.1-1.6,8.8,2.4,11.8c2.9,2.2,8.1,2.5,13.4,2.2  c9.8-0.7,16.7-3.1,20.1-4.6c5.3-1.9,11.5-4.8,17.3-9.1c10.7-7.9,17.2-19.2,16.6-34.1c-0.3-8.2-3-16.4-6.3-24.1  c1-1.4,1.9-2.8,2.9-4.2c16.9-24.7,30-51.8,30-51.8s1.2,8.3,5.3,22.1c2,7,6.1,14.6,9.7,22c-15.9,12.9-25.7,27.9-29.2,37.7  c-6.3,18.2-1.4,26.4,7.9,28.3c4.2,0.9,10.2-1.1,14.6-3c5.6-1.8,12.2-4.9,18.5-9.5c10.7-7.9,21-18.9,20.4-33.8  c-0.3-6.8-2.1-13.5-4.6-20c13.5-5.6,30.9-8.7,53.1-6.1c47.6,5.6,57,35.3,55.2,47.8c-1.8,12.5-11.8,19.3-15.1,21.4  c-3.3,2.1-4.4,2.8-4.1,4.3c0.4,2.2,2,2.1,4.8,1.7c3.9-0.7,25-10.1,25.9-33.1C548.9,267.8,520.9,235.7,471.4,236z M104.2,359.8  C88.4,377,66.4,383.5,56.9,378c-10.2-5.9-6.2-31.3,13.2-49.5c11.8-11.1,27-21.4,37.1-27.7c2.3-1.4,5.7-3.4,9.8-5.9  c0.7-0.4,1.1-0.6,1.1-0.6l0,0c0.8-0.5,1.6-1,2.4-1.5C127.6,318.8,120.8,341.7,104.2,359.8z M219.2,281.6c-5.5,13.4-17,47.7-24,45.8  c-6-1.6-9.7-27.6-1.2-53.3c4.3-12.9,13.4-28.3,18.7-34.3c8.6-9.6,18.1-12.8,20.4-8.9C236,236,222.6,273.2,219.2,281.6z M314.1,327  c-2.3,1.2-4.5,2-5.5,1.4c-0.7-0.4,1-2,1-2s11.9-12.8,16.6-18.6c2.7-3.4,5.9-7.4,9.3-11.9c0,0.4,0,0.9,0,1.3  C335.5,312.5,320.7,322.8,314.1,327z M387.3,310.3c-1.7-1.2-1.4-5.2,4.3-17.7c2.2-4.9,7.4-13.1,16.3-21c1,3.2,1.7,6.3,1.6,9.2  C409.4,300.1,395.6,307.3,387.3,310.3z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="hero-img">
      <img src="../assets/IMG_8963.JPG" alt="picture of me :)" />
    </div>
  </header>
</template>
<script setup>
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-vue'
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
  height: 350px;
  box-shadow: 0 0 120px -50px aquamarine;
  overflow: clip;
}
.tech {
  display: flex;
  gap: 1em;
  margin-block: 1em;
}
svg {
  height: 50px;
  width: 50px;
}

.socials {
  display: flex;
  gap: 2em;
  margin-bottom: 1em;
}
.accent {
  color: var(--color-text-accent);
  font-size: 1.4rem;
}

.tech__item:nth-of-type(1),
.tech__item:nth-of-type(2),
.tech__item:nth-of-type(3),
.tech__item:nth-of-type(4),
.tech__item:nth-of-type(5) {
  position: relative;
  cursor: pointer;
}
.tech__item:nth-of-type(1)::before,
.tech__item:nth-of-type(2)::before,
.tech__item:nth-of-type(3)::before,
.tech__item:nth-of-type(4)::before,
.tech__item:nth-of-type(5)::before {
  text-align: center;
  position: absolute;
  opacity: 0;
  color: white;
  bottom: -30px;
  background-color: var(--color-background-soft);
  padding-inline: 0.5em;
  left: 50%;
  translate: -50% 0%;
  padding-block: 0.3em;
  border-radius: 6px;
  font-size: 0.8rem;
  transition: opacity 0.3s;
  z-index: 5;
}

.tech__item:nth-of-type(1)::before {
  content: 'html';
}
.tech__item:nth-of-type(2)::before {
  content: 'css';
}
.tech__item:nth-of-type(3)::before {
  content: 'javascript';
}
.tech__item:nth-of-type(4)::before {
  content: 'vue';
}
.tech__item:nth-of-type(5)::before {
  content: 'sass';
}

.tech__item:nth-of-type(1):hover::before,
.tech__item:nth-of-type(2):hover::before,
.tech__item:nth-of-type(3):hover::before,
.tech__item:nth-of-type(4):hover::before,
.tech__item:nth-of-type(5):hover::before {
  opacity: 1;
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
