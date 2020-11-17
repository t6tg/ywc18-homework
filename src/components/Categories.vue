<template>
  <div class="categories">
    <h3>ประเภทร้านค้า</h3>
    <input type="radio" name="categories" id="categories" checked />
    ทั้งหมด<br />
    <input type="radio" name="categories" id="categories" />
    ร้านอาหารและเครื่องดื่ม<br />
    <input type="radio" name="categories" id="categories" />
    ร้านค้า OTOP<br />
    <input type="radio" name="categories" id="categories" />
    ร้านธงฟ้า<br />
    <input type="radio" name="categories" id="categories" />
    สินค้าทั่วไป<br />
    <h3>จังหวัด/ใกล้ฉัน</h3>
    <select name="" id="near-categories">
      <option value="">พิ้นที่ใกล็ฉัน</option>
      <option value="">พิ้นที่ใกล็ฉัน</option>
      <option value="">พิ้นที่ใกล็ฉัน</option>
      <option value="">พิ้นที่ใกล็ฉัน</option>
      <option value="">พิ้นที่ใกล็ฉัน</option>
    </select>
    <h3>ราคา</h3>
    <select name="" id="near-categories">
      <option value="">พิ้นที่ใกล็ฉัน</option>
      <option value="">พิ้นที่ใกล็ฉัน</option>
      <option value="">พิ้นที่ใกล็ฉัน</option>
      <option value="">พิ้นที่ใกล็ฉัน</option>
      <option value="">พิ้นที่ใกล็ฉัน</option>
    </select>
    <h3>ประเภทร้านอาหารแหละเครื่องดื่ม</h3>
    <input type="radio" name="categories" id="categories" checked />
    ทั้งหมด<br />
    <input type="radio" name="categories" id="categories" />
    ร้านอาหารและเครื่องดื่ม<br />
    <input type="radio" name="categories" id="categories" />
    ร้านค้า OTOP<br />
    <input type="radio" name="categories" id="categories" />
    ร้านธงฟ้า<br />
    <input type="radio" name="categories" id="categories" />
    สินค้าทั่วไป<br />
    <input type="radio" name="categories" id="categories" checked />
    ทั้งหมด<br />
    <input type="radio" name="categories" id="categories" />
    ร้านอาหารและเครื่องดื่ม<br />
    <input type="radio" name="categories" id="categories" />
    ร้านค้า OTOP<br />
    <input type="radio" name="categories" id="categories" />
    ร้านธงฟ้า<br />
    <input type="radio" name="categories" id="categories" />
    สินค้าทั่วไป<br />
    <input type="radio" name="categories" id="categories" checked />
    ทั้งหมด<br />
    <input type="radio" name="categories" id="categories" />
    ร้านอาหารและเครื่องดื่ม<br />
    <input type="radio" name="categories" id="categories" />
    ร้านค้า OTOP<br />
    <input type="radio" name="categories" id="categories" />
    ร้านธงฟ้า<br />
    <input type="radio" name="categories" id="categories" />
    สินค้าทั่วไป<br />
  </div>
</template>
<style scoped>
.categories {
  border: solid 1px rgb(156, 156, 156);
  background: white;
  padding: 10px;
  height: auto;
}

#text-categories {
  margin: 10px;
}
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

#near-categories {
  width: 90%;
  margin: auto;
  height: 35px;
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