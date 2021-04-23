// A shim is necessary so that the SFC Vue components are interpreted as Vue component instances
// without having to `Vue.extend(..)` the default export.

declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}
