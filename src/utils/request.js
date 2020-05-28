
import store from '@/store'
import { baseUrl } from '../config/env.js'
import Vue from 'vue'

export const http = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			method: options.method,
			url: baseUrl + options.url,
			data: options.data,
			header: {
				'Authorization': 'Bearer ' + store.state.token
			},
			success: res => {
				resolve(res.data)
			},
			fail: err => {
				console.log('err', err)
				reject('err.data')
			},
			complete: (res) => {
				
			}
		})
	})
}