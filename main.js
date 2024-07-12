let dayss=document.querySelector(".days")
let Hou=document.querySelector(".Hours")

let min=document.querySelector(".minutes")
const btnleft=document.getElementById("btn-left")
const btnright=document.getElementById("btn-right")
btnleft.addEventListener('click',function(e){
    e.preventDefault()
    console.log(`left button click`) ;
})
btnright.addEventListener('click',function(e){
    e.preventDefault()
    console.log(`right button click`) ;
})

let sece=document.querySelector(".second")
let time=259200

const tic=function(){
    const day=Math.trunc((time/3600)/24)
    const hour=Math.trunc((time/3600))
    const mi=Math.trunc((time % 3600) / 60)
    const sec=String(Math.trunc(time%60));
    dayss.textContent=day
Hou.textContent=hour
min.textContent=mi
sece.textContent=sec

if(time > 0){
    time --
}
else{
    dayss=Hou=min=sece=`the discount time is finished`
    clearInterval(interval)
}

}

tic()
const interval= setInterval(tic,1000)

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar

  });