<template>
  <div id="app">
    <HeaderTitle :title="title" />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderTitle from "./components/elements/HeaderTitle";
export default {
  name: "App",
  components: {
    HeaderTitle,
  },
  data() {
    return {
      title: "診察フォーム",
    };
  },
};
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div {
  margin-bottom: 20px;
}
</style>
