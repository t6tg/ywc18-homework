<template>
  <div class="card">
    <div class="card-image">
      <img class="img" :src="merchant.coverImageId" alt="img" />
    </div>
    <div class="data">
      <div class="line-one">
        <span class="marchent-name">{{ merchant.shopNameTH }}</span>
        <p class="isOpen open" v-show="merchant.isOpen == 'Y'">เปิดอยู่</p>
        <p class="isOpen close" v-show="merchant.isOpen == 'N'">ปิดแล้ว</p>
      </div>
      <div class="merchant-detail">
        <span>{{ merchant.subcategoryName }} | </span>
        <span v-show="merchant.priceLevel == 1"
          ><span class="no-price">$</span>$$$</span
        >
        <span v-show="merchant.priceLevel == 2"
          ><span class="no-price">$$</span>$$</span
        >
        <span v-show="merchant.priceLevel == 3"
          ><span class="no-price">$$$</span>$</span
        >
        <span class="no-price" v-show="merchant.priceLevel == 4">$$$$</span>
        | {{ merchant.addressDistrictName }} {{ merchant.addressProvinceName }}
        <!-- <span :v-for="(facilitie, index) in merchant.facilities" :key="index">
          {{ index }}
        </span> -->
        <hr />
      </div>
      xxxxxx
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["merchant"],
};
</script>
<style>
.merchant-detail {
  color: rgb(175, 175, 175);
  margin-bottom: 20px;
}
.data {
  float: block;
}
.line-one {
  display: flex;
}
.isOpen {
  color: white;
  padding: 0px 6px;
  border-radius: 5px;
  margin-left: 10px;
}
.open {
  background: green;
}
.close {
  background: gray;
}
.marchent-name {
  font-size: 2em;
  margin: 0;
}

.card {
  display: grid;
  grid-template-columns: 250px auto;
  gap: 20px;
  padding: 5px;
  word-wrap: break-word;
}
.card {
  background: white;
  margin-bottom: 15px;
  height: auto;
}

.no-price {
  color: rgb(20, 20, 20);
}

hr {
  width: 80%;
  float: left;
  border-top: solid rgb(230, 230, 230) 0.3px;
  border-left: none;
  border-right: none;
  border-bottom: none;
}

.card-image {
  display: block;
  height: 250px;
  width: 250px;
}

.card-image > img {
  display: block;
  margin: auto;
  width: 100%;
  height: 250px;
  object-fit: cover;
  float: left;
  border-radius: 3px;
}
@media screen and (max-width: 600px) {
  .card-image {
    width: 100%;
  }
  .card {
    display: block;
  }
}
</style>