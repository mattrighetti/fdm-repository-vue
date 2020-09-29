<template>
    <div class="px-5 md:px-15 lg:px-20 xl:px-64 pt-10 pb-20">
        <ol class="list-reset flex text-grey-dark">
            <li>
                <router-link :to="{ name: 'models' }" class="text-blue font-bold no-underline hover:underline">Models</router-link>
            </li>
            <li><span class="mx-2">/</span></li>
            <li>
                {{ model.name }}
            </li>
        </ol>
        <div class="border-solid border border-opacity-25 border-gray-600 rounded-lg px-8 py-8 mt-10">
            <div v-if="model.acronym != null">
                <p class="text-4xl font-normal">{{model.acronym}}</p>
                <p class="text-xl font-light mb-5" v-if="model.acronym != null">{{model.name}}</p>
            </div>
            <div v-else>
                <p class="text-4xl font-normal mb-5">{{model.name}}</p>
            </div>
            <div class="block">
                <div class="block">
                    <p class="block sm:inline-block text-base font-semibold sm:pr-5">Country of development</p>
                    <span class="inline-block mt-2 sm:inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700">{{model.cod}}</span>
                </div>
                <div class="block mt-3">
                    <p class="block sm:inline-block text-base font-semibold sm:pr-5">Scale of analysis</p>
                    <span class="inline-block mt-2 sm:inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700">{{model.soa}}</span>
                </div>
                <div class="block mt-3">
                    <p class="block sm:inline-block text-base font-semibold sm:pr-5">Flood type I</p>
                    <span class="inline-block mt-2 sm:inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700">{{model.floodtypei}}</span>
                </div>
                <div class="block mt-3">
                    <p class="block sm:inline-block text-base font-semibold sm:pr-5">Flood type II</p>
                    <span class="inline-block mt-2 sm:inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700">{{model.floodtypeii}}</span>
                </div>
                <div class="block mt-3">
                    <p class="block sm:inline-block text-base font-semibold sm:pr-5">Model type I</p>
                    <span class="inline-block mt-2 sm:inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700">{{model.modeltypei}}</span>
                </div>
                <div class="block mt-3">
                    <p class="block sm:inline-block text-base font-semibold sm:pr-5">Model type II</p>
                    <span class="inline-block mt-2 sm:inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700">{{model.modeltypeii}}</span>
                </div>
                <div class="block mt-3">
                    <p class="block sm:inline-block text-base font-semibold sm:pr-5">Model type III</p>
                    <span class="inline-block mt-2 sm:inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700">{{model.modeltypeiii}}</span>
                </div>
                <div class="block mt-3">
                    <p class="block sm:inline-block text-base font-semibold sm:pr-5">Exposed Items</p>
                    <span class="inline-block mt-2 sm:inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700">{{model.eis}}</span>
                </div>
            </div>
        </div>
        <div class="border-solid border border-opacity-25 border-gray-600 rounded-lg px-8 py-8 mt-10">
            <article class="markdown" v-html="compiledMarkdown"></article>
        </div>
    </div>
</template>

<script>
import { getModel } from '@/services/models.services'
import marked from 'marked'

const renderer = new marked.Renderer();

function sanitize(str) {
  return str.replace(/&<"/g, function (m) {
    if (m === "&") return "&amp;"
    if (m === "<") return "&lt;"
    return "&quot;"
  })
}

renderer.image = function (src, title, alt) {
  const exec = /=\s*(\d*)\s*x\s*(\d*)\s*$/.exec(title)
  let res = '<img src="' + sanitize(src) + '" alt="' + sanitize(alt)
  if (exec && exec[1]) res += '" height="' + exec[1]
  if (exec && exec[2]) res += '" width="' + exec[2]
  return res + '">'
}

export default {
    name: 'model',
    data() {
        return {
            modelId: parseInt(this.$route.params.id),
            model: Object,
            markdown: ""
        }
    },
    computed: {
        compiledMarkdown: {
            get() {
                var parsed = marked(this.markdown)
                return parsed
            }
        }
    },
    mounted() {
        let mathJaxScript = document.createElement('script')
        mathJaxScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML')
        document.body.appendChild(mathJaxScript)

        getModel(this.modelId).then(response => {
            this.model = response.data
            this.markdown = this.model.description
        })
    }
}
</script>

<style>
/* Additional vertical padding used by kbd tag. */
.py-05 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}

.markdown {
  @apply text-gray-900 leading-normal break-words;
}

.markdown > * + * {
  @apply mt-0 mb-4;
}

.markdown li + li {
  @apply mt-1;
}

.markdown li > p + p {
  @apply mt-6;
}

.markdown strong {
  @apply font-semibold;
}

.markdown a {
  @apply text-blue-600 font-semibold;
}

.markdown strong a {
  @apply font-bold;
}

.markdown h1 {
  @apply leading-tight border-b text-4xl font-semibold mb-4 mt-6 pb-2;
}

.markdown h2 {
  @apply leading-tight border-b text-2xl font-semibold mb-4 mt-6 pb-2;
}

.markdown h3 {
  @apply leading-snug text-lg font-semibold mb-4 mt-6;
}

.markdown h4 {
  @apply leading-none text-base font-semibold mb-4 mt-6;
}

.markdown h5 {
  @apply leading-tight text-sm font-semibold mb-4 mt-6;
}

.markdown h6 {
  @apply leading-tight text-sm font-semibold text-gray-600 mb-4 mt-6;
}

.markdown blockquote {
  @apply text-base border-l-4 border-gray-300 pl-4 pr-4 text-gray-600;
}

.markdown code {
  @apply font-mono text-sm inline bg-gray-200 rounded px-1 py-05;
}

.markdown pre {
  @apply bg-gray-100 rounded p-4;
}

.markdown pre code {
  @apply block bg-transparent p-0 overflow-visible rounded-none;
}

.markdown ul {
  @apply text-base pl-8 list-disc;
}

.markdown ol {
  @apply text-base pl-8 list-decimal;
}

.markdown kbd {
  @apply text-xs inline-block rounded border px-1 py-05 align-middle font-normal font-mono shadow;
}

.markdown table {
  @apply text-base border-gray-600;
}

.markdown th {
  @apply border py-1 px-3;
}

.markdown td {
  @apply border py-1 px-3;
}

/* Override pygments style background color. */
.markdown .highlight pre {
  @apply bg-gray-100 !important;
}
</style>