function ballFun(arr) {
	let result = 1;
	for(var i=0,len=arr.length;i<len;i++) {
		result*=arr[i].length;
	}
	return result;
}

export function fushi(arr){
	return  ballFun(arr);
}

export function zuhe(arr, num){
	let count = ballFun(arr);
	return count * num
}

export function danshi(arr){
	return arr.length
}

export function P(n, r){
	let result  = 1;
	for(let i=0;i<r;i++) {
		result *= (n-i)
	}
	return result;
}

export function C(n, r) {
	let result  = 1;
	for(let i=0;i<r;i++) {
		result *= (r-i)
	}
	return P(n, r) / result;
}