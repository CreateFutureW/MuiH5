  var musicList = [
  "http://c7.gg/f4Far",
  	"res/纯音乐 - 舒缓放松的太极拳音乐 - 古筝版纯音乐.mp3",
  	"res/纯音乐 - 斯卡布罗集市.mp3",
  	"res/轻音乐 - 风居住的街道.mp3",
  	"res/轻音乐 - 故乡的原风景.mp3",
  	"http://c7.gg/f4FcR",

  	"res/轻音乐 - 秋日私语.mp3"
  

  ];

  var v = Math.round(Math.random() * 6);

  $(window).ready(function() {
  
  	if($('#skin_day').is(':hidden')) {
  		$('audio').attr("src", musicList[v]);
  		$('audio').play;

  	}

  });
  
