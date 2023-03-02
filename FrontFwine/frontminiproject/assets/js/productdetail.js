document.querySelector('#zoom')
.addEventListener('mousemove', function(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
})


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

let elements = document.querySelectorAll('#Additional .head button');

for (const btn of elements) {
    btn.addEventListener('click', function() {
        document.querySelector('#Additional .body .active-body').classList.remove('active-body');
        document.querySelector('#Additional .head .active-head').classList.remove('active-head');
        document.querySelector(`#Additional .head [data-id="${btn.getAttribute('data-id')}"]`)
        .classList.add('active-head');
        document.querySelector(`#Additional .body [data-id="${btn.getAttribute('data-id')}"]`)
        .classList.add('active-body');
    })
}

$(document).ready(function(){    
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: true,
        autoplay: false,
        prevArrow: '#Sellers .arrow-prev',
        nextArrow: '#Sellers .arrow-next',
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
              slidesToScroll: 2
            }
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
});

    




let elem1s = document.querySelectorAll('.elem1');
let elem2s = document.querySelectorAll('.elem2');
let elem3s = document.querySelectorAll('.elem3');
let elem4s = document.querySelectorAll('.elem4');
let elem5s = document.querySelectorAll('.elem5');

elem1s.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    let basket = JSON.parse(localStorage.getItem('basket'));
    let findElement = basket.find((x => x.Id == "a10"));
    
    if (findElement === undefined) {
      basket.push({
          Id: "a10",
          Image: "https://wpbingosite.com/wordpress/kowine/wp-content/webp-express/webp-images/uploads/2018/10/Wine-01-01-450x450.jpg.webp",
          Title: "In hac habitasse platea dictumst tempor vet",
          Price: "100.00",
          Count: 1
      })
      ShowToast('Məhsul əlavə olundu');
  }else{
      findElement.Count++;
      ShowToast('Məhsulun sayı artırıldı');
  }

  localStorage.setItem('basket', JSON.stringify(basket));

  ShowItemCount();
  })
})

elem2s.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    let basket = JSON.parse(localStorage.getItem('basket'));
    let findElement = basket.find((x => x.Id == "a9"));
    
    if (findElement === undefined) {
      basket.push({
          Id: "a9",
          Image: "https://wpbingosite.com/wordpress/kowine/wp-content/webp-express/webp-images/uploads/2021/05/Product17-450x450.jpg.webp",
          Title: "In hac habitasse platea dictumst tempor mollis",
          Price: "214.22",
          Count: 1
      })
      ShowToast('Məhsul əlavə olundu');
  }else{
      findElement.Count++;
      ShowToast('Məhsulun sayı artırıldı');
  }

  localStorage.setItem('basket', JSON.stringify(basket));

  ShowItemCount();
  })
})

elem3s.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    let basket = JSON.parse(localStorage.getItem('basket'));
    let findElement = basket.find((x => x.Id == "a19"));
    
    if (findElement === undefined) {
      basket.push({
          Id: "a19",
          Image: "https://wpbingosite.com/wordpress/kowine/wp-content/webp-express/webp-images/uploads/2021/05/Product14-450x450.jpg.webp",
          Title: "QUISQUE EGET EROS SIT AMET NEQUE TINCIDUNT",
          Price: "90.00",
          Count: 1
      })
      ShowToast('Məhsul əlavə olundu');
  }else{
      findElement.Count++;
      ShowToast('Məhsulun sayı artırıldı');
  }

  localStorage.setItem('basket', JSON.stringify(basket));

  ShowItemCount();
  })
})

elem4s.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    let basket = JSON.parse(localStorage.getItem('basket'));
    let findElement = basket.find((x => x.Id == "a5"));
    
    if (findElement === undefined) {
      basket.push({
          Id: "a5",
          Image: "https://wpbingosite.com/wordpress/kowine/wp-content/webp-express/webp-images/uploads/2021/05/Product12-450x450.jpg.webp",
          Title: "DONEC FAUCIBUS ODIO FELIS NEC VIVERRA NISI SOLLICITUDIN",
          Price: "60.00",
          Count: 1
      })
      ShowToast('Məhsul əlavə olundu');
  }else{
      findElement.Count++;
      ShowToast('Məhsulun sayı artırıldı');
  }

  localStorage.setItem('basket', JSON.stringify(basket));

  ShowItemCount();
  })
})

elem5s.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    let basket = JSON.parse(localStorage.getItem('basket'));
    let findElement = basket.find((x => x.Id == "a4"));
    
    if (findElement === undefined) {
      basket.push({
          Id: "a4",
          Image: "https://wpbingosite.com/wordpress/kowine/wp-content/webp-express/webp-images/uploads/2021/05/Product10-450x450.jpg.webp",
          Title: "DONEC A ENIM A IPSUM LOBORTIS BLANDIT INTERDUM",
          Price: "125.00",
          Count: 1
      })
      ShowToast('Məhsul əlavə olundu');
  }else{
      findElement.Count++;
      ShowToast('Məhsulun sayı artırıldı');
  }

  localStorage.setItem('basket', JSON.stringify(basket));

  ShowItemCount();
  })
})

function ShowToast(msg){
  let toast = document.querySelector('#Toast');
  let txt = document.querySelector('#Toast p');
  txt.innerHTML = msg;
  toast.style.right = '20px'
  setTimeout(() => {
      toast.style.right = '-500px'
  }, 1500);
}

function ShowItemCount() {
  let cntcart = document.getElementById('cart-count')
  let cntcart2 = document.getElementById('cart-count2')
  cntcart.innerHTML = JSON.parse(localStorage.getItem('basket')).length;
  cntcart2.innerHTML = JSON.parse(localStorage.getItem('basket')).length;
}

ShowItemCount();


let zoomimages = document.querySelectorAll('#Main .images .image img');
let zoomimg1 = document.querySelector('#Main #zoom');
let zoomimg2 = document.querySelector('#Main #zoom img');

zoomimages.forEach(item => {
  item.addEventListener('click', function() {
    // let style = zoomimg1.currentStyle || window.getComputedStyle(zoomimg1, false);
    // let bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    zoomimg1.style.backgroundImage = `url("${item.src}")`;
    zoomimg2.setAttribute('src', item.src);
  })
})