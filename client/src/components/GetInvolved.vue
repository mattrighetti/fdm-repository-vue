<template>
    <div>
        <div class="container text-center">
            <h1 class="mt-5 mb-5">Get Involved</h1>
        </div>
        <div class="container text-center">
            <h5>The FDM has been thought as a partecipatory effort by the research community.</h5>
            <br>
            <h5>
                "All researchers wotking in the field of flood risk are encouraged to contribute in"
                <br>
                "and share their experience to reach the common goal of improving flood damage and risk estimates."
            </h5>
        </div>
        <br>
        <hr width="90%">
        <div class="container text-center">
            <h4 class="mt-4">
                "If you wish to contribute by modyfing or by adding a new model, please contact us through the dedicated
                form below, making sure to adapt your model to our requirements paper."
            </h4>
        </div>
        <div class="container bg-color-3 form-container shadowed mb-5 mt-3">
            <h4 class="card-title pt-3 text-dark">Before downloading the requirements paper, be sure to check which
                models
                are not yet available
            </h4>

            <h5 class="card-title text-dark pt-3">
                <a href="./missing_models_list.html">Not uploaded models</a>
            </h5>

            <a class="btn btn-success mt-3" role="button" href="../assets/files/form.zip" download="form">
                Requirements paper
                <i class="fas fa-file-download ml-2"></i>
            </a>

            <form class="mt-5 mb-3" id="form_container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <input type="text" name="name" class="form-control mb-3" placeholder="First name"
                            id="firstName">
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <input type="text" name="surname" class="form-control mb-3" placeholder="Last name"
                            id="secondName">
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <input type="text" name="phone" class="form-control mb-3" placeholder="Phone" id="phone">
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <input type="text" name="email" class="form-control mb-3" placeholder="Email" id="email">
                    </div>
                    <div class="col-sm-12">
                        <input type="text" name="organization" class="form-control mb-3" placeholder="Affiliation"
                            id="organization">
                    </div>
                    <div class="col-sm-12">
                        <textarea class="form-control mb-3" name="message" placeholder="Additional comments"
                            id="message"></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="customFile"
                                accept="application/pdf, text/*">
                            <label class="custom-file-label" for="customFile">Upload the filled requirements
                                paper...</label>
                        </div>
                    </div>
                </div>
                <br>
                <div class="col-sm-12 form-group form-check mt-3">
                    <input type="checkbox" class="form-check-input" id="check-mandatory">
                    <label class="form-check-label" for="exampleCheck1">After having read the information regarding the
                        <a href="./privacy.html">Privacy Policy</a>, I give my consent to the processing of personal
                        data
                        as referred in point n° 1, 2 and 3 of the paragraph <i>“Purposes of data processing, legal
                            basis,
                            data categories and storage period”</i>.</label>
                </div>
                <div class="col-sm-12 form-group form-check">
                    <input type="checkbox" class="form-check-input" id="check-secondary">
                    <label class="form-check-label" for="exampleCheck1">After having read the information regarding the
                        <a href="./privacy.html">Privacy Policy</a>, I give my free, specific and express consent to
                        transfer data to non-EU countries and take note that the transfer takes place to countries that
                        do
                        not have appropriate measures in terms of protection of personal data.</label>
                </div>
                <div class="row">
                    <div class="col-sm-12 text-center mt-5 mb-3">
                        <button type="button" class="btn btn-primary" id="send-button">
                            Send Message
                            <i class="fas fa-check ml-2"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <div class="container mt-3 d-flex justify-content-center" id="infos">
            <div class="row">

                <div class="media col-sm-12 col-md-6">
                    <i class="fas fa-map-marked-alt align-self-center mr-3" style="font-size: 4rem;"></i>
                    <div class="media-body">
                        <h3 class="card-title">Address</h3>
                        <p class="card-text"><a href="http://www.dica.polimi.it" target="blank">DICA</a><br>Dipartimento
                            di
                            Ingegneria Civile e Ambientale
                            <br>
                            Building 4
                            <br>
                            Politecnico di Milano
                            <br>
                            Piazza Leonardo da Vinci, 32
                            <br>
                            20133 Milano (IT)

                        </p>
                    </div>
                </div>
                <div class="media col-sm-12 col-md-6">
                    <i class="far fa-address-book align-self-center mr-3" style="font-size: 4rem;"></i>
                    <div class="media-body align-self-center">
                        <h3 class="card-title">Contacts</h3>
                        <p class="card-text">Daniela Molinari<br><a
                                href="mailto:daniela.molinari@polimi.it">daniela.molinari@polimi.it</a><br>Phone: +39 02
                            2399 6206</p>
                        <p class="card-text">Francesco Ballio<br><a
                                href="mailto:francesco.ballio@polimi.it">francesco.ballio@polimi.it</a><br>Phone: +39 02
                            2399 6236</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "get-involved"
    }
</script>

<style scoped>
    .text-center {
        text-align: center !important;
    }
</style>