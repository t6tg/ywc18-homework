<template>
    <div>
        <div
            class="card-list"
            v-for="(merchant, index) in this.$store.state.merchants"
            :key="index"
        >
            <Card :merchant="merchant" />
        </div>
        <button class="btn-more">ดูเพิ่มเติม</button>
    </div>
</template>

<script>
import Card from './Card'
export default {
    name: 'CardList',
    components: {
        Card
    }
}
</script>

<style>
.btn-more {
    display: block;
    margin: auto;
    margin-bottom: 20px;
    width: 50%;
    border-radius: 10px;
    border: none;
    padding: 18px;
    outline: none;
    cursor: pointer;
    background: #fff;
}
@media screen and (max-width: 600px) {
    .btn-more {
        width: 90%;
    }
}
</style>