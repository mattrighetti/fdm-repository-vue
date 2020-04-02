<template>
    <div>
        <b-card header="Filter by" text-variant="white" header-bg-variant="darkblue" :class="'no-border'">
            <Dropdown v-for="(dropdown, index) in dropdowns" :key="index" :id="index" :filter="dropdown" @filter_clicked="updateFilter" />
            <button class="btn btn-danger btn-block mt-2 shadow-sm" @click="resetFilters">
                Reset
            </button>
        </b-card>
    </div>
</template>

<script>
    import Dropdown from './Dropdown'
    import ModelsServices from '@/services/ModelsServices'

    export default {
        name: 'DropdownCard',
        components: {
            Dropdown
        },
        data() {
            return {
                dropdowns: [
                    {
                        filter_type: 'Country',
                        filter_identifier: 'cod',
                        filter_selected: 'Country',
                        filter_items: ['Italy', 'Germany']
                    },
                    {
                        filter_type: 'Scale',
                        filter_identifier: 'soa',
                        filter_selected: 'Scale',
                        filter_items: ['Microscale', 'Mesoscale', 'Macroscale']
                    },
                    {
                        filter_type: 'Flood Type I',
                        filter_identifier: 'floodtypei',
                        filter_selected: 'Flood Type I',
                        filter_items: ['Riverine', 'Pluvial', 'Coastal']
                    },
                    {
                        filter_type: 'Flood Type II',
                        filter_identifier: 'floodtypeii',
                        filter_selected: 'Flood Type II',
                        filter_items: ['High velocity', 'Low velocity', 'Both']
                    },
                    {
                        filter_type: 'Model Type I',
                        filter_identifier: 'modeltypei',
                        filter_selected: 'Model Type I',
                        filter_items: ['Relative', 'Absolute', 'Both']
                    },
                    {
                        filter_type: 'Model Type II',
                        filter_identifier: 'modeltypeii',
                        filter_selected: 'Model Type II',
                        filter_items: ['Empirical', 'Deterministic', 'Mixed']
                    },
                    {
                        filter_type: 'Model Type III',
                        filter_identifier: 'modeltypeiii',
                        filter_selected: 'Model Type III',
                        filter_items: ['Deterministic', 'Probabilistic', 'Both']
                    },
                    {
                        filter_type: 'Exposed Items',
                        filter_identifier: 'eis',
                        filter_selected: 'Exposed Items',
                        filter_items: ['Vehicles', 'People']
                    }
                ]
            }
        },
        methods: {
            updateFilter: function(id, index) {
                this.dropdowns[id].filter_selected = this.dropdowns[id].filter_items[index];
                this.$emit("updateFilter", this.dropdowns[id].filter_identifier, this.dropdowns[id].filter_selected);
            },
            resetFilters: function() {
                this.dropdowns.forEach(element => {
                    element.filter_selected = element.filter_type;
                    this.$emit("resetFilters");
                });
            }
        },
        created: function() {
            ModelsServices.getDynamicFilters().then((filters_dict) => {
                this.dropdowns[0].filter_items = filters_dict.countryFilters.data
                this.dropdowns[7].filter_items = filters_dict.eisFilters.data
            })
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