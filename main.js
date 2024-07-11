let dayss=document.querySelector(".days")
let Hou=document.querySelector(".Hours")

let min=document.querySelector(".minutes")

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
