<script lang="tsx">
import { createComponent, reactive, ref } from "@vue/composition-api";
import { routes } from "./router";

export default createComponent({
  render(h) {
    return (
      <div id="app">
        <div id="nav">
          {routes.map((route, i) => [
            <router-link to={route.path} key={route.path}>
              {route.name.toUpperCase()}
            </router-link>,
            i !== routes.length - 1 && <br key={`br${route.path}`} />
          ])}
        </div>
        <router-view />
      </div>
    );
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
