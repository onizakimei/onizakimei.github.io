//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bg/01.webp)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bg/002.webp)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bg/03.webp)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bg/04.webp)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bg/05.webp)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bg/06.webp)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bg/07.webp)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.ceil(Math.random() * (backimg.length-1));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];

