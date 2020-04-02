<template>
    <div class="container-fluid pt-5">
        <div class="row">
            <div class="col-sm-9 mb-4">
                <input class="form-control" type="text" placeholder="Search model" aria-label="Search" id="searchInput">
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
        },
        getModels: function(active_filters) {
            var hidden = []
            this.models.forEach(model => {
                Object.keys(active_filters).forEach(filter_identifier => {
                    if (model[filter_identifier] !== active_filters[filter_identifier]) {
                        hidden.push(model.id);
                    }
                });
            });
            
            var models_shown = this.models.filter(model => {
                return !hidden.includes(model.id);
            });

            return models_shown;
        }
    },
    mounted: function() {
        ModelsServices.getModels()
            .then(response => {
                this.models = response.data;
            });
    }
}
</script>