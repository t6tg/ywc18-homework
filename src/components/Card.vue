<template>
    <div class="card">
        <div class="card-image">
            <img class="img" :src="merchant.coverImageId" alt="img" />
        </div>
        <div class="data">
            <div class="line-one">
                <span class="marchent-name">{{ merchant.shopNameTH }}</span>
                <div>
                    <p class="isOpen open" v-show="merchant.isOpen == 'Y'">
                        เปิดอยู่
                    </p>
                    <p class="isOpen close" v-show="merchant.isOpen == 'N'">
                        ปิดแล้ว
                    </p>
                </div>
            </div>
            <div class="merchant-detail">
                <span>{{ merchant.subcategoryName }} | </span>
                <span v-show="merchant.priceLevel == 1"
                    ><span class="no-price">฿</span>฿฿฿</span
                >
                <span v-show="merchant.priceLevel == 2"
                    ><span class="no-price">฿฿</span>฿฿</span
                >
                <span v-show="merchant.priceLevel == 3"
                    ><span class="no-price">฿฿฿</span>฿</span
                >
                <span class="no-price" v-show="merchant.priceLevel == 4"
                    >฿฿฿฿</span
                >
                | {{ merchant.addressDistrictName }}
                {{ merchant.addressProvinceName }}
            </div>
            <hr />
            <br />
            <div class="recommend">
                <b>เมนูแนะนำ : </b>
                <span
                    v-for="(recommendedItems,
                    index) in merchant.recommendedItems"
                    :key="index"
                >
                    {{ recommendedItems
                    }}<span
                        v-show="index < merchant.recommendedItems.length - 1"
                        >,</span
                    >
                </span>
            </div>
            <div>
                <div class="highlightText" v-html="merchant.highlightText">
                    {{ merchant.highlightText }}
                </div>
                <div
                    class="facilitie"
                    v-for="(facilitie, index) in merchant.facilities"
                    :key="index"
                >
                    <img
                        v-show="facilitie == 'ที่จอดรถ'"
                        src="../assets/ที่จอดรถ.png"
                        :alt="facilitie"
                    />
                    <img
                        v-show="facilitie == 'รับจองล่วงหน้า'"
                        src="../assets/รับจองล่วงหน้า.png"
                        :alt="facilitie"
                    />
                    <img
                        v-show="facilitie == 'สามารถนำสัตว์เลี้ยงเข้าได้'"
                        src="../assets/สามารถนำสัตว์เลี้ยงเข้าได้.png"
                        :alt="facilitie"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['merchant']
}
</script>
<style>
.highlightText,
.merchant-detail,
.recommend {
    color: rgb(110, 110, 110);
}
.facilitie > img {
    width: 25px;
}
.facilitie {
    float: left;
    margin: 20px 5px 0px 0px;
    border-radius: 25px;
    padding: 3px;
    width: 25px;
    height: 25px;
    border: rgb(27, 195, 0) solid 1px;
}
.merchant-detail {
    margin-bottom: 10px;
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
    font-size: 14px;
}
.open {
    background: rgb(27, 195, 0);
}
.close {
    background: gray;
}
.marchent-name {
    font-size: 1.25rem;
    margin-top: 10px;
}

.card {
    display: grid;
    grid-template-columns: 250px auto;
    gap: 5px;
    padding: 5px;
    word-wrap: break-word;
    border: rgb(218, 219, 220) solid 1px;
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
    height: 230px;
    width: 230px;
}

.card-image > img {
    display: block;
    margin: auto;
    width: 100%;
    height: 230px;
    object-fit: cover;
    float: left;
    border-radius: 3px;
}
@media screen and (max-width: 600px) {
    .facilitie {
        margin-bottom: 20px;
    }
    .card-image {
        width: 100%;
    }
    .data {
        padding: 0px 15px;
    }
    .card {
        display: flex;
        flex-direction: column;
        height: fit-content;
        padding: 0px;
    }
    .highlightText,
    .merchant-detail,
    .recommend {
        font-size: 0.8rem;
    }
}
</style>