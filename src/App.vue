<template>
    <div>
        <Navbar />
        <router-view class="min-h-screen" />
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
    name: "App",
    components: { Navbar, Footer }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400&display=swap');

body {
    font-family: 'Manrope', sans-serif;
}
</style>
