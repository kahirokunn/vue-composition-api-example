import { computed, ref, reactive } from "@vue/composition-api";

export function useCounter() {
  const state = reactive({ counter: 0 });
  return {
    counter: computed(() => state.counter),
    inc: () => {
      state.counter++;
    },
    dec: () => {
      state.counter--;
    }
  } as const;
}
