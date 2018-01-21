<style>
</style>

<template>
    <div class="flex items-center justify-center min-vh-100">

        <div class="absolute right-0 top-0  right-1-ns top-1-ns tr bg-light-gray pa3 bg-transparent">
            <input type="number" min="1" :max="questionCount"
                   aria-label="Τρέχουσα ερώτηση"
                   class="bn pa1 bg-light-gray tr bg-transparent"
                   style="width: 50px; outline: none"
                   :value="currentIndex + 1"
                   @input="navigateToQuestion"
            > / {{ questionCount }}
            <router-link to="/correct" class="link db black">Σωστές: {{ correctCount }}</router-link>
            <router-link to="/wrong" class="link db black">Λάθος: {{ wrongCount }}</router-link>
            <div class="pointer" @click="$store.commit('shuffle')">Shuffle</div>
        </div>

        <div class="bg-white pa3 mw7 center">

            <question :question="currentQuestion" :keep-empty-image="true"></question>

        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'currentQuestion',
                'wrongCount',
                'correctCount',
                'questionCount',
            ]),
            currentIndex() {
                return this.$store.state.currentIndex
            },
        },
        methods: {
            navigateToQuestion(event) {
                const newIndex = event.target.value - 1

                if (newIndex >= 0 && newIndex < this.questionCount) {
                    this.$store.commit('navigateToQuestion', newIndex)
                }
            },
        },
    }
</script>

