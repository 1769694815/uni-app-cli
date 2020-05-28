let baseUrl, baseDomain

if (process.env.NODE_ENV === 'development') {
	baseUrl = 'http://api.com'
	baseDomain = 'http://uni-app.com'
} else {
	baseUrl = 'http://testapi.com'
	baseDomain = 'http://testuni-app.com'
}

export {
	baseUrl,
	baseDomain
}