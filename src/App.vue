<style>
</style>

<template>
    <div id="app" class="">
        <router-view/>
    </div>
</template>

<script>
    import store from './store'

    export default {
        name: 'App',
        store,
    }
</script>
