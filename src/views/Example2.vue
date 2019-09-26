<template>
  <div>
    <h2>mouse pointer</h2>
    <div>x: {{ x }}</div>
    <div>y: {{ y }}</div>
    <button @click="setDummyPos">setDummyPos</button>
  </div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import { useMouse } from "@/hooks/useMouse";

export default createComponent({
  setup () {
    const { x, y } = useMouse();

    return {
      x,
      y,
      setDummyPos: () => {
        // これはreadonlyなcomputedの為エラーがでる
        x.value = Math.random();
        y.value = Math.random();
      }
    };
  }
});
</script>
