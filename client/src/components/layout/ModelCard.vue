<template>
    <div>
        <b-card 
            no-body 
            header-bg-variant="white" 
            v-bind:header="model.acronym != null ? model.acronym : model.name" 
            :class="'shadow-sm no-border'">
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
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.13) !important;
    }
</style>