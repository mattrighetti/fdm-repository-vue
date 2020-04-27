<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="darkblue">
            <b-navbar-brand href="#">
                <router-link to="/"><img src="../../assets/img/FDM-Logo.png" alt="Logo" height="70px"></router-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                        <b-nav-item></b-nav-item>
                        <!-- TODO Discover More should be a dropdown with more links -->
                        <b-nav-item active><router-link to="/">Discover more</router-link></b-nav-item>
                        <b-nav-item active><router-link to="/about">About</router-link></b-nav-item>
                        <b-nav-item active><router-link to="/getInvolved">Get Involved</router-link></b-nav-item>
                        <b-nav-item></b-nav-item>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
    a, a:hover {
        color: white;
    }
</style>