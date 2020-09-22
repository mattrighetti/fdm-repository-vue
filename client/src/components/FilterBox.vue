<template>
    <div class="border border-gray-300 rounded px-4 py-4 w-100">
        <p class="flex justify-center text-2xl mb-3">Filter by</p>
        <div class="grid grid-cols-6 gap-1">
            <DropdownBox v-for="filter in filterbox" :key="filter.name" :dropdown="filter" class="mt-2 col-span-6"/>
            <button class="col-span-6 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded mt-2">Reset</button>
        </div>
    </div>
</template>

<script>
import DropdownBox from '@/components/DropdownBox'

export default {
    name: "FilterBox",
    props: {
        filterbox: Array
    },
    components: {
        DropdownBox
    },
    setup() {

    }
}
</script>