<template>
  <div>
    <h2>mouse pointer</h2>
    <div>x: {{ x }}</div>
    <div>y: {{ y }}</div>
    <div>counter: {{ counter }}</div>
    <button @click="inc">inc</button>
    <button @click="dec">dec</button>
  </div>
</template>

<script lang="ts">
import { createComponent, watch } from "@vue/composition-api";
import { useMouse } from "@/hooks/useMouse";
import { useCounter } from "@/hooks/useCounter";

export default createComponent({
  setup() {
    const { x, y } = useMouse();
    const { counter, inc, dec } = useCounter();

    watch(() => {
      console.log("x", x.value, "y", y.value);
    });
    watch(() => {
      console.log("counter", counter.value);
    });
    // ちなみにこれは動かない
    watch(() => {
      console.log("not working", counter);
    });

    return {
      x,
      y,
      counter,
      inc,
      dec
    };
  }
});
</script>
