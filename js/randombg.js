//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
  "url(/img/bg/01.jpg)",
  "url(/img/bg/02.jpg)",
  "url(/img/bg/03.jpg)",
  "url(/img/bg/04.jpg)",
  "url(/img/bg/05.jpg)",
  "url(/img/bg/06.jpg)",
  "url(/img/bg/07.jpg)",
  "url(/img/bg/08.jpg)",
  "url(/img/bg/09.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.ceil(Math.random() * (backimg.length-1));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];