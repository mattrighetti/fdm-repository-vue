<template>
    <div class="rounded border border-gray-300 overflow-hidden">
        <div class="px-6 py-4">
            <div class="font-semibold text-lg">{{ model.name }}</div>
        </div>
        <div class="px-6 pb-2">
            <span v-for="pill in model.pills" :key="pill" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ pill }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModelCard",
    props: {
        model: {
            name: String,
            pills: Array
        }
    }
}
</script>