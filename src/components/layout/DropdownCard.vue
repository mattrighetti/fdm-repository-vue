<template>
    <div>
        <b-card header="Filter by" text-variant="white" header-bg-variant="darkblue" :class="'no-border'">
            <Dropdown :filter_items="dropdown_country" :text="'Country'" />
            <Dropdown :filter_items="dropdown_country" :class="'mt-2'" :text="'Scale'" />
            <Dropdown :filter_items="dropdown_country" :class="'mt-2'" :text="'Flood Type I'" />
            <Dropdown :filter_items="dropdown_country" :class="'mt-2'" :text="'Flood Type II'" />
            <Dropdown :filter_items="dropdown_country" :class="'mt-2'" :text="'Model Type I'" />
            <Dropdown :filter_items="dropdown_country" :class="'mt-2'" :text="'Model Type II'" />
            <Dropdown :filter_items="dropdown_country" :class="'mt-2'" :text="'Model Type III'" />
            <Dropdown :filter_items="dropdown_country" :class="'mt-2'" :text="'Exposed Items'" />
            <button class="btn btn-danger btn-block mt-2 shadow-sm" id="reset-filters">
                Reset
            </button>
        </b-card>
    </div>
</template>

<script>
    import Dropdown from './Dropdown'

    export default {
        name: 'DropdownCard',
        components: {
            Dropdown
        },
        data() {
            return {
                dropdown_country: ['Italy', 'Germany'],
                dropdown_scale: [],
                dropdown_ft1: [],
                dropdown_ft2: [],
                dropdown_mt1: [],
                dropdown_mt2: [],
                dropdown_mt3: [],
                dropdown_eis: []
            }
        }
    }
</script>

<style scoped>
    .bg-darkblue {
        background-color: #253862;
    }

    .shadow-sm {
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.13) !important;
    }
</style>