let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener('scroll',function(){
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';

});

const buttons = document.querySelectorAll('a');
buttons.forEach(btn =>{
btn.addEventListener('click' , function(e){
        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;

         let ripples = document.createElement('span');
         ripples.style.left = x + 'px';
         ripples.style.top = y + 'px';
         this.appendChild(ripples);

         setTimeout(() => {
            ripples.remove()
         },1000);
    });
});
   

