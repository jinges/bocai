export function formatDate(date, format) {
	if(!date){
		return false;
	}
	date = new Date(date.replace(/-/g, '/'));
    let obj = {
        'y+': date.getFullYear(),
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };

    if (new RegExp("(y+)").test(format)) {
        format = format.replace(RegExp.$1, obj['y+']);
    }
    for (let j in obj) {
        if (new RegExp("(" + j + ")").test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (obj[j]) : (("00" + obj[j]).substr(("" + obj[j]).length)));
        }
    }
    return format;
}


export function formatMoney(money, decimals) {
    if(!/\d/g.test(decimals) || decimals > 2) {
        decimals = 2;
    }
    money  = parseFloat((money * 1 + '').replace(/[^\d\.]/, '')).toFixed(decimals).split('.');
    let m_l = money[0].split('').reverse(), m_r = money[1], newMoney = '';

    for(let i =0, len = m_l.length; i < len; i++) {
        newMoney += m_l[i] + ((i + 1) % 3 == 0 && (i + 1) != len ? ',': '');
    }

    newMoney = newMoney.split('').reverse().join('');

    if(decimals > 0) {
        return newMoney + '.' + m_r
    } else {
        return newMoney;
    }

}