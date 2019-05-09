function makeCode(url) {
		$("#qrcode_content").qrcode({
			render: "canvas",
			text: url,
			width : "200",               //二维码的宽度
			height : "200",              //二维码的高度
			background : "#ffffff",       //二维码的后景色
			foreground : "#000000",        //二维码的前景色
			src: ''                         //二维码中间的图片
		});
	}

onload=function (){
	    var url = 'https://bluerabbit.top/shopkey/';
		makeCode(url);
		

}