<style>

</style>

<template>
    <div class="flex items-center justify-center min-vh-100 bg-light-gray">

        <div class="fixed right-0 top-0  right-1-ns top-1-ns tr bg-light-gray pa3 bg-transparent">
            <router-link to="/" class="link db black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="h2 gray">
                    <path d="M10 13h8V7h-8V2l-8 8 8 8v-5z"></path>
                </svg>
            </router-link>
        </div>

        <div class="pa3-ns mw7 center">

            <div v-for="{answer, question} in correct">
                <question
                    class="mb4 bg-white pv3"
                    :question="question"
                    :answer="answer">
                </question>
            </div>

        </div>

    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        computed: mapState(['correct']),
    }
</script>
