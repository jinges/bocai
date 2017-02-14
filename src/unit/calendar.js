function switchDate(p){
	var res = '';
	switch(p) {
		case 'prevYear':
			res = dateObj.year(-1);
			break;
		case 'nextYear':
			res = dateObj.year(1);
			break;
		case 'prevMonth':
			res = dateObj.month(-1);
			break;
		case 'nextMonth':
			res = dateObj.month(1);
			break;
		default:
			res = dateObj.now =  new Date();
	}
	return res;
}

var dateObj = {
	now: new Date(),
	year: function(n){
		var now = this.now;
		now.setFullYear(now.getFullYear() + n);
		this.now = now;
		return now;
	},
	month: function (n){
		var now = this.now;
		now.setMonth(now.getMonth() + n);
		this.now = now;
		return now;
	},
	getDays: function (date, n){
		var date = new Date(date);
		date.setMonth(date.getMonth()+n);
		date.setDate(0);
		return date.getDate();
	},
	getWeek: function(date, n){
		var date = new Date(date);
		date.setDate(n);
		var day = date.getDay();
		return  day? day: 7;
	},
	formatDate: function (date, format) {
		if(!date){
			return false;
		}
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
	},
	calendar: function(date, defaultDate){
		var days = this.getDays(date, 1) * 1;
		var week = this.getWeek(date, 1);
		var pDays = this.getDays(date, 0)
		var nDays = 42 - week - days ;
		var newDate = this.formatDate(date, 'yyyy/MM');

		var res = [];
		for(var i=0;i<week;i++){
			res.unshift([pDays--, 0]);
		}

		if(defaultDate) {
			var defaultDate = new Date(defaultDate);
			var defaultDay = defaultDate.getDate();
			defaultDate = this.formatDate(defaultDate, 'yyyy/MM');
			if(newDate == defaultDate) {
				for(var i=0;i<days;i++) {
					if(defaultDay == i){
						res.push([i+1, 1])
						continue;
					}
					res.push([i+1, 0]);
				}
			} else {
				for(var i=0;i<days;i++) {
					res.push([i+1, 0]);
				}
			}
		} else {
			for(var i=0;i<days;i++) {
				res.push([i+1, 0]);
			}
		}


		for(var i=0; i< nDays; i++){
			res.push([i+1, 0]);
		}
		return res;
	}
}

export default (p, defaultDate)=>{
	var res = switchDate(p);
	return {
		year: res.getFullYear(),
		month: res.getMonth() + 1,
		day: res.getDate(),
		date: dateObj.formatDate(res, 'yyyy年MM月'),
		data: dateObj.calendar(res, defaultDate)
	};
}