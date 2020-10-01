<template>
    <div class="px-3 lg:px-20 mb-20">
        <p class="text-3xl mt-5">Models</p>
        <!-- <SearchBar class="mb-5"/> -->
        <div class="grid grid-cols-10 gap-4">
            <div class="col-span-10 md:col-span-7 xl:col-span-8">
                <ModelCard v-for="model in filtered_models" :key="model.name" :model="model" :query_array="query_array" class="mb-1"/>
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
import { getModels } from '@/services/models.services'
import { getDropdownConfig } from '@/services/utils.services'

export default {
    name: "Home",
    components: { SearchBar, FilterBox, ModelCard },
    data() {
        return {
            dropdown_config: {},
            models: []
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
                return this.getModels()
            }
        },
        query_array: {
            get() {
                var array = []
                Object.values(this.query).filter(value => value != null).forEach(value => array.push(value))
                return array
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
                    if (!model[key].includes(value)) {
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
    mounted() {
        getModels().then(response => this.models = response.data).catch(err => console.log(err))
        getDropdownConfig().then(config => this.dropdown_config = config).catch(err => console.log(err))
    }
};
</script>
