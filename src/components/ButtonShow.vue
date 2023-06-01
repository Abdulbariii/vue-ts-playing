<!-- eslint-disable prettier/prettier -->
<template lang="">
  <button v-on:click="$store.commit('showModel', !$store.state.showModel)">
    {{ $store.state.showModel ? "close" : "show" }}
  </button>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
export default {
  name: "ButtonShow",
  props: {
    showMsg: Boolean,
  },

  methods: {
    handleShow() {
      this.$emit("handleShow");
    },
  },
};
</script>
<!-- eslint-disable prettier/prettier -->

<style scoped>
button {
  width: 300px;
  padding: 8px 20px;
  font-size: 30px;
  border-radius: 22px;
  background-color: rgba(255, 221, 0, 0.696);
  color: black;
  border: none;
  cursor: pointer;
}
</style>
