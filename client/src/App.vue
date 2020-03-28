<template>
    <div id="app">
        <Header />
            <router-view>
            </router-view>
        <Footer />
    </div>
</template>

<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export default {
    name: 'App',
    components: {
        Header,
        Footer
    }
}
</script>

<style>
html {
    animation: fadeSiteIn 0.5s ease forwards;
}

html .fadeSiteOut {
    animation: fadeSiteOut 0.5s ease forwards;
}

body {
    font-family: "Roboto", sans-serif;
}

.bg-darkblue {
    background-color: #253862;
}
</style>