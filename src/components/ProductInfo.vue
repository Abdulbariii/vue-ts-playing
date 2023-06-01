<!-- eslint-disable prettier/prettier -->
<template lang="">
  <div v-if="!isLoading">
    <h1>{{ $store.state.product.title }}</h1>
    <img :src="$store.state.product.image" alt="" />
  </div>
  <h1 v-else>Loading...</h1>
</template>
<!-- eslint-disable prettier/prettier -->

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductInfo",

  data() {
    return {
      productId: 0 as any,
      isLoading: false as boolean,
    };
  },

  async mounted() {
    this.isLoading = true;
    this.productId = this.$route.params.id;
    await this.$store.dispatch("getSingleProduct", this.productId);
    this.isLoading = false;
  },
});
</script>
<!-- eslint-disable prettier/prettier -->

<style scoped>
img {
  width: 600px;
  height: 400px;
  object-fit: cover;
}
</style>
