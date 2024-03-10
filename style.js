let text = document.getElementById('header-text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

const endPoint = document.documentElement.scrollHeight - window.innerHeight;
var originalTextDisplay = text.style.display;
var originalHill1Display = hill1.style.display;

window.addEventListener('scroll',()=>{
let value = window.scrollY;
if(value<endPoint){
      text.style.display = originalTextDisplay;
      hill1.style.display = originalHill1Display;
text.style.marginTop = value * 2.5 + 'px';
leaf.style.top= value*-1.5 + 'px';
leaf.style.left= value*1.5 + 'px';
hill5.style.left= value*1.5 + 'px';
hill4.style.left= value*-1.5 + 'px';
hill1.style.top=value*1+'px';
}else{
      text.style.display = 'none';
      hill1.style.display = 'none';
}
});

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}


