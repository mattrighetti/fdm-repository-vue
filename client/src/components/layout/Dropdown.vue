<template>
    <div>
        <b-dropdown :text="text" menu-class="w-100" :id="id" block variant="light">
            <b-dropdown-item v-bind:key="filter_item" v-for="filter_item in filter_items">{{ filter_item }}
            </b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        name: 'Dropdown',
        props: ['text', 'id', 'filter_items']
    }
</script>