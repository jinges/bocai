
export function trim(text){
	return text.replace(/^\s*|\s*$/g, '')
}

export function validatePhone(number) {
	return !/1\d{10}/.test(number)
}