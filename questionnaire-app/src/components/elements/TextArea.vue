<template>
  <div class="text_area">
    <div class="text_area">
      <p>{{ title }}</p>
      <textarea name="text" id="text" cols="100" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    title: String,
  },
};
</script>
<style scoped></style>
