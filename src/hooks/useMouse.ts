import {
  reactive,
  onMounted,
  onUnmounted,
  computed
} from "@vue/composition-api";

export function useMouse() {
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
  return {
    x: computed(() => pos.x),
    y: computed(() => pos.y)
  } as const;
}
