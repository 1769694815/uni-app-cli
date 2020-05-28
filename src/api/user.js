import request from '@/utils/request.js'

export function login(params) {
	return request({
		url: '/api/user/login', // 假地址
		method:	'POST',
		data: params
	})
}