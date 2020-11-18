<template>
    <div>
        <h3 v-show="this.$store.state.category_pick != 'ทั้งหมด'">
            ประเภท{{ this.$store.state.category_pick }}
        </h3>
        <form
            class="store-categories"
            v-show="this.$store.state.category_pick != 'ทั้งหมด'"
        >
            <div>
                <input
                    type="radio"
                    name="subcategories"
                    id="all"
                    value="all"
                    checked
                />
                <label for="all"> ทั้งหมด</label>
            </div>
            <div v-for="(subcategories, index) in this.mydata" :key="index">
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

<script>
export default {
    name: 'subCategories',
    props: ['category'],
    data: function () {
        return {
            mydata: []
        }
    },
    updated: function () {
        try {
            const get_data = this.$store.state.categories.filter(
                (o) => o.name == this.$store.state.category_pick
            )
            this.mydata = get_data[0].subcategories
        } catch (error) {
            console.log('Not Found')
        }
    }
}
</script>

<style>
</style>