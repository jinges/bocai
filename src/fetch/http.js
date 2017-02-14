let Vue = require('Vue');

export default function(url, data, method) {
	Vue.http.options.emulateJSON = true;
	return Vue.http[method](url, data).then(
		result => result
	).catch(
		err => err
	)
}