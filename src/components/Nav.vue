<template>
  <nav>
    <img src="../assets/halfhalf-logo.png" alt="half-logo" id="logo" />
    <img src="../assets/half-min.png" alt="half-min-logo" id="min-logo" />
    <select name="location" id="location">
      <option>📍 พื้นที่ใกล้ฉัน</option>
      <option>📍 สถานที่ทั้งหมด</option>
      <option disabled>----------------------------</option>
      <option
        v-for="(province, index) in this.$store.state.provinces"
        :key="index"
      >
        {{ province }}
      </option>
    </select>
    <input
      type="text"
      placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
      id="search-box"
      name="search"
      value=""
      :v-model="search"
      v-on:keydown="Search"
    />
    <button id="search-button">🔍</button>
    <img src="../assets/filter.png" alt="filter" id="filter" />
  </nav>
</template>
<script>
export default {
  name: "Nav",
  data: function () {
    return {
      search: "",
    };
  },
  methods: {
    Search() {
      return this.$store.state.merchants.filter((r) => {
        r.shopNameTH.includes(this.search);
      });
    },
  },
};
</script>
<style scoped>
select,
#search-box,
#search-button {
  -webkit-appearance: none;
  outline: none;
  height: 80%;
  -webkit-box-sizing: border-box;
}

#filter {
  display: none;
}

#logo {
  height: 70%;
  margin-right: 40px;
}

#min-logo {
  display: none;
}

#location {
  background: #fff;
  border: 0.5px solid #b9b8b8;
  border-right: none;
  width: 15%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0px 15px;
}

#search-button {
  width: 4%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 0.5px solid #b9b8b8;
  border-left: none;
  cursor: pointer;
}

#search-box {
  padding: 0px 10px;
  border: 0.5px solid #b9b8b8;
  width: 50%;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 0px;
  height: 50px;
}
.navber {
  width: 80%;
}
@media screen and (max-width: 600px) {
  #logo {
    display: none;
  }
  #filter {
    display: inline-block;
    height: 20px;
    border: none;
    background: none;
    padding: 10px;
    margin-left: 10px;
    width: auto;
  }
  #min-logo {
    display: inline;
    height: 80%;
    margin-right: 10px;
  }
  #location {
    display: none;
  }
  #search-box {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  nav {
    display: flex;
    justify-content: center;
    width: 95%;
    margin: auto;
  }
  #search-button {
    width: 15%;
  }
}
</style>