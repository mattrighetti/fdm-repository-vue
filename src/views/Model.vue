<template>
    <div class="px-5 md:px-15 lg:px-20 xl:px-64 pt-10 pb-20">
        <ol class="list-reset flex text-grey-dark">
            <li>
                <router-link :to="{ name: 'models' }" class="text-blue font-bold no-underline hover:underline">Models
                </router-link>
            </li>
            <li><span class="mx-2">/</span></li>
            <li>
                {{ model.name }}
            </li>
        </ol>
        <div class="border-solid border border-opacity-25 border-gray-600 rounded-lg px-8 py-8 mt-10">
            <div v-if="model.acronym != ''">
                <p class="text-4xl font-normal">
                    {{ model.acronym }}
                    <sub v-if="model.version != ''">{{ model.version }}</sub>
                </p>
                <p class="text-xl font-light mb-5" v-if="model.acronym != null">
                    {{ model.name }}
                </p>
            </div>
            <div v-else>
                <p class="text-4xl font-normal mb-5">{{ model.name }}</p>
            </div>
            <div class="block">
                <div class="block">
                    <p class="block sm:inline-block text-base font-semibold sm:pr-5">
                        Country of development
                    </p>
                    <span
                        class="inline-block mt-2 sm:inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700">{{ model.cod }}</span>
                </div>
                <div class="block mt-3">
                    <p class="block sm:inline-block text-base font-semibold sm:pr-5">
                        Scale of analysis
                    </p>
                    <span
                        class="inline-block mt-2 sm:inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700">{{ model.soa }}</span>
                </div>
                <div class="block mt-3">
                    <p class="block sm:inline-block text-base font-semibold sm:pr-5">
                        Flood type I
                    </p>
                    <span
                        class="inline-block mt-2 sm:inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700">{{ model.floodtypei }}</span>
                </div>
                <div class="block mt-3">
                    <p class="block sm:inline-block text-base font-semibold sm:pr-5">
                        Flood type II
                    </p>
                    <span
                        class="inline-block mt-2 sm:inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700">{{ model.floodtypeii }}</span>
                </div>
                <div class="block mt-3">
                    <p class="block sm:inline-block text-base font-semibold sm:pr-5">
                        Model type I
                    </p>
                    <span
                        class="inline-block mt-2 sm:inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700">{{ model.modeltypei }}</span>
                </div>
                <div class="block mt-3">
                    <p class="block sm:inline-block text-base font-semibold sm:pr-5">
                        Model type II
                    </p>
                    <span
                        class="inline-block mt-2 sm:inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700">{{ model.modeltypeii }}</span>
                </div>
                <div class="block mt-3">
                    <p class="block sm:inline-block text-base font-semibold sm:pr-5">
                        Model type III
                    </p>
                    <span
                        class="inline-block mt-2 sm:inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700">{{ model.modeltypeiii }}</span>
                </div>
                <div class="block mt-3">
                    <p class="block sm:inline-block text-base font-semibold sm:pr-5">
                        Exposed Items
                    </p>
                    <span
                        class="inline-block mt-2 sm:inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700">{{ model.eis }}</span>
                </div>
            </div>
        </div>
        <div class="border-solid border border-opacity-25 border-gray-600 rounded-lg px-8 py-8 mt-10">
            <article class="markdown" v-html="compiledMarkdown"></article>
        </div>
    </div>
</template>

<script>
import { getModel } from "@/services/models.services";
import marked from "marked";

/* 
This section is responsible for specifing image size using "=100x300"
in image specifiers
e.g.
![Image](img_address "=100x200")
*/

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

marked.setOptions({
    renderer: renderer
})

export default {
    name: "model",
    data() {
        return {
            modelId: parseInt(this.$route.params.id),
            model: Object,
            markdown: ""
        };
    },
    computed: {
        compiledMarkdown: {
            get() {
                var parsed = marked(this.markdown);
                return parsed;
            }
        }
    },
    mounted() {
        this.injectScriptTag("https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS_CHTML", "Mathjax-script", true, false)
        getModel(this.modelId).then(response => {
            this.model = response.data;
            this.markdown = this.model.description;
        }).then(() => {
            this.cleanMathCode()
        })
    },
    watch: {
        compiledMarkdown() {
            this.$nextTick(() => {
                window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
            })
        }
    },
    methods: {
        injectScriptTag(src, id, async=false, head=false) {
            if (document.getElementById(id) == null) {
                console.log("Injecting", src)

                let script = document.createElement("script")
                script.id = id
                script.setAttribute("src", src)
                script.setAttribute("type", "text/javascript")
                script.async = async
                if (head) {
                    document.head.appendChild(script)
                } else {
                    document.body.appendChild(script)
                }
            }
        },
        cleanMathCode() {
            var i, text, code, codes = document.getElementsByTagName('code');
            for (i = 0; i < codes.length;) {
                code = codes[i];
                if (code.parentNode.tagName !== 'PRE' && code.childElementCount === 0) {
                    text = code.textContent;
                    if (/^\$[^$]/.test(text) && /[^$]\$$/.test(text)) {
                        text = text.replace(/^\$/, '\\(').replace(/\$$/, '\\)');
                        code.textContent = text;
                    }
                    if (/^\\\((.|\s)+\\\)$/.test(text) || /^\\\[(.|\s)+\\\]$/.test(text) ||
                        /^\$(.|\s)+\$$/.test(text) ||
                        /^\\begin\{([^}]+)\}(.|\s)+\\end\{[^}]+\}$/.test(text)) {
                        code.outerHTML = code.innerHTML; // remove <code></code>
                        continue;
                    }
                }
                i++;
            }
        }
    }
};
</script>

<style>
/* Additional vertical padding used by kbd tag. */
.py-05 {
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
}

.markdown {
    @apply text-gray-900;
    @apply leading-normal;
    @apply break-words;
}

.markdown>*+* {
    @apply mt-0;
    @apply mb-4;
}

.markdown li+li {
    @apply mt-1;
}

.markdown li>p+p {
    @apply mt-6;
}

.markdown strong {
    @apply font-semibold;
}

.markdown a {
    @apply text-blue-600;
    @apply font-semibold;
}

.markdown strong a {
    @apply font-bold;
}

.markdown h1 {
    @apply leading-tight;
    @apply border-b;
    @apply text-4xl;
    @apply font-semibold;
    @apply mb-4;
    @apply mt-6;
    @apply pb-2;
}

.markdown h2 {
    @apply leading-tight;
    @apply border-b;
    @apply text-2xl;
    @apply font-semibold;
    @apply mb-4;
    @apply mt-6;
    @apply pb-2;
}

.markdown h3 {
    @apply leading-snug;
    @apply text-lg;
    @apply font-semibold;
    @apply mb-4;
    @apply mt-6;
}

.markdown h4 {
    @apply leading-none;
    @apply text-base;
    @apply font-semibold;
    @apply mb-4;
    @apply mt-6;
}

.markdown h5 {
    @apply leading-tight;
    @apply text-sm;
    @apply font-semibold;
    @apply mb-4;
    @apply mt-6;
}

.markdown h6 {
    @apply leading-tight;
    @apply text-sm;
    @apply font-semibold;
    @apply text-gray-600;
    @apply mb-4;
    @apply mt-6;
}

.markdown blockquote {
    @apply text-base;
    @apply border-l-4;
    @apply border-gray-300;
    @apply pl-4;
    @apply pr-4;
    @apply text-gray-600;
}

.markdown code {
    @apply font-mono;
    @apply text-sm;
    @apply inline;
    @apply bg-gray-200;
    @apply rounded;
    @apply px-1;
    @apply py-05;
}

.markdown pre {
    @apply bg-gray-100;
    @apply rounded;
    @apply p-4;
}

.markdown pre code {
    @apply block;
    @apply bg-transparent;
    @apply p-0;
    @apply overflow-visible;
    @apply rounded-none;
}

.markdown ul {
    @apply text-base;
    @apply pl-8;
    @apply list-disc;
}

.markdown ol {
    @apply text-base;
    @apply pl-8;
    @apply list-decimal;
}

.markdown kbd {
    @apply text-xs;
    @apply inline-block;
    @apply rounded;
    @apply border;
    @apply px-1;
    @apply py-05;
    @apply align-middle;
    @apply font-normal;
    @apply font-mono;
    @apply shadow;
}

.markdown table {
    @apply text-base;
    @apply border-gray-600;
}

.markdown th {
    @apply border;
    @apply py-1;
    @apply px-3;
}

.markdown td {
    @apply border;
    @apply py-1;
    @apply px-3;
}

/* Override pygments style background color. */
.markdown .highlight pre {
    @apply bg-gray-100 /* !important */;
}
</style>
