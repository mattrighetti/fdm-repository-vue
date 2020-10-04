<template>
    <div class="pt-5 text-gray-500">
        <input 
            class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" 
            type="search" 
            name="search" 
            placeholder="Search" 
            v-model="search_string"
        >
    </div>
</template>

<script>
export default {
    name: "SearchBar",
    setup() {
        let search_string = ""

        return {
            search_string
        }
    }
}
</script>