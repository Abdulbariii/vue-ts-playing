<!-- eslint-disable prettier/prettier -->
<template lang="">
  <p>Order by</p>
  <div>
    <button v-on:click="handleOrder('name')">Name</button>
    <button v-on:click="handleOrder('location')">Location</button>
    <button v-on:click="handleOrder('salary')">Salary</button>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script lang="ts">
import { defineComponent } from "vue";
import OrderTerm from "../types/OrderTerm";

export default defineComponent({
  name: "OrderBtns",
  methods: {
    handleOrder(order: OrderTerm) {
      this.$emit("handleOrder", order);
    },
  },
});
</script>
<!-- eslint-disable prettier/prettier -->

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
button {
  width: 200px;
  font-size: 20px;
  padding: 4px 10px;
  height: 40px;
  background-color: #0b0b0b;
  color: #e5ff00;
  border: 2px solid #cacbcf;
}
</style>
