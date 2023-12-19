<script setup>
import { ref } from 'vue'

import TheBlob from './components/TheBlob.vue'
const blob = ref(null)

window.onpointermove = (event) => {
  const { pageX, pageY } = event

  blob.value.animate(
    {
      left: `${pageX}px`,
      top: `${pageY}px`
    },
    { duration: 3000, fill: 'forwards' }
  )
}
</script>

<template>
  <div id="blur"></div>
  <div class="blob-container">
    <div id="blob" ref="blob">
      <TheBlob id="blob"></TheBlob>
    </div>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<style>
body {
  position: relative;
  height: auto;
}
.content {
  position: relative;
  z-index: 4;
}

.blob-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#blob {
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  opacity: 0.7;
}

#blur {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  backdrop-filter: blur(11vmax);
}

@media (max-width: 768px) {
  #blob {
    display: none;
  }
}
</style>
