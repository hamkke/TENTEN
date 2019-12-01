const showClass = 'show';
const actClass = 'active';
const firstSlide = document.querySelector('.visual_list li:first-child');
const lastSlide = document.querySelector('.visual_list li:last-child');
const nextBtn = document.querySelector('.visual_next'); // next button
const prevBtn = document.querySelector('.visual_prev'); // prev button
const firstDot = document.querySelector(".indicator_list li:first-child");
const lastDot = document.querySelector(".indicator_list li:last-child");
const track = document.querySelector(".visual_list");
const slides = Array.from(track.children);
const dotNav = document.querySelector(".indicator_list");
const dots = Array.from(dotNav.children);

firstSlide.classList.add(showClass);
firstDot.classList.add(actClass);

function moveSlide() {
    const curSlide = document.querySelector(`.${showClass}`)
    const curDot = document.querySelector(`.${actClass}`)
    if (curSlide) {
        curSlide.classList.remove(showClass);
        curDot.classList.remove(actClass);
        const nextSlide= curSlide.nextElementSibling;
        const nextDot= curDot.nextElementSibling;
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
        const curSlide = document.querySelector(`.${showClass}`)
        const curDot = document.querySelector(`.${actClass}`)
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
        const curSlide = document.querySelector(`.${showClass}`)
        const curDot = document.querySelector(`.${actClass}`)
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

dotNav.addEventListener("click", e => {
    event.preventDefault();
    const onDot = e.target.closest("li");
    const onIndex = dots.findIndex(dots => dots === onDot);
    const onSlide = slides[onIndex];
        
    const curSlide = document.querySelector(`.${showClass}`);     
    const curDot = document.querySelector(`.${actClass}`);         

    if (onSlide && curSlide) {
        curSlide.classList.remove(showClass);
        curDot.classList.remove(actClass);
        onSlide.classList.add(showClass);
        onDot.classList.add(actClass);
    } 
});
};

slide();

// setInterval(moveSlide, 7500);