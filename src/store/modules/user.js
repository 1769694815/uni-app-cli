import { getStore } from '@/utils/store.js'
import { login } from '@/api/user.js'

const state = {
	userInfo: {},
	access_token: getStore({
		name: 'access_token'
	})
}

const mutations = {
	SET_USER_INFO: (state, userInfo) => {
		state.userInfo = userInfo
	},
	SET_ACCESS_TOKEN: (state, access_token) => {
		state.access_token = access_token
		setStore({
			name: 'access_token',
			content: state.access_token
		})
	}
}

const actions = {
	login({ commit }, userInfo) {
		return new Promise((resolve, reject) => {
			login(userInfo).then(response => {
				const data = response.data
				commit('SET_ACCESS_TOKEN', data.access_token)
				resolve()
			})
		}).catch(error => {
			reject(error)
		})
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}