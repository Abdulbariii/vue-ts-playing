<!-- eslint-disable prettier/prettier -->
<template lang="">
  <div>
    <h1>{{ $store.state.message }}</h1>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "ContactNum",
  props: {
    msg: String,
  },
});
</script>
<!-- eslint-disable prettier/prettier -->

<style></style>
