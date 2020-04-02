<template>
    <div class="container mt-5">
        <textarea :value="input" @input="update"></textarea>
        <div class="markdown-body" v-html="compiledMarkdown"></div>
    </div>
</template>

<script>
import ModelsServices from '../services/ModelsServices'
import _ from 'lodash'
import marked from 'markdown-it'

export default {
    name: 'model',
    data() {
        return {
            model_id: this.$route.params.model_id,
            model_data: {},
            input: "# Hello"
        }
    },
    computed: {
        compiledMarkdown: function() {
            return marked().render(this.input);
        }
    },
    methods: {
        update: _.debounce(function(e) {
            this.input = e.target.value;
        }, 300)
    },
    mounted: function() {
        // Get model
        ModelsServices.getModel(this.model_id).then((res) => {
            console.log(res)
        })
    }
}
</script>

<style scoped>
@import '../assets/css/markdown.css';
</style>