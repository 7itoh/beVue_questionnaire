<template>
  <div class="consul">
    <form action="">
      <h2>-ご相談内容-</h2>
      <TextArea :title="title" :value="inptConsul" @input="updateConsulText" />
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
  computed: {
    inptConsul() {
      return this.$store.getters.consulValue;
    },
  },
  methods: {
    updateConsulText(e) {
      this.$store.dispatch("updateConsulText", e.target.value);
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
