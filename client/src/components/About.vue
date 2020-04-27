<template>
    <div class="container-fluid mt-5 mb-5">
        <div class="row">
            <div class="container text-center">

                <h1 class="mb-4">The <b>F</b>lood <b>D</b>amage <b>M</b>odels Repository </h1>

                <video width="800" height="480" controls>
                    <source src="../assets/video/Video FDM.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                    Your browser does not support the video tag.
                </video>

                <p class="display-5 mt-5">
                    <b>The main objective of the Flood Damage Models Repository (FDM) is to support flood damage
                        modelers
                        in the choice of the best available model(s) for the estimation of flood damage</b>, in a
                    specific
                    context, and for a specific problem at stake. In fact, despite several tools are now available for
                    flood damage estimation, no model can be, at present, considered as a standard.
                </p>
                <br>
                <p class="display-5">
                    The choice of the more suitable model(s) to be implemented can be challenging, above all for
                    non-expert users, and may imply significant errors in damage estimates if done without a critical
                    knowledge of models limits and usability. In fact, damage models are developed to be applied at a
                    specific scale, for a specific type of flood and focusing on a specific exposed item, and are
                    characterised by different levels of robustness and reliability. However, not always the development
                    and evaluation of flood damage models go together with detailed information about when and where a
                    certain model should be applied, or even the model does not have an explicit calibration and
                    validation, that would document and demonstrate how the model performs and how accurately.
                </p>
                <br>
                <p class="display-5">
                    To cover this gap, <b>the FDM collects and organises information about available flood damage
                        models,
                        according to distinctive features of each model</b>, which support models users in the
                    comprehension of
                    the context of the implementation, as well as of the reliability and robustness of the model, also
                    with respect to its transferability. In doing so, the FDM is more than a database of existing models
                    in literature, but rather <b>an operative tool in the support of flood damage modellers for more
                        reliable damage analysis</b>. In fact, each FDM field has been conceived in order to support and
                    help
                    users in the implementation of the model they choose. For each model, the FDM highlights critical
                    issues and strengths, in order to be applied in a specific context. Accordingly, the FDM represents
                    also an opportunity to increase knowledge gaps on flood damage assessment tools by providing for
                    each available model fundamental key information in order not to lead to an improper use of the
                    model and then significant errors in the flood damage assessment.
                </p>
                <br>
                <p class="display-5">
                    The FDM can be browsed by a pull-down menu, by which the user can select different filters; starting
                    from the context of application and the type of model that the user needs, the choice of the filters
                    returns in output the model or models that better fit the requirements.
                </p>
                <br>
                <p class="display-5">
                    The FDM has been originally conceived and designed by the <a href="./credits.html">Department of
                        Civil and Environmental
                        Engineering of Politecnico di Milano</a> but it has been
                    thought as a
                    <b>participatory
                        effort by the research community</b>. All researchers working in the field of flood risk (as
                    flood
                    damage models developers or users) are encouraged <a href="./contacts.html">to contribute</a> in and
                    share their experience to reach the common goal of improving flood damage and risk estimates.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about',
    data() {
        return {
            models: [],
            active_filters: {},
            searched_name: ""
        }
    }
}
</script>