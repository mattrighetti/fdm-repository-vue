<template>
    <div class="container mt-5">
        <div class="border shadow">
            <div class="container">
                <template v-if="model_data.acronym == nil">
                    <h1 class="mb-5">{{ model_data.name }}</h1>
                </template>
                <template v-else>
                    <h1>{{ model_data.acronym }}</h1>
                    <h3 class="mb-5">{{ model_data.name }}</h3>
                </template>
                <div class="row mb-1" v-for="(item, key) in filter_section_dict" :key="key">
                    <div class="col-sm-12 col-md-3">{{ key }}</div>
                    <div class="col-sm-12 col-md-9">
                        <span class="badge badge-pill badge-info">{{ model_data[item] }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <div class="markdown-body" v-html="compiledMarkdown"></div>
        </div>
    </div>
</template>

<script>
import ModelsServices from '@/services/ModelsServices'
import marked from 'markdown-it'

export default {
    name: 'model',
    data() {
        return {
            model_id: this.$route.params.model_id,
            model_data: {},
            filter_section_dict: { 
                "Country of development" : "cod",
                "Scale of analysis" : "soa",
                "Flood type I" : "floodtypei",
                "Flood type II" : "floodtypeii",
                "Model type I" : "modeltypei",
                "Model type II" : "modeltypeii",
                "Model type III" : "modeltypeiii",
                "Exposed items/sectors" : "eis"
             },
            input: ""
        }
    },
    computed: {
        compiledMarkdown: function() {
            return marked().render(this.input);
        }
    },
    mounted: function() {
        // Get model
        ModelsServices.getModel(this.model_id).then((response) => {
            this.model_data = response.data[0];
            console.log(this.model_data.cod)
            this.input = this.model_data.eis
        })
    }
}
</script>

<style scoped>
@import '../assets/css/markdown.css';

.border {
    border: 0.5px solid #c6dadc40;
    border-radius: 25px;
    padding: 15px;
}

</style>