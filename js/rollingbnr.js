const ul = document.querySelector('.rolling_list');
const li = document.querySelectorAll('.rolling_list li');
const size = li[0].clientWidth;
var left = 0;
var trigger ='';


function move(){
    if(Math.abs(left) >= size){
        var lif = document.querySelector('.rolling_list li:first-child');
        left = 0;
        ul.appendChild(lif);
    }
    ul.style.left = left+'px';
    left--;
    // console.log(left);
}

trigger = setInterval(move,5);
ul.addEventListener('mouseleave', function(){
    trigger= setInterval(move,5);
});
ul.addEventListener('mouseover', function(){
    clearInterval(trigger);            
});