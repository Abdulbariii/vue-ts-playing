<!-- eslint-disable prettier/prettier -->
<template lang="">
  <section class="con">
    <transition-group
      name="card"
      tag="section"
      v-for="(product, index) in $store.state.products"
      :key="index"
      mode="out-in"
    >
      <div
        v-if="
          $store.state.searchText == 'nothing'
            ? true
            : product.title.includes($store.state.searchText)
        "
      >
        <img :src="product.image" alt="" />
        <h4>{{ product.title }}</h4>
        <button>
          <router-link :to="`/counter/${product.id}`">View</router-link>
        </button>
      </div>
    </transition-group>
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

.card-move {
  transition: all 0.8s;
}
.card-enter-active,
.fade-leave-active {
  opacity: 0;
  transform: translateY(-20px);
}
.card-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
