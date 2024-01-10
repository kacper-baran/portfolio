<template>
  <div>
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
</template>

<script>
export default {}
</script>

<style scoped>
div {
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

div::before {
  position: absolute;
  text-align: center;
  content: 'vue';
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

div:hover::before {
  opacity: 1;
}
</style>
