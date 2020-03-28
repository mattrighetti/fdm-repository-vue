<template>
    <div id="app">
        <Header />
        <div class="container-fluid pt-5">
            <div class="row">
                <div class="col-sm-9 active-purple-3 active-purple-4 mb-4">
                    <input class="form-control" type="text" placeholder="Search model" aria-label="Search"
                        id="searchInput">
                </div>
            </div>
            <div class="row">

                <!-- MODELS -->

                <b-col cols="9" class="scene_element scene_element--fadeinup">
                    <ModelCard />
                </b-col>

                <!-- DROPDOWN -->
                <b-col cols="3" class="text-center">
                    <DropdownCard />
                </b-col>

            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from './components/layout/Header'
    import Footer from './components/layout/Footer'
    import DropdownCard from './components/layout/DropdownCard'
    import ModelCard from './components/layout/ModelCard'

    export default {
        name: 'App',
        components: {
            Header,
            DropdownCard,
            ModelCard,
            Footer
        }
    }
</script>

<style scope>
    html {
        animation: fadeSiteIn 0.5s ease forwards;
    }

    html .fadeSiteOut {
        animation: fadeSiteOut 0.5s ease forwards;
    }

    body {
        font-family: "Quicksand", sans-serif;
    }

    .bg-darkblue {
        background-color: #253862;
    }

    .custom-padding {
        padding: 0.0rem!important;
        margin: 0.0rem!important;
    }

    .justify-text {
        text-align: justify;
    }

    .col .list-footer {
        color: white;
        padding-top: 1em;
        padding-inline-start: 5px;
        list-style-type: none;
    }

    .col .list-footer a {
        color: white;
    }

    .w-60 {
        width: 17rem;
    }

    .btn-light {
        color: black;
        background-color: #fdf9f9;
        border-color: #f6f6f6;
    }

    .btn-full {
        width: 100%;
        margin: 0.1em;
    }

    .position-fixed {
        top: 11em;
        right: 1em;
    }

    .nav-icon {
        text-align: center;
    }

    .nav-icon-text {
        text-align: center;
    }

    .space-small {
        margin-bottom: 85px;
    }

    .space-medium {
        margin-bottom: 118px;
    }

    .space-large {
        margin-bottom: 350px;
    }

    .model-card a {
        color: #000000;
    }

    .model-card:hover {
        background-color: #ebecee !important;
        transition-duration: 0.3s;
    }

    .scene_element {
        animation-duration: 0.5s;
        transition-timing-function: ease-in;
        animation-fill-mode: both;
    }

    .scene_element--fadein {
        animation-name: fadeIn;
    }

    .scene_element--fadeinup {
        animation-name: fadeInUp;
    }

    .scene_element--fadeinright {
        animation-name: fadeInRight;
    }

    .scene_element--fadeinleft {
        animation-name: fadeInLeft;
    }

    @keyframes fadeSiteIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes fadeSiteOut {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }

        100% {
            opacity: 1;
            transform: none;
        }
    }

    @keyframes fadeInRight {
        0% {
            opacity: 0;
            transform: translate3d(100%, 0, 0);
        }

        100% {
            opacity: 1;
            transform: none;
        }
    }

    @keyframes fadeInLeft {
        0% {
            opacity: 0;
            transform: translate3d(-100%, 0, 0);
        }

        100% {
            opacity: 1;
            transform: none;
        }
    }
</style>