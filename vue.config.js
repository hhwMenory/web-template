module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/web/web-template'
		: '/',
	outputDir: 'web-template'
}
