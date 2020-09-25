<template>
    <div class="font-sans antialiased">
        <nav class="flex items-center justify-between flex-wrap bg-blue-800 p-6">
            <div class="flex items-center flex-no-shrink text-white mr-6">
                <router-link :to="{ name: 'models' }">
                    <img src="http://www.fdm.polimi.it/assets/img/FDM-Logo.png" alt="logo" width="210">
                </router-link>
            </div>
            <div class="block sm:hidden">
                <button @click="toggle"
                    class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div :class="open ? 'block' : 'hidden'" class="w-full sm:flex sm:items-center sm:w-auto text-white">
                <div class="text-sm sm:flex-grow">
                    <router-link to="/" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-blue-300 mr-4">
                        <span class="font-normal text-xl tracking-tight">Discover More</span>
                    </router-link>
                    <router-link to="/about" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-blue-300 mr-4">
                        <span class="font-normal text-xl tracking-tight">About</span>
                    </router-link>
                    <router-link to="/about" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-blue-300 mr-4">
                        <span class="font-normal text-xl tracking-tight">Get Involved</span>
                    </router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data: function () {
        return {
            open: false
        }
    },
    methods: {
        toggle() {
            this.open = !this.open
        }
    }
};
</script>