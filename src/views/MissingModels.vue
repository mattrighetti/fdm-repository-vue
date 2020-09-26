<template>
    <div class="px-5 md:px-15 lg:px-20 xl:px-64 pt-10 pb-20">
        <p class="text-3xl mb-5">Work in progress</p>
        <p class="text-lg font-light mb-5">In this section you can find the existing flood damage models in literature, which are not included in the database yet</p>
        <MissingModelCard v-for="missingModel in missingModels" :key="missingModel.id" :missing_model="missingModel" class="mb-2" />
    </div>
</template>

<script>
import MissingModelCard from '@/components/MissingModelCard'
import { getMissingModels } from '@/services/models.services'

export default {
    name: 'MissingModels',
    components: { MissingModelCard },
    data() {
        return {
            missingModels: []
        }
    },
    mounted() {
        getMissingModels().then(response => this.missingModels = response.data)
    }
}
</script>