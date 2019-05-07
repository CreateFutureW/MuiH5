//根据IOS/Android 显示不同数据
				
var userAgentInfo= navigator.userAgent;
 //app = navigator.appVersion;
 
var isiOS = !userAgentInfo.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端   

var isAndroid = userAgentInfo.indexOf('Android') > -1 || userAgentInfo.indexOf('Linux') > -1; //android终端或者uc浏览器  

function isPlatformNum(){
	
	return isiOS==true?0:1;
    
 }
 

			//返回true表示为pc端打开，返回false表示为手机端打开
function check() { 
 
  var Agents =new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"); 
  var flag=true; 
  
  for(var v=0;v<Agents.length;v++) { 
  	
     if(userAgentInfo.indexOf(Agents[v])>0) { 
     	
       flag=false; 
       break; 
     } 
   } 
   return flag; 

}







if(check()){
	window.open("page/p.html",name="_self-URL",replace="true-URL");
}
	




