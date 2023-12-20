let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.appendChild(span);
  });
});
let currnetwordindex = 0;
let maxwordindex = words.length - 1;
words[currnetwordindex].style.opacity = "1";
let changetext = () => {
  let currentword = words[currnetwordindex];
  let nextword =
    currnetwordindex === maxwordindex ? words[0] : words[currnetwordindex + 1];
  Array.from(currentword.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextword.style.opacity = "1";
  Array.from(nextword.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(
      () => {
        letter.className = "letter in";
      },
      340 + i * 80
    );
  });
  currnetwordindex =
    currnetwordindex === maxwordindex ? 0 : currnetwordindex + 1;
};

changetext();
setInterval(changetext, 3000);

// ==========================skills=========
// const circles=document.querySelectorAll('.circle')
// circles.forEach(elem =>{
//   let dots=elem.getAttribute("data_dots")
//   let marked=elem.getAttribute("data_percent")
//   let percent=Math.floor(dots*marked/100)
//   let points=""
//   let rotate=360/dots

// for (let i=0;i<dots;i++)
// {
//   points +=`  
//   <div class="points" style="--i:${i}; --rot:${rotate}deg></div>

  
//   `
// }
// elem.innerHTML=points
// })


const circles=document.querySelectorAll(".circle")
circles.forEach(elem =>{
  var dots=elem.getAttribute("data_dots")
  var marked=elem.getAttribute("data_percent")
  var percent=Math.floor(dots*marked/100)
  var points=""
  var rotate=360/dots
for(let i=0;i<dots;i++)
{
  points +=`
  <div class="points"style="--i:${i};--rot:${rotate}deg"></div>
  
  `
  elem.innerHTML=points
}
const pointMarked=elem.querySelectorAll(".points")
for(let i =0;i<percent;i++){
  pointMarked[i].classList.add("marked")
}
})
// =======================maxitup========
var mixer = mixitup('.portfolio_gallery');




let menuli=document.querySelectorAll("header ul li a")
let section=document.querySelectorAll("section")
function activemenu(){
  let len=section.length
  while(--len && window.scrollY + 97 <section[len].offsetTop){}
  menuli.forEach (sec => sec.classList.remove("active"))
  menuli[len].classList.add("active")
}
activemenu()
window.addEventListener("scroll",activemenu)

const header=document.querySelector("header")
window.addEventListener("scroll",function(){
  header.classList.toggle("sticky",window.scrollY > 50)
})

let manuIcon=document.querySelector("#manu_icon")
let navlist=document.querySelector(".navlist")

manuIcon.addEventListener("click",()=>{
  manuIcon.classList.toggle("bx-x")
  navlist.classList.toggle("open")
 
})
window.onscroll=()=>{
  manuIcon.classList.remove("bx-x")
  navlist.classList.remove("open")
}

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
if(entry.isIntersecting){
  entry.target.classList.add("show_items")

}else{
  entries.target.classList.remove("show_items")
}


  })
})

const scrollSclae=document.querySelectorAll(".scroll_scale")
scrollSclae.forEach((el)=>{
  observer.observe(el)
})
const scrollBottom=document.querySelectorAll(".scroll_bottom")
scrollBottom.forEach((el)=>{
  observer.observe(el)
})
const scrollTop=document.querySelectorAll(".scroll_top")
scrollTop.forEach((el)=>{
  observer.observe(el)
})