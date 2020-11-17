<template>
  <div class="categories">
    <div class="categories-text">ประเภทร้านค้า</div>
    <div class="store-categories">
      <div>
        <input type="radio" name="categories" id="categories" checked /> ทั้งหมด
      </div>
      <div
        v-for="(category, index) in this.$store.state.categories"
        :key="index"
      >
        <input type="radio" name="categories" id="categories" />
        {{ category.name }}
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
    <h3>ประเภทร้านอาหารแหละเครื่องดื่ม</h3>
    <form class="store-categories">
      <div>
        <input type="radio" name="subcategories" id="all" value="all" checked />
        <label for="all"> ทั้งหมด</label>
      </div>
      <div
        v-for="(subcategories, index) in this.$store.state.categories[0]
          .subcategories"
        :key="index"
      >
        <input
          type="radio"
          name="subcategories"
          :id="subcategories"
          :value="subcategories"
        />
        <label :for="subcategories"> {{ subcategories }}</label>
      </div>
    </form>
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
export default {};
</script>