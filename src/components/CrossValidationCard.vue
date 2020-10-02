<template>
    <div class="rounded border border-gray-300 py-6 px-6 overflow-hidden hover:bg-gray-100">
        <p class="text-base text-gray-500 font-light">{{ authors }}</p>
        <a :href="study.link" target="blank">
            <p class="text-2xl">{{ study.name }}</p>
        </a>
        <p class="text-lg text-gray-700 font-light">in {{ paper }}</p>
    </div>
</template>

<script>
export default {
    name: 'CrossValidationCard',
    props: {
        authors: String,
        study: {
            name: String,
            link: String
        },
        paper: String
    }
}
</script>