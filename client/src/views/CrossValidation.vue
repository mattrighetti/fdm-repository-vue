<template>
    <div class="px-5 md:px-15 lg:px-20 xl:px-64 pt-10 pb-20">
        <p class="text-3xl mb-1">Cross Validation Studies</p>
        <p class="text-lg font-light mb-5">In this section you can find studies where different flood damage models are compared among each other and applied in different contexts with respect to the calibration one</p>
        <CrossValidationCard
        v-for="study in studies"
        :key="study.study.name"
        :authors="study.authors"
        :study="study.study"
        :paper="study.paper"
        class="mb-2"
        />
    </div>
</template>

<script>
import CrossValidationCard from '@/components/CrossValidationCard'

export default {
    name: 'CrossValidation',
    components: { CrossValidationCard },
    data() {
        return {
            studies: [
                {
                    authors: "Jongman B., Kreibich H., Apel H., Barredo J. I., Bates P. D., Feyen L., Gericke A., Neal J., Aerts J. C. J. H. and Ward P. J.",
                    study: {
                        name: "Comparative flood damage model assessment: towards a European approach",
                        link: "https://www.nat-hazards-earth-syst-sci.net/12/3733/2012/nhess-12-3733-2012.html"
                    },
                    paper: 'Natural Hazards and Earth System Sciences 12(12), 2012, pp.3733-3752."'
                },
                {
                    authors: "Amadio M., Scorzini A. R., Carisi F., Essenfelder H. A., Domeneghetti A., Mysiak J. and Castellarin A. ",
                    study: {
                        name: "Testing empirical and synthetic flood damage models: The case of Italy",
                        link: "https://www.nat-hazards-earth-syst-sci.net/19/661/2019/"
                    },
                    paper: '"Natural Hazards and Earth System Sciences 19(3), 2019, pp. 661-678."'
                }
            ]
        }
    }
}
</script>