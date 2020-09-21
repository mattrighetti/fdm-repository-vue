<template>
    <div class="container mx-auto">
        <SearchBar />
        <FilterBox :dropdown="{ name : 'name', values: ['one', 'two', 'three'] }" />
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import FilterBox from '@/components/FilterBox'

export default {
    name: "Home",
    components: {
        SearchBar,
        FilterBox
    }
};
</script>
