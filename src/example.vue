<template>
    <div ref="wrapper">
        <p>{{ computedValue }}</p>
    </div>
</template>

<script>
// Vue Options API has some type-related limitations and it's not always possible
// to infer the types automatically which makes IDE integrations like Vetur fail
// to resolve component types properly. One missing annotation can make the whole
// component fail at type-checking.

export default {
    props: {
        // Trivial (primitive) props don't need to be annotated.
        count: {
            type: Number,
            default: 1,
        },
        // Non-trivial props need to be annotated with explicit types.
        /** @type {import('vue').PropOptions<Record<string, number>>} */
        mapping: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            // Trivial types don't need annotations.
            aNumber: 1,
            // Starts as `null` so we need to tell Vue what is the type we expect here.
            /** @type {HTMLElement | null} */
            aNonTrivial: null,
        };
    },
    computed: {
        // Computed properties generally have to be annotated.
        /** @return {number} */
        computedValue() {
            return 123;
        },
    },
    watch: {
        // Watch handler needs to know the type of the variable it's watching.
        /** @type {import('vue').WatchHandler<number>} */
        aNumber(newValue, oldValue) {
            // ...
        },
    },
    methods: {
        // The parameters and return values need annotations.
        /**
         * @param {string} value
         * @return {string}
         */
        callMe(value) {
            // An reference to an element has wide type that should be narrowed
            // to an actual type, depending on the element type.
            const wrapper = /** @type {HTMLElement} **/(this.$refs.wrapper);
            wrapper.className = 'foo';

            return 'hey' + value;
        },
        // Doesn't have arguments and doesn't return anything, no need to annotate.
        noArgumentsNoReturn() {
            this.aNumber = 2;
        },
    },
    // Mixins that come from external libraries (like `vue-meta`) sometimes need
    // annotations. `vue-meta` doesn't need but `head` in Nuxt does.
    metaInfo() {
        return {
            title: 'Page title',
        };
    },
};
</script>
