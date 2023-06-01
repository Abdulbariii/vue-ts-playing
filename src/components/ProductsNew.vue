<!-- eslint-disable prettier/prettier -->
<template lang="">
  <section class="con">
    <div v-for="(product, index) in $store.state.products" :key="index">
      <img :src="product.image" alt="" />
      <h4>{{ product.title }}</h4>
    </div>
  </section>
  <SeeMore @fetchMore="fetchMore"></SeeMore>
  <ShowLess @fetchLess="fetchLess" v-if="$store.state.limitData > 5"></ShowLess>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
import SeeMore from "./SeeMore.vue";
import ShowLess from "./ShowLess.vue";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      limitData: 5,
    };
  },

  components: {
    SeeMore,
    ShowLess,
  },

  methods: {
    async getProduct(payload) {
      this.$store.dispatch("getProducts", payload);
    },

    fetchMore() {
      this.getProduct("fetchMore");
    },

    fetchLess() {
      this.getProduct("fetchLess");
    },
  },

  mounted() {
    console.log("can fetch");
    this.getProduct("l");
  },
});
</script>
<!-- eslint-disable prettier/prettier -->

<style scoped>
.con {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
}
div {
  border: 2px solid black;
  background-color: rgb(156, 255, 58);
  color: black;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 250px;
  min-height: 320px;
}

img {
  width: 100%;
  height: 60%;
  object-fit: cover;
}
</style>
