<template>
    <div class="bg-blue-900 w-full h-screen">
        <Navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    name: "App",
    components: {
        Navbar
    }
}
</script>

<style>
</style>
