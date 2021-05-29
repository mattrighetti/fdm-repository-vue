<template>
    <div class="container mx-auto my-16 content-desktop">
        <div class="relative">
            <img class="rounded-lg test" src="https://media.npr.org/assets/img/2021/02/18/getty_1_custom-8f8b750cd28c4389a0ac236b625f335ee1d34849-s2500-c85.webp" alt="flood-1" height="100">
            <div class="flex justify-center absolute bottom-0 mb-24">
                <div class="w-3/4 rounded-xl bg-white bg-opacity-75">
                    <div class="text-center text-5xl font-extrabold leading-none tracking-tight my-8">
                        <span class="text-black">
                            Flood Damage Model Repository
                        </span>
                    </div>
                    <div class="text-gray-900 text-center text-base sm:text-2xl px-8 py-2 m-2">
                        Supporting flood damage modelers in the choice of the best available model for a specific country and a specific problem
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <div class="container flex items-center bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl">
                <p class="pl-10 pr-5 py-8 text-6xl text-white object-center font-sans">{{ numModels }}</p>
                <p class="pl-5 pr-10 py-8 text-2xl text-white object-center font-sans">Models in the FDM database</p>
            </div>
            <div class="container bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl">
                <p class="pl-5 pr-10 py-8 text-xl text-white object-center font-sans">
                    If you want to contribute in order to further develop the Flood Damage Models Repository (FDM), please
                    <b>adapt the model</b> to our requirements paper that can be downloaded clicking <b>down below</b>.
                </p>
                <div class="flex mb-10">
                    <div class="flex-1"></div>
                    <a href="www.fdm.polimi.it/file/document.pdf">
                        <button class="flex-none bg-blue-500 hover:bg-blue-700 text-white font-bold px-6 py-4 border border-blue-700 rounded">
                            Download
                        </button>
                    </a>
                    <div class="flex-1"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getModels } from "@/services/models.services";

export default {
    name: "LandingPage",
    data() {
        return {
            numModels: 0,
        }
    },
    mounted() {
        getModels().then(res => {
            this.numModels = res.data.length
        })

        // startImageTransition();

        function startImageTransition() {
            var images = document.getElementsByClassName("test");

            // Set opacity of all images to 1
            for (var i = 0; i < images.length; ++i) {
                images[i].style.opacity = 1;
            }

            var top = 1;
            var cur = images.length - 1;

            setInterval(changeImage, 3000);

            async function changeImage() {
                var nextImage = (1 + cur) % images.length;
                images[cur].style.zIndex = top + 1;
                images[nextImage].style.zIndex = top;
                await transition();
                images[cur].style.zIndex = top;
                images[nextImage].style.zIndex = top + 1;
                top = top + 1;
                images[cur].style.opacity = 1;
                cur = nextImage;
            }

            function transition() {
                return new Promise(function (resolve, reject) {

                    // del is the value by which opacity is
                    // decreased every interval
                    var del = 0.01;

                    // id stores ID of setInterval
                    // this ID will be used later
                    // to clear/stop setInterval
                    // after we are done changing opacity
                    var id = setInterval(changeOpacity, 10);

                    // changeOpacity() decreasing opacity of
                    // current image by del
                    // when opacity reaches to 0, we stops/clears
                    // the setInterval and resolve the function
                    function changeOpacity() {
                        images[cur].style.opacity -= del;
                        if (images[cur].style.opacity <= 0) {
                            clearInterval(id);
                            resolve();
                        }
                    }
                })
            }
        }
    }
}
</script>

<style scoped>
@media (max-width: 768px) {
    .content-desktop {
        display: none;
    }

    .content-mobile {
        display: block;
    }
}
</style>