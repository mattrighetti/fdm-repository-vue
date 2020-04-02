<template>
    <div class="border shadow">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 mb-4">
                    <div v-if="header.acronym == null">
                        <h1>{{ header.name }}</h1>
                    </div>
                    <div v-else>
                        <h1>{{ header.acronym }}</h1>
                        <p class="display-5">{{ header.name }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <FilterCapsuleRow v-for="(value, filter) in filters" v-bind:key="filter" :filter_name="filter" :filter_values="value" />
            </div>
        </div>
    </div>
</template>

<script>
    import FilterCapsuleRow from './FilterCapsuleRow'

    export default {
        name: 'CardSection',
        components: {
            FilterCapsuleRow
        },
        data() {
            return {
                header: {
                    name: "JRC for commercial sector (Europe)",
                    acronym: "Suca",
                    version: null,
                    cod: "Europe",
                    soa: "Macroscale",
                    floodtypei: "Riverine",
                    floodtypeii: "Both",
                    modeltypei: "Absolute",
                    modeltypeii: "Empirical",
                    modeltypeiii: "Deterministic",
                    eis: "Commercial sector"
                }
            }
        },
        computed: {
            filters() {
                var filters = {};
                filters['Country of development'] = this.header.cod;
                filters['Scale of analysis'] = this.header.soa;
                filters['Flood type I'] = this.header.floodtypei;
                filters['Flood type II'] = this.header.floodtypeii;
                filters['Model type I'] = this.header.modeltypei;
                filters['Model type II'] = this.header.modeltypeii;
                filters['Model type III'] = this.header.modeltypeiii;
                filters['Exposed Items'] = this.header.eis;
                console.log(filters)
                return filters;
            }
        }
    }
</script>

<style scoped>
    .border {
        border: 0.5px solid #c6dadc40 !important;
        border-radius: 25px;
        padding: 15px;
        margin-left: 100px;
        margin-right: 100px;
    }
</style>