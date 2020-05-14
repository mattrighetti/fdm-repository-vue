<template>
    <div class="container-fluid pt-5">
        <div class="row">
            <div class="col-sm-9 mb-4">
                <input class="form-control" type="text" placeholder="Search model" :value="searched_name" @input="searchByName">
            </div>
        </div>
        <div class="row">

            <!-- MODELS -->
            <div class="container-fluid col-sm-12 col-md-9">
                <div class="scene_element scene_element--fadeinup" v-for="model in models_shown" :key="model.id">
                    <ModelCard :model="model" :class="'mb-2'" />
                </div>
            </div>

            <!-- DROPDOWN -->
            <div class="container-fluid col-sm-12 col-md-3">
                <div class="text-center">
                    <DropdownCard @resetFilters="resetFilters" @updateFilter="updateFilter" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DropdownCard from './layout/DropdownCard'
import ModelCard from './layout/ModelCard'
import Vue from 'vue'
import ModelsServices from '@/services/ModelsServices'
import _ from 'lodash'

export default {
    name: 'models',
    components: {
        DropdownCard,
        ModelCard
    },
    data() {
        return {
            models: [],
            active_filters: {},
            searched_name: ""
        }
    },
    computed: {
        models_shown() {
            return this.getModels(this.active_filters);
        }
    },
    methods: {
        updateFilter: function(filter_identifier, filter_selected) {
            Vue.set(this.active_filters, filter_identifier, filter_selected)
        },
        resetFilters: function() {
            this.active_filters = {}
            this.searched_name = ""
            console.log(this.models)
        },
        getModels: function(active_filters) {
            var hidden = []
            this.models.forEach(model => {
                Object.keys(active_filters).forEach(filter_identifier => {
                    if (filter_identifier === 'name' || filter_identifier === 'acronym') {
                        if (model[filter_identifier].includes(active_filters[filter_identifier])) {
                            hidden.push(model.id)
                        }
                    } else if (model[filter_identifier] !== active_filters[filter_identifier]) {
                        hidden.push(model.id);
                    }
                });
            });
            
            var models_shown = this.models.filter(model => {
                return !hidden.includes(model.id);
            });

            return models_shown;
        },
        searchByName: _.debounce(function(event) {
            this.searched_name = event.target.value
            this.updateFilter('name', this.searched_name)
            this.updateFilter('acronym', this.searched_name)
        }, 300)
    },
    mounted: function() {
        ModelsServices.getModels()
            .then(response => {
                this.models = response.data;
            });
    }
}
</script>