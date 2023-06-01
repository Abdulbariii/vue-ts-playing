<!-- eslint-disable prettier/prettier -->
<template lang="">
  <div>
    <h1>Counter page</h1>
    <CounterNum></CounterNum>
  </div>

  <ProductsNew></ProductsNew>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
import CounterNum from "@/components/CounterNum.vue";
import ProductsNew from "@/components/ProductsNew.vue";
export default {
  components: {
    CounterNum,
    ProductsNew,
  },
};
</script>
<!-- eslint-disable prettier/prettier -->

<style lang=""></style>
