<template>
    <div>
        <b-dropdown :text="filter.filter_selected" menu-class="w-100" :class="'mb-2'" block variant="light">
            <b-dropdown-item @click="filter_clicked(id, index)" v-bind:key="filter_item" v-for="(filter_item, index) in filter.filter_items">{{ filter_item }}
            </b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        name: 'Dropdown',
        props: ['id', 'filter'],
        methods: {
            filter_clicked: function(id, index) {
                this.$emit("filter_clicked", id, index);
            }
        }
    }
</script>