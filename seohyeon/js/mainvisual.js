const showClass = 'show';
const actClass = 'active';
const firstSlide = document.querySelector('.visual_list li:first-child');
const lastSlide = document.querySelector('.visual_list li:last-child');
const nextBtn = document.querySelector('.visual_next'); // next button
const prevBtn = document.querySelector('.visual_prev'); // prev button
const firstDot = document.querySelector(".indicator_list li:first-child");
const lastDot = document.querySelector(".indicator_list li:last-child");
const track = document.querySelector(".visual_list");
const slides = document.querySelectorAll('.visual_list li');
const dotNav = document.querySelector(".indicator_list");
const dots = document.querySelectorAll('.indicator_list li');

firstSlide.classList.add(showClass);
firstDot.classList.add(actClass);

function moveSlide() {
    var curSlide = document.querySelector('.show')
    var curDot = document.querySelector('.active')
    if (curSlide) {
        curSlide.classList.remove(showClass);
        curDot.classList.remove(actClass);
        var nextSlide= curSlide.nextElementSibling;
        var nextDot= curDot.nextElementSibling;
        if (nextSlide) {
            nextSlide.classList.add(showClass);
            nextDot.classList.add(actClass);
        } else {
            firstSlide.classList.add(showClass);
            firstDot.classList.add(actClass);
        }
    }   else {
        firstSlide.classList.add(showClass);
        firstDot.classList.add(actClass);
    }
};

function slide() {
    nextBtn.addEventListener('click', function(){
        event.preventDefault();
        var curSlide = document.querySelector('.show')
        var curDot = document.querySelector('.active')
        if(curSlide) {
            curSlide.classList.remove(showClass);
            curDot.classList.remove(actClass);
            const nextSlide= curSlide.nextElementSibling;
            const nextDot= curDot.nextElementSibling;
            if(nextSlide) {
                nextSlide.classList.add(showClass);
                nextDot.classList.add(actClass);
            } else {
                firstSlide.classList.add(showClass);
                firstDot.classList.add(actClass);    
            }
        } else {
            firstSlide.classList.add(showClass);
            firstDot.classList.add(actClass);
        }
    });

    prevBtn.addEventListener('click', function(){
        event.preventDefault();
        var curSlide = document.querySelector('.show')
        var curDot = document.querySelector('.active')
        if(curSlide) {
            curSlide.classList.remove(showClass);
            curDot.classList.remove(actClass);
            const prevSlide= curSlide.previousElementSibling;
            const prevDot= curDot.previousElementSibling;
            if(prevSlide) {
                prevSlide.classList.add(showClass);
                prevDot.classList.add(actClass);
            } else {
                lastSlide.classList.add(showClass);    
                lastDot.classList.add(actClass);
            }
        } else {
            lastSlide.classList.add(showClass);
            prevDot.classList.add(actClass);
        }
   
    });


    var li_click = function(idx){
        dots[idx].addEventListener('click', function(){
            if(!dots[idx].classList.add(actClass)){
                for(var i=0;i<dots.length;i++){
                    dots[i].classList.remove(actClass);
                    slides[i].classList.remove(showClass);
                }
                dots[idx].classList.add(actClass);
                slides[idx].classList.add(showClass);
            } else {
                dots[idx].classList.remove(actClass);
                slides[idx].classList.remove(showClass);
            }
        });
    }

    for(var i=0; i<dots.length; i++){
        li_click(i);  
    }
};

slide();

// setInterval(moveSlide, 1000);