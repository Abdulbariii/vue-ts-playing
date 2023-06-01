<!-- eslint-disable prettier/prettier -->
<template lang="">
  <div>
    <h1>{{ $store.state.count }}</h1>
  </div>

  <div>
    <DecBtn></DecBtn>
    <IncBtn></IncBtn>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import DecBtn from "./DecBtn.vue";
import IncBtn from "./IncBtn.vue";

export default {
  components: {
    DecBtn,
    IncBtn,
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
div {
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 40px;
}
</style>
