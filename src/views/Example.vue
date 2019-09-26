<template>
  <div>
    <h2>messageOne: {{ state.messageOne }}</h2>
    <h2>messageTwo: {{ messageTwo }}</h2>
    <button @click="updateMessaageOne">set Random num to messaageOne</button>
    <button @click="updateMessaageTwo">set Random num to messaageTwo</button>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive, ref } from "@vue/composition-api";

export default createComponent({
  setup() {
    const state = reactive({
      messageOne: "Hello"
    });
    const messageTwo = ref("こんにちは");

    return {
      state,
      messageTwo,
      updateMessaageOne: () => {
        state.messageOne = Math.random().toString();
      },
      updateMessaageTwo: () => {
        messageTwo.value = Math.random().toString();
      }
    };
  }
});
</script>
