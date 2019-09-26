import {
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onUpdated
} from "@vue/composition-api";

export function useLifeCycleLog() {
  onBeforeMount(() => console.log("onBeforeMount"));
  onMounted(() => console.log("onMounted"));
  onBeforeUnmount(() => console.log("onBeforeUnmount"));
  onUnmounted(() => console.log("onUnmounted"));
  onActivated(() => console.log("onActivated"));
  onBeforeUpdate(() => console.log("onBeforeUpdate"));
  onDeactivated(() => console.log("onDeactivated"));
  onErrorCaptured(() => console.log("onErrorCaptured"));
  onUpdated(() => console.log("onUpdated"));
}
