<!-- eslint-disable prettier/prettier -->
<template lang="">
  <div>
    <h1>Contact page</h1>
    <ContactNum :msg="num" />

    <MsgContact v-if="$store.state.showModel"></MsgContact>
    <ButtonShow @handleShow="handleShow" :showMsg="showMsg"></ButtonShow>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script lang="ts">
import { defineComponent } from "vue";

import ContactNum from "@/components/ContactNum.vue";
import MsgContact from "@/components/MsgContact.vue";
import ButtonShow from "@/components/ButtonShow.vue";
export default defineComponent({
  data() {
    return {
      num: 22222,
      showMsg: false,
    };
  },
  components: {
    ContactNum,
    MsgContact,
    ButtonShow,
  },
  methods: {
    handleShow() {
      this.showMsg = !this.showMsg;
    },
  },
});
</script>
<!-- eslint-disable prettier/prettier -->

<style scoped>
h1 {
  font-size: 35px;
}
</style>
