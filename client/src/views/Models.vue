<template>
    <div class="w-screen px-20">
        <SearchBar class="mb-5"/>
        <div class="grid grid-cols-10 gap-4">
            <div class="col-span-8">
                <ModelCard v-for="model in models" :key="model.name" :model="model" class="mb-1"/>
            </div>
            <div class="col-span-2">
                <FilterBox :filterbox="dropdown_prototype"/>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import FilterBox from '@/components/FilterBox'
import ModelCard from '@/components/ModelCard'

export default {
    name: "Home",
    setup() {
        const dropdown_prototype = [
            { name : 'Country', values: ['one', 'two', 'three'] },
            { name : 'Scale', values: ['one1', 'two1', 'three1'] },
            { name : 'Flood Type I', values: ['one2', 'two2', 'three2'] }
        ]

        const models = [
            { name : 'SREGv SREGv SREGv', pills: ['one', 'two', 'three'] },
            { name : 'SREGa', pills: ['one1', 'two1', 'three1'] },
            { name : 'SREGc', pills: ['one2', 'two2', 'three2'] },
            { name : 'SREGw', pills: ['one', 'two', 'three'] },
            { name : 'SREGaa', pills: ['one1', 'two1', 'three1'] },
            { name : 'SREGf', pills: ['one2', 'two2', 'three2'] }
        ]

        return {
            dropdown_prototype,
            models
        }
    },
    components: {
        SearchBar,
        FilterBox,
        ModelCard
    }
};
</script>
