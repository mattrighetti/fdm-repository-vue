<template>
    <footer class="footer bg-blue-800 relative pt-1 border-b-2 border-blue-700">
        <div class="container mx-auto px-6">
            <div class="sm:flex sm:mt-8">
                <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                    <div class="flex flex-col">
                        <span class="text-white font-bold uppercase mb-2">Links</span>
                        <span class="my-2"><router-link :to="{ name: 'faq' }" class="text-white font-light text-md hover:text-blue-500">FAQ</router-link></span>
                        <span class="my-2"><router-link :to="{ name: 'copyright' }" class="text-white  text-md hover:text-blue-500">Terms of Service & Copyright</router-link></span>
                        <span class="my-2"><router-link :to="{ name: 'privacy' }" class="text-white  text-md hover:text-blue-500">Privacy Policy</router-link></span>
                        <span class="my-2"><router-link :to="{ name: 'credits' }" class="text-white  text-md hover:text-blue-500">Credits</router-link></span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-white font-bold uppercase mb-2">Contacts</span>
                        <span class="my-2"><a href="#" class="text-white font-light text-md hover:text-blue-500">Email us</a></span>
                    </div>
                    <div class="flex flex-col mt-10 md:mt-0">
                        <img src="http://www.fdm.polimi.it/img/logo-poli.png" alt="polimi" width="200" height="65">
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-6">
            <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                <div class="sm:w-2/3 text-center py-6">
                    <p class="text-sm text-white font-bold mb-2">
                        © 2020 by Politecnico di Milano
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>