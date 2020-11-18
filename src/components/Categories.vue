<template>
  <div class="categories">
    <div class="categories-text">ประเภทร้านค้า</div>
    <div class="store-categories">
      <div>
        <input
          type="radio"
          name="categories"
          id="all_categories"
          v-on:change="changeCategory"
          v-model="category_pick"
          value="ทั้งหมด"
        />
        <label for="all_categories">ทั้งหมด</label>
      </div>
      <div
        v-for="(category, index) in this.$store.state.categories"
        :key="index"
      >
        <input
          type="radio"
          name="categories"
          :id="category.name"
          :value="category.name"
          v-on:change="changeCategory"
          v-model="category_pick"
        />
        <label :for="category.name">{{ category.name }}</label>
      </div>
    </div>
    <h3>จังหวัด/ใกล้ฉัน</h3>
    <select name="provinces" id="near-categories">
      <option value="">📌 พิ้นที่ใกล้ฉัน</option>
      <option value="">🗺 พื้นที่ทั้งหมด</option>
      <option value="" disabled>-----------------------------</option>
      <option
        v-for="(province, index) in this.$store.state.provinces"
        :key="index"
        :value="province"
      >
        {{ province }}
      </option>
    </select>
    <h3>ราคา</h3>
    <select name="priceRange" id="near-categories">
      <option value="-" disabled selected>กรุณาเลือก</option>
      <option
        v-for="(priceRange, index) in this.$store.state.priceRange"
        :key="index"
        value="priceRange"
      >
        {{ priceRange }}
      </option>
    </select>
    <subCategories :category="this.category_pick" />
  </div>
</template>
<style scoped>
.categories-text {
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 700;
}
.categories {
  border: solid 1px rgb(156, 156, 156);
  background: white;
  padding: 20px;
  height: fit-content;
}

.store-categories {
  display: grid;
  gap: 5px;
}

#text-categories {
  margin: 10px;
}
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
  width: 20px;
  -webkit-transform: scale(1.3);
}

#near-categories {
  width: 100%;
  margin: auto;
  padding: 10px;
}
@media screen and (max-width: 600px) {
  .categories {
    display: none;
  }
}
</style>
<script>
import subCategories from "./subCategories";
export default {
  components: {
    subCategories,
  },
  data: function () {
    return {
      category_pick: this.$store.state.category_pick,
    };
  },
  methods: {
    changeCategory() {
      this.$store.state.category_pick = this.category_pick;
      console.log(this.category_pick);
      console.log(this.$store.state.category_pick);
    },
  },
};
</script>