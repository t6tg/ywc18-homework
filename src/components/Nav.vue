<template>
    <div class="navigation">
        <nav>
            <div id="MobileNav" class="overlay">
                <div class="back">
                    <a class="closebtn" v-on:click="closeNav"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            class=""
                            data-icon="left"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                            ></path>
                        </svg>
                        ย้อนกลับ</a
                    >
                </div>
                <div class="content">
                    <categories id="m-filter" />
                </div>
            </div>
            <img src="../assets/halfhalf-logo.png" alt="half-logo" id="logo" />
            <img
                src="../assets/half-min.png"
                alt="half-min-logo"
                id="min-logo"
            />
            <select name="location" id="location">
                <option>📌 พื้นที่ใกล้ฉัน</option>
                <option>🗺 สถานที่ทั้งหมด</option>
                <option disabled>----------------------------</option>
                <option
                    v-for="(province, index) in this.$store.state.provinces"
                    :key="index"
                >
                    {{ province }}
                </option>
            </select>
            <input
                type="search"
                placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
                id="search-box"
                name="search"
                enterkeyhint="search"
            />
            <button id="search-button">
                <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    class=""
                    data-icon="search"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                    ></path>
                </svg>
            </button>
            <img
                v-on:click="openNav"
                src="../assets/filter.png"
                alt="filter"
                id="filter"
            />
        </nav>
    </div>
</template>
<script>
import Categories from './Categories.vue'
export default {
    name: 'Nav',
    components: {
        Categories
    },
    methods: {
        openNav() {
            document.getElementById('MobileNav').style.width = '100%'
            document.getElementById('m-filter').style.display = 'block'
        },
        closeNav() {
            document.getElementById('MobileNav').style.width = '0%'
            document.getElementById('m-filter').style.display = 'none'
        }
    }
}
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
svg {
    margin-top: 5px;
}

.navigation {
    width: 100%;
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
    background: #fff;
}
.navber {
    width: 80%;
}

.overlay {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background: white;
    overflow-x: hidden;
    transition: 0.5s;
}
.back {
    width: 100%;
    padding: 6px;
    background: rgb(39, 57, 124);
    font-size: 20px;
}
.overlay a {
    text-decoration: none;
    color: white;
    display: block;
    padding: 20px;
}

.content {
    padding: 20px;
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