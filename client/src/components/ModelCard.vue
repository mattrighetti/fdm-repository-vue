<template>
    <div class="rounded border border-gray-300 overflow-hidden hover:bg-gray-100">
        <div class="px-6 py-4">
            <router-link :to="{ name: 'model', params: { id: this.model.id }}">
                <div class="font-light text-lg no-underline hover:underline">
                    {{ model.acronym != null ? model.acronym : model.name }}
                </div>
            </router-link>
        </div>
        <div class="px-6 pb-2">
            <span
            v-for="pill in pills" 
            :key="pill" 
            class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
            v-bind:class="highlighted.includes(pill) ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'"
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
        highlighted: Array
    },
    computed: {
        pills: {
            get() {
                var { id, version, name, acronym, ...pills } = this.model
                return pills
            }
        }
    }
}
</script>