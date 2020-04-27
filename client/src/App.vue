<template>
    <div>
        <Header />
            <router-view />
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
body {
    font-family: "Roboto", sans-serif;
}

.bg-darkblue {
    background-color: #253862;
}
</style>