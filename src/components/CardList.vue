<template>
  <div>
    <div
      class="card-list"
      v-for="(merchant, index) in this.$store.state.merchants"
      :key="index"
    >
      <Card :merchant="merchant" />
    </div>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "CardList",
  components: {
    Card,
  },
};
</script>

<style>
</style>