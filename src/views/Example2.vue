<template>
  <div>
    <h2>mouse pointer</h2>
    <div>x: {{ x }}</div>
    <div>y: {{ y }}</div>
    <button @click="setDummyPos">setDummyPos</button>
  </div>
</template>

<script lang="ts">
import {
  createComponent,
  reactive,
  ref,
  onMounted,
  onUnmounted,
  toRefs
} from "@vue/composition-api";

function useMouse() {
  const pos = reactive({ x: 0, y: 0 });
  const update = (e: MouseEvent) => {
    pos.x = e.pageX;
    pos.y = e.pageY;
  };
  onMounted(() => {
    window.addEventListener("mousemove", update);
  });
  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });
  return toRefs(pos);
}

export default createComponent({
  setup() {
    const pos = useMouse();

    return {
      ...pos,
      setDummyPos: () => {
        // これはreadonlyなcomputedの為エラーがでる
        pos.x.value = Math.random();
        pos.y.value = Math.random();
      }
    };
  }
});
</script>
