<template>
  <div class="consul">
    <form action="">
      <TextArea :title="title" />
    </form>
    <div>
      <BaseButton
        @click="toQAcheck"
        class="button is-primary"
        action="前へ戻る"
      />
      <BaseButton @click="toDev" class="button is-primary" action="次へ進む" />
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
  methods: {
    toQAcheck() {
      this.$router.push("qacheck");
    },
    toDev() {
      console.log("仮設置ボタン");
    },
  },
};
</script>
<style scoped></style>
