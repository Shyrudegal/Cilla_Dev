const words = ["Hi, I'm Over Here!"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop(){
  const el = document.getElementById("auto-type");
  if(!el) return;
  
  const current = words[wordIndex];
  
  if(isDeleting){
    el.textContent = current.substring(0, charIndex--);
  } else {
    el.textContent = current.substring(0, charIndex++);
  }

  let speed = isDeleting ? 50 : 100;

  if(!isDeleting && charIndex === current.length){
    speed = 1500;
    isDeleting = true;
  } else if(isDeleting && charIndex === 0){
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 500;
  }

  setTimeout(typeLoop, speed);
}

document.addEventListener("DOMContentLoaded", typeLoop);