<template>
  <div class="main">
    <div class="content">
      <h3>
        ผลการค้นหา
        <span v-show="this.$store.state.category_pick != 'ทั้งหมด'">{{
          this.$store.state.category_pick
        }}</span>
        ทั้งหมด
      </h3>
      <div class="section">
        <Categories />
        <card-list />
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  width: 100%;
  height: auto;
}

.content {
  width: 95%;
  margin: auto;
}

.section {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 20px;
  margin-top: 50px;
}

@media screen and (max-width: 600px) {
  .main {
    display: block;
    height: 100%;
  }
  .section {
    grid-template-columns: 100%;
  }
}
</style>
<script>
import CardList from "./CardList.vue";
import Categories from "./Categories";
export default {
  components: {
    Categories,
    CardList,
  },
};
</script>