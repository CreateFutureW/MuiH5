
  	//根据时间不同 切换背景
	var hour = new Date().getHours();
	
	if(hour <= 6) {
		
		$("#skin_day").hide();
		
		$("#skin_night").show();
	} else if(hour > 6 && hour < 19) {
		$("#skin_day").show();
		$("#skin_night").hide();
	} else{
		
		$("#skin_day").hide();
		$("#skin_night").show();
	}
