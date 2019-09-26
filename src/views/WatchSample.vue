<template>
  <div>
    <h2>mouse pointer</h2>
    <div>x: {{ x }}</div>
    <div>y: {{ y }}</div>
    <h2>counter pointer</h2>
    <div>counter: {{ counter }}</div>
    <button @click="inc">inc</button>
    <button @click="dec">dec</button>
  </div>
</template>

<script lang="ts">
import { createComponent, watch } from "@vue/composition-api";
import { useMouse } from "@/hooks/useMouse";
import { useCounter } from "@/hooks/useCounter";
import { useLifeCycleLog } from "@/hooks/useLifeCycleLog";

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
    useLifeCycleLog();

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
