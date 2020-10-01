<template>
    <div class="rounded border border-gray-300 overflow-hidden hover:bg-gray-100">
        <div class="px-6 py-4">
            <router-link :to="{ name: 'model', params: { id: this.model.id }}">
                <div class="font-light text-lg no-underline hover:underline">
                    {{ model.acronym != "" ? model.acronym : model.name }}
                    <sub v-if="model.version != ''">{{ model.version }}</sub>
                </div>
            </router-link>
        </div>
        <div class="px-6 pb-2">
            <span
            v-for="pill in pills"
            :key="pill" 
            class="inline-block rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2"
            v-bind:class="toHighlight.includes(pill) ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'"
            >
            {{ pill }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModelCard",
    props: {
        model: {
            name: String
        },
        query_array: Array
    },
    computed: {
        pills: {
            get() {
                var { id, version, name, acronym, ...pills } = this.model
                // Remove empty pills
                Object.keys(pills).forEach(key => {
                    if (pills[key] == "") {
                        delete pills[key]
                    }
                })

                console.log(pills)
                
                return pills
            }
        },
        toHighlight: {
            get() {
                var toHighlightArray = []
                Object.values(this.pills).forEach(value => {
                    Object.values(this.query_array).forEach(arrayVal => {
                        if (value.includes(arrayVal)) {
                            toHighlightArray.push(value)
                        }
                    })
                })

                return toHighlightArray
            }
        }
    }
}
</script>