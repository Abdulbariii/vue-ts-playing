<!-- eslint-disable prettier/prettier -->
<template lang="">
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="Job in OrderedJobs" :key="Job.id">
        <p>{{ Job.name }}</p>
        <p>{{ Job.location }}</p>
        <p class="salary">Salary: {{ Job.salary }}</p>
      </li>
    </transition-group>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script lang="ts">
import { computed, defineComponent } from "vue";
import { PropType } from "vue";
import JobTypes from "@/types/JobTypes";
import OrderTerm from "@/types/OrderTerm";

export default defineComponent({
  name: "JobList",

  props: {
    Jobs: {
      required: true,
      type: Array as PropType<JobTypes[]>,
    },

    order: {
      required: true,
      type: String as PropType<OrderTerm>,
    },
  },

  setup(props) {
    const OrderedJobs = computed(() => {
      return [...props.Jobs].sort((a: JobTypes, b: JobTypes) => {
        return a[props.order] > b[props.order] ? 1 : -1;
      });
    });

    return { OrderedJobs };
  },
});
</script>
<!-- eslint-disable prettier/prettier -->

<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  li {
    list-style-type: none;
    background-color: #e5ff00;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 15px;
    max-width: 600px;
    min-width: 500px;
    color: black;
    flex-direction: column;

    p {
      font-weight: 700;
      font-size: 30px;
    }

    .salary {
      background-color: #68696b88;
      width: 100%;
      color: black;
    }
  }

  .list-move {
    transition: all 0.8s;
  }
}
</style>
