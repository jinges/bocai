export function zhixuanfushi(arr){
	let result = 1;
	for(var i=0,len=arr.length;i<len;i++) {
		result*=arr[i].length;
	}
	return result;
}

export function zhixuanzuhe(arr){
	return zhixuanfushi(arr) * 5;
}

export function zuhe(arr){
	var nums = arr[0] * 1;
}
