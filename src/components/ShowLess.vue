<!-- eslint-disable prettier/prettier -->
<template lang="">
  <button v-on:click="fetchLess" class="btn">Show Less</button>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
export default {
  methods: {
    fetchLess() {
      this.$emit("fetchLess");
    },
  },
};
</script>
<!-- eslint-disable prettier/prettier -->

<style></style>
