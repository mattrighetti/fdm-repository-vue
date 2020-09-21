<template>
    <div class="relative inline-block text-left">
        <div>
            <span class="rounded-md shadow-sm">
                <button type="button" @click="state.hidden = !state.hidden"
                    class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                    id="options-menu" aria-haspopup="true" :aria-expanded="state.hidden">
                    {{ dropdown.name }}
                    <svg class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </span>
        </div>
        <button v-if="state.hidden" @click="state.hidden=false" class="fixed w-full h-full top-0 right-0 left-0 bottom-0"></button>
        <transition name="fade">
            <div v-if="state.hidden" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                <div class="rounded-md bg-white shadow-xs">
                    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a v-for="value in dropdown.values" :key="value"
                            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                            role="menuitem">{{ value }}</a>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { reactive } from 'vue'

export default {
    name: "FilterBox",
    props: {
        dropdown: {
            name: String,
            values: Array
        }
    },
    setup() {
        const state = reactive({ hidden: false })

        return {
            state
        }
    }
}
</script>

<style scoped>
    .fade-enter-active {
        animation: fade-in .095s ease-in;
    }

    .fade-leave-active {
        animation: fade-in .075s ease-out reverse;
    }

    @keyframes fade-in {
        0% {
            transform: scale(0.95);
            opacity: 0;
        }
        100% {
            transform: scale(1.0);
            opacity: 100;
        }
    }
</style>