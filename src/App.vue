<template>
  <div id="app">
    <div id="nav">
      <template v-for="(route, i) in routes">
        <router-link :to="route.path" :key="route.path">{{
          route.name.toUpperCase()
        }}</router-link>
        <template v-if="i !== routes.length - 1">
          <br :key="'br' + route.path" />
        </template>
      </template>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { createComponent, reactive, ref } from "@vue/composition-api";
import { routes } from "./router";

export default createComponent({
  setup() {
    return {
      routes
    };
  }
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
