<template>
  <div class="consul">
    <form action="">
      <TextArea :title="title" :value="inptText" @input="updateTextArea" />
    </form>
    <div>
      <BaseButton
        @click="toQAcheck"
        class="button is-primary"
        action="前へ戻る"
      />
      <BaseButton
        @click="toResultForm"
        class="button is-primary"
        action="次へ進む"
      />
    </div>
  </div>
</template>
<script>
import TextArea from "../elements/TextArea";
import BaseButton from "../elements/BaseButton";

export default {
  name: "Consule",
  components: {
    TextArea,
    BaseButton,
  },
  data() {
    return {
      title: "-ご相談内容-",
    };
  },
  computed: {
    inptText() {
      return this.$store.getters.textAreaValue;
    },
  },
  methods: {
    updateTextArea(e) {
      this.$store.dispatch("updateTextArea", e.target.value);
    },
    toQAcheck() {
      this.$router.push("qacheck");
    },
    toResultForm() {
      this.$router.push("resultform");
    },
  },
};
</script>
<style scoped></style>
