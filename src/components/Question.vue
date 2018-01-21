<style>
</style>

<template>
    <div>
        <div class="h4 h5-ns" v-if="this.question.image !== '' || keepEmptyImage">
            <div :style="imageStyles" v-if="this.question.image !== ''"></div>
        </div>

        <div class="pa3">
            <div class="f5 b black-40">{{ question.book }}</div>
            <div class="f4 b">{{ question.text }}</div>
        </div>

        <div class="flex items-center f4 pa3 mb1 br1 pointer cf"
             style="user-select: none;"
             :class="answerClasses(answer)"
             v-for="answer in question.answers"
             @click="markAnswer(answer)">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w3 h3 w2-ns h2-ns mr3 dib v-mid green"
                 v-if="selectedAnswer !== null && isCorrectAnswer(answer) && !isCorrectAnswer(selectedAnswer)">
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
            </svg>

            <span>{{ answer.text }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            question: {
                type: Object,
                required: true,
            },
            answer: {
                type: Object,
                default: null,
            },
            keepEmptyImage: {
                type: Boolean,
                default: false,
            },
        },
        data: function () {
            return {
                showAnswer: true,
                selectedAnswer: this.answer,
            }
        },
        computed: {
            imageStyles() {
                return {
                    'background-image': `url(./static/${this.question.image})`,
                    'background-size': 'contain',
                    'background-repeat': 'no-repeat',
                    'background-position': 'center',
                    'height': '100%',
                }
            },
        },
        methods: {
            markAnswer(answer) {

                if (this.selectedAnswer !== null) {
                    return
                }

                this.selectedAnswer = answer

                const a = {
                    question: this.question,
                    answer: answer,
                }

                if (answer.correct) {
                    this.$store.commit('markCorrectAnswer', a)
                } else {
                    this.$store.commit('markWrongAnswer', a)
                }

                setTimeout(() => this.$store.commit('nextQuestion'), 1000)
            },

            answerClasses(answer) {

                if (this.selectedAnswer === null) {
                    return {
                        'hover-bg-light-gray': true,
                    }
                }

                if (this.selectedAnswer !== answer) {
                    return {
                    }
                }

                const isCorrect = this.selectedAnswer === answer && answer.correct

                return {
                    'bg-red': !isCorrect,
                    'bg-green': isCorrect,
                }
            },
            isCorrectAnswer(answer) {
                return answer.correct
            },
        },
        watch: {
            question() {
                this.selectedAnswer = this.answer
            },
        },
    }
</script>
