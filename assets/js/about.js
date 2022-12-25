/* Slider */
const slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('slide--active');
    }
    slides[n].classList.add('slide--active');
};

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('dot--active');
    }
    dots[n].classList.add('dot--active');
};

const prepareCurrentSlide = int => {
    activeSlide(index);
    activeDot(index);
};

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
};

dots.forEach((item, indexDot)=> {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    });
});

setInterval(nextSlide, 5000);