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

var swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    gap:30,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
      reachEnd: function () {
        if (swiper.slides.length > swiper.slidesPerView) {
          swiper.params.slidesPerView = Math.min(swiper.slides.length, swiper.slidesPerView);
          swiper.update();
        }
      },
    },
  });

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 460 ? 'vertical' : 'horizontal';
    return direction;
}

// const data1={
//   Email:'abdallahabdirisaaq@gmail.com',
//   pin:'7007811'

// }

// const data1 = {
//   Email: 'abdallahabdirisaaq@gmail.com',
//   pin: '7007811'
// };

// const login = document.querySelector('.login-page');
// const namee = document.getElementById("name-login");
// const password = document.getElementById('Password-login');
// const btnlogin = document.getElementById('login-btn');
// console.log(login,namee,password,btnlogin) ;

// btnlogin.addEventListener('click', function(e) {
//   e.preventDefault();
//   if (namee.value === data1.Email && password.value === data1.pin) {
//     console.log('bismillah');
//   } else {
//     console.log('wrong username or password');
//   }
// });
