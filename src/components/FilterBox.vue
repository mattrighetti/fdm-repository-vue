<template>
    <div class="border border-gray-300 rounded px-4 py-4 w-100">
        <p class="flex justify-center text-2xl mb-3">Filter by</p>
        <div class="grid grid-cols-6 gap-1">
            <DropdownBox 
            v-for="(filter_value, filter_key) in filterbox" 
            :key="filter_key"
            :dropdown="filter_value"
            :identifier="filter_key"
            @update-selected="update_dropdown"
            class="mt-2 col-span-6"
            />
            <button @click="reset" class="col-span-6 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded mt-2">Reset</button>
        </div>
    </div>
</template>

<script>
import DropdownBox from '@/components/DropdownBox'
import { watchEffect } from 'vue'

export default {
    name: "FilterBox",
    props: {
        filterbox: Object
    },
    components: {
        DropdownBox
    },
    setup(props, { emit }) {
        function reset() {
            emit('reset')
        }

        function update_dropdown(object) {
            emit('update-dropdown', object)
        }

        return {
            reset,
            update_dropdown
        }
    }
}
</script>