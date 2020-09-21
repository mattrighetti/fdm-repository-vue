<template>
    <div class="container mx-auto">
        <SearchBar />
        <DropdownBox v-for="dd in dropdown_prototype" :key="dd.name" :dropdown="dd" />
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import DropdownBox from '@/components/DropdownBox'

export default {
    name: "Home",
    setup() {
        const dropdown_prototype = [
            { name : 'name', values: ['one', 'two', 'three'] },
            { name : 'Cod', values: ['one1', 'two1', 'three1'] },
            { name : 'name2', values: ['one2', 'two2', 'three2'] }
        ]

        return {
            dropdown_prototype
        }
    },
    components: {
        SearchBar,
        DropdownBox
    }
};
</script>
