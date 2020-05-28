
export const getStore = (params = {}) => {
	let { name } = params
	let obj = {}
	let content
	obj = uni.getStorageSync(name)
	try {
		obj = JSON.parse(obj)
	} catch(e) {
		return obj
	}
	if (obj.dataType === 'string') {
		content = obj.content
	} else if (obj.dataType === 'number') {
		content = Number(obj.content)
	} else if (obj.dataType === 'boolean') {
		content = eval(obj.content)
	} else if (obj.dataType === 'object') {
		content = obj.content
	}
	return content
}

export const setStore = (params = {}) => {
	let { name, content } = params
	const obj = {
		dataType: typeof (content),
		content: content,
		datetime: new Date().getTime()
	}
	return uni.setStorageSync(name, JSON.stringify(obj))
}

export const removeStore = (params = {}) => {
	let { name } = params
	return uni.removeStorageSync(name)
}

export const clearStore = (params = {}) => {
	return uni.clearStorageSync()
}
