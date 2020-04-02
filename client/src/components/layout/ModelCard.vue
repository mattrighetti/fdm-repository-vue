<template>
    <div>
        <b-card 
            no-body 
            header-bg-variant="white"
            :class="'shadow-sm no-border p-3'">
            <router-link :to="'/model/' + model.id">
            {{ model.acronym != null ? model.acronym : model.name }}
            </router-link>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'ModelCard',
    props: ['model']
}
</script>

<style scoped>
    .no-border {
        border: none;
    }

    .shadow-sm {
        box-shadow: 0 0.05rem 0.25rem rgba(0, 0, 0, 0.1) !important;
    }

    a, a:hover {
        color: black;
    }
</style>