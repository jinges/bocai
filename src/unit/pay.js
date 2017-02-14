
export default (data)=>{
	 if (typeof WeixinJSBridge == "undefined"){
		 if( document.addEventListener ){
			 document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
		 }else if (document.attachEvent){
			 document.attachEvent('WeixinJSBridgeReady', jsApiCall);
			 document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
		 }
	 }else{
		 jsApiCall(data);
	 }
}

 //调用微信JS api 支付
let jsApiCall = (jsApiParameters) => {
	 WeixinJSBridge.invoke(
			 'getBrandWCPayRequest',
			 jsApiParameters,
			 function(res){
				 // WeixinJSBridge.log(res.err_msg);
				 // alert(res.err_code+res.err_desc+res.err_msg);
				 // alert(JSON.stringify(res));
				 // return false;
				 if(res.err_msg.indexOf('ok')>-1) {
				 	window.location = '/?#!/paysuccess'
				 } else {
				 	window.location = '/?#!/'
				 }

			 }
	 );
 }