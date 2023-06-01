<!-- eslint-disable prettier/prettier -->
<template lang="">
  <div>
    <h1>JobTypes</h1>
    <OrderBtns @handleOrder="handleOrder"></OrderBtns>
  </div>

  <p>Ordered by {{ order }}</p>
  <JobList :order="order" :Jobs="Jobs"></JobList>
</template>
<!-- eslint-disable prettier/prettier -->

<script lang="ts">
import { defineComponent, ref } from "vue";
import OrderBtns from "../components/OrderBtns.vue";
import JobTypes from "../types/JobTypes";
import JobList from "@/components/JobList.vue";
import OrderTerm from "@/types/OrderTerm";

export default defineComponent({
  components: {
    OrderBtns,
    JobList,
  },

  setup(props) {
    const Jobs = ref<JobTypes[]>([
      {
        name: "frontend",
        location: "erbil",
        salary: 200,
        id: 1,
      },
      {
        name: "designer",
        location: "suli",
        salary: 100,
        id: 2,
      },
      {
        name: "backend",
        location: "duhok",
        salary: 500,
        id: 3,
      },
    ]);

    const order = ref<OrderTerm>("name");

    return { Jobs, order };
  },

  methods: {
    handleOrder(order: OrderTerm) {
      this.order = order;
      console.log("order");
    },
  },
});
</script>
<!-- eslint-disable prettier/prettier -->

<style lang=""></style>
