<template>
  <div
    v-if="loading"
    class="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      class="w-16 h-16"
    >
      <path
        fill="#a02424"
        d="M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
    },
  },
};
</script>
