<template>
    <div class="w-screen px-20">
        <SearchBar class="mb-5"/>
        <div class="grid grid-cols-10 gap-4">
            <div class="col-span-10 md:col-span-7 xl:col-span-8">
                <ModelCard v-for="model in filtered_models" :key="model.name" :model="model" class="mb-1"/>
            </div>
            <div class="col-span-10 md:col-span-3 xl:col-span-2">
                <FilterBox :filterbox="dropdown_config" @reset="reset" @update-dropdown="update_dropdown"/>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import FilterBox from '@/components/FilterBox'
import ModelCard from '@/components/ModelCard'
import { reactive, computed, watchEffect, watch } from 'vue'

export default {
    name: "Home",
    data() {
        return {
            dropdown_config: {
                cod: { name: 'Country', values: ['one', 'two', 'three'], selected: null },
                soa: { name: 'Scale', values: ['one1', 'two1', 'three1'], selected: null },
                floodtypei: { name: 'Flood Type I', values: ['one2', 'two2', 'three2'], selected: null },
                floodtypeii: { name: 'Flood Type II', values: ['one2', 'two2', 'three2'], selected: null },
                modeltypei: { name: 'Model Type I', values: ['one2', 'two2', 'three2'], selected: null },
                modeltypeii: { name: 'Model Type II', values: ['one2', 'two2', 'three2'], selected: null },
                modeltypeiii: { name: 'Model Type III', values: ['one2', 'two2', 'three2'], selected: null },
                eis: { name: 'Exposed items', values: ['one2', 'two2', 'three2'], selected: null }
            },
            models: [
                {
                    "id": 35,
                    "name": "AGRIDE-c for the Po region",
                    "acronym": null,
                    "version": null,
                    "cod": "Italy",
                    "soa": "Microscale",
                    "floodtypei": "Riverine",
                    "floodtypeii": "Low velocity",
                    "modeltypei": "Relative",
                    "modeltypeii": "Synthetic",
                    "modeltypeiii": "Deterministic",
                    "eis": "Agricultural crops"
                },
                {
                    "id": 47,
                    "name": "Bignami et al. (bivariate model)",
                    "acronym": null,
                    "version": null,
                    "cod": "Italy",
                    "soa": "Mesoscale",
                    "floodtypei": "Riverine",
                    "floodtypeii": "Low velocity",
                    "modeltypei": "Absolute",
                    "modeltypeii": "Empirical",
                    "modeltypeiii": "Deterministic",
                    "eis": "Residential buildings/Commercial sector"
                },
                {
                    "id": 45,
                    "name": "Bignami et al. (urban coverage index)",
                    "acronym": null,
                    "version": null,
                    "cod": "Italy",
                    "soa": "Mesoscale",
                    "floodtypei": "Riverine",
                    "floodtypeii": "Low velocity",
                    "modeltypei": "Absolute",
                    "modeltypeii": "Empirical",
                    "modeltypeiii": "Deterministic",
                    "eis": "Residential buildings/Commercial sector"
                },
                {
                    "id": 44,
                    "name": "Bignami et al. (water depth)",
                    "acronym": null,
                    "version": null,
                    "cod": "Italy",
                    "soa": "Mesoscale",
                    "floodtypei": "Riverine",
                    "floodtypeii": "Low velocity",
                    "modeltypei": "Absolute",
                    "modeltypeii": "Empirical",
                    "modeltypeiii": "Deterministic",
                    "eis": "Residential buildings/Commercial sector"
                },
                {
                    "id": 46,
                    "name": "Bignami et al. (water velocity)",
                    "acronym": null,
                    "version": null,
                    "cod": "Italy",
                    "soa": "Mesoscale",
                    "floodtypei": "Riverine",
                    "floodtypeii": "Low velocity",
                    "modeltypei": "Absolute",
                    "modeltypeii": "Empirical",
                    "modeltypeiii": "Deterministic",
                    "eis": "Residential buildings/Commercial sector"
                },
                {
                    "id": 41,
                    "name": "Dutta et al. for agricultural crops",
                    "acronym": null,
                    "version": null,
                    "cod": "Japan",
                    "soa": "Mesoscale",
                    "floodtypei": "Riverine",
                    "floodtypeii": "Low velocity",
                    "modeltypei": "Relative",
                    "modeltypeii": "Empirical",
                    "modeltypeiii": "Deterministic",
                    "eis": "Agricultural crops"
                },
                {
                    "id": 43,
                    "name": "Dutta et al. for non-residential buildings",
                    "acronym": null,
                    "version": null,
                    "cod": "Japan",
                    "soa": "Mesoscale",
                    "floodtypei": "Riverine",
                    "floodtypeii": "Low velocity",
                    "modeltypei": "Relative",
                    "modeltypeii": "Empirical",
                    "modeltypeiii": "Deterministic",
                    "eis": "Non-residential buildings"
                },
                {
                    "id": 42,
                    "name": "Dutta et al. for residential buildings",
                    "acronym": null,
                    "version": null,
                    "cod": "Japan",
                    "soa": "Mesoscale",
                    "floodtypei": "Riverine",
                    "floodtypeii": "Low velocity",
                    "modeltypei": "Relative",
                    "modeltypeii": "Empirical",
                    "modeltypeiii": "Deterministic",
                    "eis": "Residential buildings"
                },
                {
                    "id": 38,
                    "name": "Flood Loss Estimation Model for the commercial sector",
                    "acronym": "FLEMOcs+",
                    "version": null,
                    "cod": "Germany",
                    "soa": "Microscale",
                    "floodtypei": "Riverine",
                    "floodtypeii": "Low velocity",
                    "modeltypei": "Relative",
                    "modeltypeii": "Empirical",
                    "modeltypeiii": "Deterministic",
                    "eis": "Commercial sector/Industrial sector"
                },
                {
                    "id": 40,
                    "name": "Flood Loss Estimation Model for the private sector",
                    "acronym": "FLEMOps+ at the mesoscale",
                    "version": null,
                    "cod": "",
                    "soa": "",
                    "floodtypei": "",
                    "floodtypeii": "",
                    "modeltypei": "",
                    "modeltypeii": "",
                    "modeltypeiii": "",
                    "eis": ""
                },
                {
                    "id": 4,
                    "name": "Flood Loss Estimation Model for the private sector",
                    "acronym": "FLEMOps+ at the microscale",
                    "version": null,
                    "cod": "Germany",
                    "soa": "Microscale",
                    "floodtypei": "Riverine",
                    "floodtypeii": "Low velocity",
                    "modeltypei": "Relative",
                    "modeltypeii": "Empirical",
                    "modeltypeiii": "Deterministic",
                    "eis": "Residential buildings"
                }
            ]
        }
    },
    computed: {
        query: {
            get() {
                return this.getQuery()
            }
        },
        filtered_models: {
            get() {
                var mod = this.getModels(this.query)
                console.log("Filtered models", mod)
                return mod
            }
        }
    },
    methods: {
        getModels() {
            var hidden = []

            this.models.forEach(model => {
                Object.entries(this.query)
                .filter(([, value]) => value != null)
                .forEach(([key, value]) => {
                    if (model[key] !== value) {
                        hidden.push(model.id);
                    }
                });
            });

            var models_shown = this.models.filter(model => {
                return !hidden.includes(model.id);
            });

            return models_shown;
        },
        getQuery() {
            var query_object = {}

            Object.keys(this.dropdown_config).forEach((key) => {
                query_object[key] = this.dropdown_config[key].selected
            });
            
            return query_object
        },
        update_dropdown(object) {
            this.dropdown_config[object.id].selected = object.selected
        },
        reset() {
            Object.keys(this.dropdown_config).forEach((key) => {
                this.dropdown_config[key].selected = null
            });
        }
    },
    components: {
        SearchBar,
        FilterBox,
        ModelCard
    }
};
</script>
