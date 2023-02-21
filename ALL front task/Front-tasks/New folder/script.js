const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide')
const sliderBg = document.querySelector('.slider__bg');
const sliderNext = document.querySelector('.slider-control.next');
const sliderPrev = document.querySelector('.slider-control.prev');

const flkty = new Flickity( slider, {
  cellAlign: 'left',
  cellSelector: '.slide',
  pageDots: false,
  wrapAround: true,
  draggable: false,
  prevNextButtons: false
});

function slideAnim(currentSlide, targetSlide) {
  let tl = gsap.timeline({defaults: {duration: .5, ease: 'power2.in'}});
  let currentSlideEl = slides[currentSlide];
  let year = currentSlideEl.querySelector('.slide__date');
  let title = currentSlideEl.querySelector('.slide__title');
  let img = currentSlideEl.querySelector('.slide__img');
  tl.to(year, {xPercent: -80, autoAlpha: 0});
  tl.to(img, {xPercent: -80, autoAlpha: 0}, '-=.3');
  tl.to(title, {xPercent: -80, autoAlpha: 0}, '-=.3');
  tl.add(() => {
    flkty.next();
  })
  tl.add(() => {
    tl.revert();
  }, '+=1')
  
}

flkty.on('change', (index) => {
  let currentSlide = slides[index];
  let bgColor = currentSlide.dataset.bg;
  sliderBg.style.backgroundColor = bgColor;
})

sliderNext.addEventListener('click', () => {
  let currentSlide = flkty.selectedIndex;
  slideAnim(currentSlide, 3)
})

function initSlider() {
  let currentSlide = slides[0];
  let bgColor = currentSlide.dataset.bg;
  sliderBg.style.backgroundColor = bgColor;
}

initSlider();
