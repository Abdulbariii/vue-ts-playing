<!-- eslint-disable prettier/prettier -->
<template lang="">
  <div>
    <input v-model="searchFor" placeholder="Search" type="text" />
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",
  data() {
    return {
      searchFor: "" as string,
    };
  },
  watch: {
    searchFor(newText: string) {
      this.$store.state.searchText = newText;
      console.log(this.$store.state.searchText);
    },
  },
});
</script>
<!-- eslint-disable prettier/prettier -->

<style scoped>
input {
  width: 450px;
  height: 44px;
  padding: 4px 12px;
  font-size: 25px;
  background-color: white;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.595);
}
</style>
