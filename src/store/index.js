import Vue from 'vue'
import Vuex from 'vuex'

const shuffleArray = array => {
    let itemsLeft = array.length

    while (itemsLeft) {
        let index = Math.floor(Math.random() * itemsLeft--)

        let temp = array[itemsLeft]
        array[itemsLeft] = array[index]
        array[index] = temp
    }
}


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        questions: require('../data/el/car.json'),
        currentIndex: 0,
        wrong: [],
        correct: [],
    },
    mutations: {
        nextQuestion(state) {
            state.currentIndex++
        },
        navigateToQuestion(state, target) {
            state.currentIndex = target
        },
        markCorrectAnswer(state, answer) {
            state.correct.push(answer)
        },
        markWrongAnswer(state, answer) {
            state.wrong.push(answer)
        },
        shuffle(state) {

            if (state.currentIndex === 0) {
                state.currentIndex = 1
            }

            shuffleArray(state.questions)
            state.questions.forEach(({answers}) => shuffleArray(answers))

            state.wrong = []
            state.correct = []
            state.currentIndex = 0
        },
    },
    getters: {
        currentQuestion: state => {
            return state.questions[state.currentIndex]
        },
        wrongCount: state => {
            return state.wrong.length
        },
        correctCount: state => {
            return state.correct.length
        },
        questionCount: state => {
            return state.questions.length
        },
    },
})
