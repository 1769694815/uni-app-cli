import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import user from './modules/user.js'

Vue.use(Vuex)
console.log('new Vuex.Store')

const store = new Vuex.Store({
	modules: {
		user
	},
	getters
})

export default store