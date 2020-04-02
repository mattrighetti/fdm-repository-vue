<template>
    <div class="container-fluid">
        <dl class="row">
            <dt class="col-sm-12 col-md-9">{{ filter_name }}</dt>
            <dd class="col-sm-0 col-md-3" v-if="filters.length == 1">
                <span class="badge badge-pill badge-info bg-lightblue mr-2">{{ filters[0] }}</span>
            </dd>
            <dd v-else class="col-sm-0 col-md-3">
                <span v-for="value in filters" v-bind:key="value" class="badge badge-pill badge-info bg-lightblue mr-2">{{ value }}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name: 'FilterCapsuleRow',
        props: ['filter_name', 'filter_values'],
        computed: {
            filters() {
                return this.filter_values.split('/');
            }
        }
    }
</script>

<style scoped>
dl {
    margin-bottom: 0rem;
}
</style>