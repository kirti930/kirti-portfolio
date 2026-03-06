const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");

menuToggle.onclick=()=>{
navLinks.classList.toggle("active");
};

const toggle=document.getElementById("theme-toggle");

toggle.onclick=()=>{
document.body.classList.toggle("dark");
};

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>200){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({top:0,behavior:"smooth"});

};

const text="Full Stack Developer | MERN | DSA Enthusiast";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,70);

}

}

typing();