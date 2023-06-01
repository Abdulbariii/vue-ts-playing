<!-- eslint-disable prettier/prettier -->
<template lang="">
  <div>
    <h1>Counter page</h1>
    <CounterNum></CounterNum>
  </div>
  <SearchBar></SearchBar>
  <ProductsNew></ProductsNew>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
import CounterNum from "@/components/CounterNum.vue";
import ProductsNew from "@/components/ProductsNew.vue";
import SearchBar from "@/components/SearchBar.vue";
export default {
  components: {
    CounterNum,
    ProductsNew,
    SearchBar,
  },
};
</script>
<!-- eslint-disable prettier/prettier -->

<style lang=""></style>
