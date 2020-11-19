<template>
    <div id="app">
        <Nav />
        <m-filter />
        <link-bar />
        <Main />
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
import LinkBar from './components/LinkBar.vue'
import Main from './components/Main'
import MFilter from './components/MFilter.vue'

export default {
    name: 'App',
    components: {
        Nav,
        LinkBar,
        Main,
        MFilter
    },
    async created() {
        const r = await fetch('https://panjs.com/ywc18.json')
        const data = await r.json()
        this.$store.state.categories = data.categories
        this.$store.state.provinces = data.provinces
        this.$store.state.merchants = data.merchants
        this.$store.state.filter = data.merchants
        this.$store.state.priceRange = data.priceRange
    }
}
</script>

<style>
body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
    background: url('./assets/bg.png');
    background-position: center;
}
button,
select,
input {
    font-family: 'Kanit', sans-serif;
}
</style>
