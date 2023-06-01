<!-- eslint-disable prettier/prettier -->
<template lang="">
  <div>
    <button v-on:click="$store.commit('DecCounter')" class="btn">Dec</button>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
export default {};
</script>
<!-- eslint-disable prettier/prettier -->

<style>
.btn {
  width: 300px;
  padding: 10px 20px;
  background-color: rgb(158, 255, 61);
  color: black;
  cursor: pointer;
  font-size: 30px;
}
</style>
