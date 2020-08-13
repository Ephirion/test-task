import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
    },
    mutations: {
        createTask(state, task) {
            state.tasks.push(task)

            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        updateTask(state, { id, title, todos }) {
            const tasks = state.tasks.concat()

            const idx = tasks.findIndex(t => t.id === id)
            tasks[idx] = { id, title, todos }

            state.tasks = tasks
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        removeTask(state, id) {
            console.log(id);
            const tasks = state.tasks.concat().filter(el => el.id !== id);
            state.tasks = tasks;
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    },
    actions: {
        createTask({ commit }, task) {
            commit('createTask', task)
        },
        updateTask({ commit }, task) {
            commit('updateTask', task)
        },
        removeTask({ commit }, id) {
            commit('removeTask', id)
        }
    },
    modules: {},
    getters: {
        tasks: s => s.tasks,
        taskById: s => id => s.tasks.find(t => t.id === id)
    }
})