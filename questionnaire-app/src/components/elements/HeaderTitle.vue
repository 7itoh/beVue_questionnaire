<template>
  <div class="header_title">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "HeaderTitle",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.header_title {
  background: skyblue;
}
</style>
