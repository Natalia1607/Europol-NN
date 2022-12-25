
'use strict';
window.onscroll = function() {
	var scrollCurrent = window.pageYOffset;
	const header = document.querySelector('header')
	if (scrollCurrent>=100) {
		 header.classList.add('scrolled')
	}
	
	else {
		 header.classList.remove('scrolled')
	}
}

const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine  = document.querySelector('.slider-line');
const sliderRound = document.querySelectorAll('[data-slide]');
let count = 0;
let width = null;

function init() {
	width = document.querySelector('.slider').offsetWidth;
	sliderLine.style.width = width*images.length + 'px';
	images.forEach( item => {
		item.style.width = width + 'px';
		item.style.height = 'auto';
	})
	rollSlider();
}
window.addEventListener('resize', init);
init();

document.querySelector('.slider-prev').addEventListener('click', function() {
	count--;
	if(count < 0){
		count = images.length - 1;
	}
	for(let i = 0; i < sliderRound.length; i++ ) {
		sliderRound[i].classList.remove('input--active');
	}
	for(let j = 0; j < sliderRound.length; j++ ) {
			if (j == count) {
					sliderRound[j].classList.add('input--active');
			}
		}
	rollSlider();
});

document.querySelector('.slider-next').addEventListener('click', function() {
	count++;
	if(count >= images.length){
		count = 0;
	}
	for(let i = 0; i < sliderRound.length; i++ ) {
		sliderRound[i].classList.remove('input--active');
	}
	for(let j = 0; j < sliderRound.length; j++ ) {
		if (j == count) {
			sliderRound[j].classList.add('input--active');
		}
	}
	rollSlider();
});

function rollSlider() {
	sliderLine.style.transform = 'translate(-'+count*width+'px)';
}





for (const round of sliderRound) {
	round.addEventListener('click', function () {
		for(let i = 0; i < sliderRound.length; i++ ) {
			sliderRound[i].classList.remove('input--active');}
		let countRound = round.getAttribute("data-slide");
		count = countRound;
		rollSlider();		
		round.classList.add('input--active');
	})
}



// --------------------------------------------
