
export function os(){
	var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > -1) { 
        return 1;
    }
    if (ua.indexOf('Android') > -1) {
        return 2;
    }

}