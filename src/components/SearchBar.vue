<template>
    <div class="pt-3 pb-3">
        <input
            class="border-2 border-gray-200 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="text"
            name="search"
            placeholder="Search"
            v-model="inputValue"
        />
    </div>
</template>

<script>
    export default {
        name: "SearchBar",
        props: {
            search_string: ""
        },
        computed: {
            inputValue: {
                get() {
                    return this.search_string;
                },
                set(val) {
                    this.$emit('updated', val);
                }
            }
        }
    };
</script>
