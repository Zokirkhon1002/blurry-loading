let text = document.querySelector(".loading-text");
let bg = document.querySelector(".bg");

let x = 0;

let start = setInterval(blurStyle, 30);

function blurStyle(){
  x++
  if(x <= 100){
     text.innerHTML = `${x}%`;
     text.style.opacity = `${1 - x / 100}`;
     bg.style.filter = `blur(${100 -x}px)`;
  }

}