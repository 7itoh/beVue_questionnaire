<template>
  <div class="two_way_qa_radio">
    <p>{{ question }}</p>
    <input type="radio" name="select" :val="val1" id="one" />
    <label for="one">{{ answer1 }}</label>
    <input type="radio" name="select" :val="val2" id="two" />
    <label for="two">{{ answer2 }}</label>
  </div>
</template>

<script>
export default {
  name: "TwowayQARadio",
  props: {
    question: String,
    answer1: String,
    answer2: String,
    val1: String,
    val2: String,
  },
};
</script>
<style scoped></style>
