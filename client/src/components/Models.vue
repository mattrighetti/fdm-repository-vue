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

export default {
    name: 'models',
    components: {
        DropdownCard,
        ModelCard
    },
    data() {
        return {
            models: [{
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
            }, {
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
            }, {
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
            }, {
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
            }, {
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
            }, {
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
            }, {
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
            }, {
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
            }, {
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
            }, {
                "id": 40,
                "name": "Flood Loss Estimation Model for the private sector",
                "acronym": "FLEMOps+ at the mesoscale",
                "version": null,
                "cod": "Germany",
                "soa": "Mesoscale",
                "floodtypei": "Riverine",
                "floodtypeii": "Low velocity",
                "modeltypei": "Relative",
                "modeltypeii": "Empirical",
                "modeltypeiii": "Deterministic",
                "eis": "Residential buildings"
            }, {
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
            }, {
                "id": 37,
                "name": "Flood Loss Function for Australian commercial structures",
                "acronym": "FLFAcs",
                "version": null,
                "cod": "Australia",
                "soa": "Microscale",
                "floodtypei": "Riverine",
                "floodtypeii": "Low velocity",
                "modeltypei": "Relative",
                "modeltypeii": "Empirical",
                "modeltypeiii": "Probabilistic",
                "eis": "Commercial sector"
            }, {
                "id": 36,
                "name": "Flood Loss Function for Australian residential structures",
                "acronym": "FLFArs",
                "version": null,
                "cod": "Australia",
                "soa": "Microscale",
                "floodtypei": "Riverine",
                "floodtypeii": "Low velocity",
                "modeltypei": "Relative",
                "modeltypeii": "Empirical",
                "modeltypeiii": "Probabilistic",
                "eis": "Residential buildings"
            }, {
                "id": 39,
                "name": "Flood Loss Function for Italian residential structures",
                "acronym": "FLF-IT",
                "version": null,
                "cod": "Italy",
                "soa": "Microscale",
                "floodtypei": "Riverine",
                "floodtypeii": "Low velocity",
                "modeltypei": "Relative",
                "modeltypeii": "Mixed",
                "modeltypeiii": "Probabilistic",
                "eis": "Residential buildings"
            }, {
                "id": 6,
                "name": "INSYDE",
                "acronym": null,
                "version": null,
                "cod": "Italy",
                "soa": "Microscale",
                "floodtypei": "Riverine",
                "floodtypeii": "Both",
                "modeltypei": "Both",
                "modeltypeii": "Synthetic",
                "modeltypeiii": "Both",
                "eis": "Residential buildings"
            }, {
                "id": 16,
                "name": "JRC for agricultural crops (Africa)",
                "acronym": null,
                "version": null,
                "cod": "Africa",
                "soa": "Macroscale",
                "floodtypei": "Riverine/Coastal",
                "floodtypeii": "Both",
                "modeltypei": "Absolute",
                "modeltypeii": "Empirical",
                "modeltypeiii": "Deterministic",
                "eis": "Agricultural crops"
            }, {
                "id": 17,
                "name": "JRC for agricultural crops (Asia)",
                "acronym": null,
                "version": null,
                "cod": "Asia",
                "soa": "Macroscale",
                "floodtypei": "Riverine/Coastal",
                "floodtypeii": "Both",
                "modeltypei": "Absolute",
                "modeltypeii": "Empirical",
                "modeltypeiii": "Deterministic",
                "eis": "Agricultural crops"
            }, {
                "id": 11,
                "name": "JRC for agricultural crops (Europe)",
                "acronym": null,
                "version": null,
                "cod": "Europe",
                "soa": "Macroscale",
                "floodtypei": "Riverine",
                "floodtypeii": "Both",
                "modeltypei": "Absolute",
                "modeltypeii": "Empirical",
                "modeltypeiii": "Deterministic",
                "eis": "Agricultural crops"
            }, {
                "id": 18,
                "name": "JRC for agricultural crops (North America)",
                "acronym": null,
                "version": null,
                "cod": "North America",
                "soa": "Macroscale",
                "floodtypei": "Riverine/Coastal",
                "floodtypeii": "Both",
                "modeltypei": "Absolute",
                "modeltypeii": "Empirical",
                "modeltypeiii": "Deterministic",
                "eis": "Agricultural crops"
            }, {
                "id": 28,
                "name": "JRC for commercial sector (Asia)",
                "acronym": null,
                "version": null,
                "cod": "Asia",
                "soa": "Macroscale",
                "floodtypei": "Riverine/Coastal",
                "floodtypeii": "Both",
                "modeltypei": "Absolute",
                "modeltypeii": "Empirical",
                "modeltypeiii": "Deterministic",
                "eis": "Commercial sector"
            }, {
                "id": 12,
                "name": "JRC for commercial sector (Europe)",
                "acronym": null,
                "version": null,
                "cod": "Europe",
                "soa": "Macroscale",
                "floodtypei": "Riverine",
                "floodtypeii": "Both",
                "modeltypei": "Absolute",
                "modeltypeii": "Empirical",
                "modeltypeiii": "Deterministic",
                "eis": "Commercial sector"
            }, {
                "id": 29,
                "name": "JRC for commercial sector (North America)",
                "acronym": null,
                "version": null,
                "cod": "North America",
                "soa": "Macroscale",
                "floodtypei": "Riverine/Coastal",
                "floodtypeii": "Both",
                "modeltypei": "Absolute",
                "modeltypeii": "Empirical",
                "modeltypeiii": "Deterministic",
                "eis": "Commercial sector"
            }],
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
            console.log("Edited");
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

            console.log(models_shown);

            return models_shown;
        }
    }
}
</script>

<style scoped>
.custom-padding {
    padding: 0.0rem !important;
    margin: 0.0rem !important;
}

.justify-text {
    text-align: justify;
}

.col .list-footer {
    color: white;
    padding-top: 1em;
    padding-inline-start: 5px;
    list-style-type: none;
}

.col .list-footer a {
    color: white;
}

.w-60 {
    width: 17rem;
}

.btn-light {
    color: black;
    background-color: #fdf9f9;
    border-color: #f6f6f6;
}

.btn-full {
    width: 100%;
    margin: 0.1em;
}

.position-fixed {
    top: 11em;
    right: 1em;
}

.nav-icon {
    text-align: center;
}

.nav-icon-text {
    text-align: center;
}

.space-small {
    margin-bottom: 85px;
}

.space-medium {
    margin-bottom: 118px;
}

.space-large {
    margin-bottom: 350px;
}

.model-card a {
    color: #000000;
}

.model-card:hover {
    background-color: #ebecee !important;
    transition-duration: 0.3s;
}

.scene_element {
    animation-duration: 0.5s;
    transition-timing-function: ease-in;
    animation-fill-mode: both;
}

.scene_element--fadein {
    animation-name: fadeIn;
}

.scene_element--fadeinup {
    animation-name: fadeInUp;
}

.scene_element--fadeinright {
    animation-name: fadeInRight;
}

.scene_element--fadeinleft {
    animation-name: fadeInLeft;
}

@keyframes fadeSiteIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeSiteOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }

    100% {
        opacity: 1;
        transform: none;
    }
}

@keyframes fadeInRight {
    0% {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    100% {
        opacity: 1;
        transform: none;
    }
}

@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    100% {
        opacity: 1;
        transform: none;
    }
}
</style>