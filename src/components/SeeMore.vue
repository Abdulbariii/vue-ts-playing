<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template lang="">
  <button v-on:click="fetchMore" class="btn">See More</button>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
export default {
  methods: {
    fetchMore() {
      this.$emit("fetchMore");
    },
  },
};
</script>
<!-- eslint-disable prettier/prettier -->

<style>
.btn {
  margin: 10px;
}
</style>
