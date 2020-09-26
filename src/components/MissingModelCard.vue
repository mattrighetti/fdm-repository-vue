<template>
    <div class="rounded border border-gray-300 py-6 px-6 overflow-hidden hover:bg-gray-100">
        <p class="text-2xl">{{ missing_model.name }}</p>
        <p class="text-base font-light" v-html="parsed_biblio"></p>
    </div>
</template>

<script>
import marked from 'marked'

export default {
    name: 'MissingModelCard',
    props: {
        missing_model: {
            id: String,
            name: String,
            biblio: String
        }
    },
    computed: {
        parsed_biblio: {
            get() {
                if (this.missing_model.biblio == null) {
                    return ""
                }

                return marked(this.missing_model.biblio);
            }
        }
    }
}
</script>