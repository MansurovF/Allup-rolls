let search = document.querySelector('#SearchIcon');
let srcdiv = document.querySelector('#Search-div');

let sidebar = document.querySelector('#Sidebar');
let sidebar_open = document.querySelector('#Sidebar-open');
let sidebar_close = document.querySelector('#Sidebar-close');

search.addEventListener('click', function() {
    srcdiv.classList.toggle('active');
})

sidebar_open.addEventListener('click', function() {
    sidebar.classList.add('active-sidebar');
})

sidebar_close.addEventListener('click', function() {
    sidebar.classList.remove('active-sidebar');
})

let goup = document.querySelector('#Up');

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 20) {
    goup.style.visibility = 'visible';
    goup.style.opacity = '1';
  } else {
    goup.style.visibility = 'hidden';
    goup.style.opacity = '0';
  }
});

goup.addEventListener('click', function(){
  window.scrollTo({top: 0, behavior: 'smooth'});
})




$(document).ready(function(){

    $('.slider1').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

    $('.slider2').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        autoplay: false,
        prevArrow: '#Clients .arrow-prev',
        nextArrow: '#Clients .arrow-next',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

    $('.slider3').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: false,
        autoplay: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: false
            }
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

});


function ShowItemCount() {
  let cntcart = document.getElementById('cart-count')
  let cntcart2 = document.getElementById('cart-count2')
  cntcart.innerHTML = JSON.parse(localStorage.getItem('basket')).length;
  cntcart2.innerHTML = JSON.parse(localStorage.getItem('basket')).length;
}

ShowItemCount();