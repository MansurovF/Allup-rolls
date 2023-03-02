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




let productrow = document.querySelector('#products');
let productstring = '';

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


let productsidebar = document.querySelector('#Main .left');
let closeproductsidebar = document.querySelector('#closeproductsidebar');
let openproductsidebar = document.querySelector('#openproductsidebar');

closeproductsidebar.addEventListener('click', function() {
    productsidebar.style.left = '-400px';
})
openproductsidebar.addEventListener('click', function() {
    productsidebar.style.left = '0';
})

let colname = 'col-lg-4 col-md-4 col-sm-6 col-6';
let page = 1;
let minPrice = 30;
let maxPrice = 350;
let category = '';
let bottlesize = '';
let vintage = '';

if (localStorage.getItem('basket') === null) {
    localStorage.setItem('basket', JSON.stringify([]));
}

fetch('./products.json')
.then(res => res.json())
.then(data => {
    if (localStorage.getItem('products') === null) {
        localStorage.setItem('products', JSON.stringify(data));
    }
    let html = '';
    let count = 0;
    data.forEach(item => {
        if(((page == 1 && count < 12) || (page == 2 && count < 24)) &&
            (item.price >= minPrice && item.price <= maxPrice) && 
            ( (category == '') || (category == item.category) ) && 
            ( (bottlesize == '') || (bottlesize == item.bottlesize) ) && 
            ( (vintage == '') || (vintage == item.vintage) ) 
            ){
            html += `
        <div id="a${item.id}" class="productitem ${colname}">
        <a href="productdetail.html">
        <div class="box">
        <div class="img-div">
            <img src=${item.image} alt="">
            <img src=${item.imageabs} alt="">
            ${item.hot == 'true' ? '<div class="hot"><h1>Hot</h1></div>' : ''} 
            ${item.discount != 'none' ? '<div class="discount"><h1>-'+ item.discount +'%</h1></div>' : ''} 
            <div class="bag addcard">
                <i class="fa-solid fa-bag-shopping"></i>
            </div>
            <div class="heart">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <div class="body-div">
            <div class="rating">
                <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                <span>(${item.review} review)</span>
            </div>
            <h4>${item.title}</h4>
            <h3 data-price=${item.price}>${item.pricelt != 'none' ? '<span>$'+ item.pricelt +'</span>' : ''}$${item.price}</h3>
        </div>
        
    </div>
        </a>
    </div>
        `
        count++;
        }
    })
    productrow.innerHTML = html;
    testfunc();
})





let bir = document.querySelector('#bir');
let iki = document.querySelector('#iki');
let uc = document.querySelector('#uc');
let dort = document.querySelector('#dort');

bir.addEventListener('click', function() {
    colname = 'col-lg-12 col-md-4 col-sm-6 col-6';
    document.querySelector('.colactive').classList.remove('colactive');
    bir.classList.add('colactive');
    fetch('./products.json')
    .then(res => res.json())
    .then(data => {
        let html = '';
        let count = 0;
        data.forEach(item => {
            if(((page == 1 && count < 12) || (page == 2 && count < 24)) &&
                (item.price >= minPrice && item.price <= maxPrice) && 
                ( (category == '') || (category == item.category) ) && 
                ( (bottlesize == '') || (bottlesize == item.bottlesize) ) && 
                ( (vintage == '') || (vintage == item.vintage) ) 
                ){
                html += `
                <div id="a${item.id}" class="productitem2 ${colname}">
                    <a href="productdetail.html">
                        <div class="box row">
                            <div class="upperdiv col-lg-4">
                                <div class="img-div">
                                    <img src=${item.image} alt="">
                                    <img src=${item.imageabs} alt="">
                                    ${item.hot == 'true' ? '<div class="hot"><h1>Hot</h1></div>' : ''} 
                                    ${item.discount != 'none' ? '<div class="discount"><h1>-'+ item.discount +'%</h1></div>' : ''} 
                                </div>
                            </div>
                            <div class="body-div col-lg-8 text-start">
                                <div class="rating">
                                    <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                                    <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                                    <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                                    <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                                    <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                                    <span>(${item.review} review)</span>
                                </div>
                                <h4>${item.title}</h4>
                                <h3>${item.pricelt != 'none' ? '<span>$'+ item.pricelt +'</span>' : ''}$${item.price}</h3>
                                <div class="alar">
                                    <button class="addcard">ADD TO CART</button>
                                    <button class="second"><i class="fa-regular fa-heart"></i></button>
                                </div>
                                <div class="description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `
            count++;
            }
        })
        productrow.innerHTML = html;
        testfunc2();
    })
})

iki.addEventListener('click', function() {
    colname = 'col-lg-6 col-md-4 col-sm-6 col-6';
    document.querySelector('.colactive').classList.remove('colactive');
    iki.classList.add('colactive');
    fetch('./products.json')
    .then(res => res.json())
    .then(data => {
        let html = '';
        let count = 0;
        data.forEach(item => {
            if(((page == 1 && count < 12) || (page == 2 && count < 24)) &&
                (item.price >= minPrice && item.price <= maxPrice) && 
                ( (category == '') || (category == item.category) ) && 
                ( (bottlesize == '') || (bottlesize == item.bottlesize) ) && 
                ( (vintage == '') || (vintage == item.vintage) ) 
                ){
                html += `
            <div id="a${item.id}" class="productitem ${colname}">
            <a href="productdetail.html">
            <div class="box">
                <div class="img-div">
                    <img src=${item.image} alt="">
                    <img src=${item.imageabs} alt="">
                    ${item.hot == 'true' ? '<div class="hot"><h1>Hot</h1></div>' : ''} 
                    ${item.discount != 'none' ? '<div class="discount"><h1>-'+ item.discount +'%</h1></div>' : ''} 
                    <div class="bag addcard">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                    <div class="heart">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div class="body-div">
                    <div class="rating">
                        <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                        <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                        <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                        <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                        <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                        <span>(${item.review} review)</span>
                    </div>
                    <h4>${item.title}</h4>
                    <h3>${item.pricelt != 'none' ? '<span>$'+ item.pricelt +'</span>' : ''}$${item.price}</h3>
                </div>
                
            </div>
            </a>
            
        </div>
            `
            count++;
            }
        })
        productrow.innerHTML = html;
        testfunc()
    })
})

uc.addEventListener('click', function() {
    colname = 'col-lg-4 col-md-4 col-sm-6 col-6';
    document.querySelector('.colactive').classList.remove('colactive');
    uc.classList.add('colactive');
    fetch('./products.json')
    .then(res => res.json())
    .then(data => {
        let html = '';
        let count = 0;
        data.forEach(item => {
            if(((page == 1 && count < 12) || (page == 2 && count < 24)) &&
                (item.price >= minPrice && item.price <= maxPrice) && 
                ( (category == '') || (category == item.category) ) && 
                ( (bottlesize == '') || (bottlesize == item.bottlesize) ) && 
                ( (vintage == '') || (vintage == item.vintage) ) 
                ){
                html += `
            <div id="a${item.id}" class="productitem ${colname}">
            <a href="productdetail.html">
            <div class="box">
                <div class="img-div">
                    <img src=${item.image} alt="">
                    <img src=${item.imageabs} alt="">
                    ${item.hot == 'true' ? '<div class="hot"><h1>Hot</h1></div>' : ''} 
                    ${item.discount != 'none' ? '<div class="discount"><h1>-'+ item.discount +'%</h1></div>' : ''} 
                    <div class="bag addcard">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                    <div class="heart">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div class="body-div">
                    <div class="rating">
                        <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                        <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                        <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                        <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                        <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                        <span>(${item.review} review)</span>
                    </div>
                    <h4>${item.title}</h4>
                    <h3>${item.pricelt != 'none' ? '<span>$'+ item.pricelt +'</span>' : ''}$${item.price}</h3>
                </div>
                
            </div>
            </a>
            
        </div>
            `
            count++;
            }
        })
        productrow.innerHTML = html;
        testfunc()
    })
})

dort.addEventListener('click', function() {
    colname = 'col-lg-3 col-md-4 col-sm-6 col-6';
    document.querySelector('.colactive').classList.remove('colactive');
    dort.classList.add('colactive');
    fetch('./products.json')
    .then(res => res.json())
    .then(data => {
        let html = '';
        let count = 0;
        data.forEach(item => {
            if(((page == 1 && count < 12) || (page == 2 && count < 24)) &&
                (item.price >= minPrice && item.price <= maxPrice) && 
                ( (category == '') || (category == item.category) ) && 
                ( (bottlesize == '') || (bottlesize == item.bottlesize) ) && 
                ( (vintage == '') || (vintage == item.vintage) ) 
                ){
                html += `
            <div id="a${item.id}" class="productitem ${colname}">
            <a href="productdetail.html">
            <div class="box">
                <div class="img-div">
                    <img src=${item.image} alt="">
                    <img src=${item.imageabs} alt="">
                    ${item.hot == 'true' ? '<div class="hot"><h1>Hot</h1></div>' : ''} 
                    ${item.discount != 'none' ? '<div class="discount"><h1>-'+ item.discount +'%</h1></div>' : ''} 
                    <div class="bag addcard">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                    <div class="heart">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div class="body-div">
                    <div class="rating">
                        <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                        <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                        <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                        <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                        <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                        <span>(${item.review} review)</span>
                    </div>
                    <h4>${item.title}</h4>
                    <h3 data-price="${item.price}">${item.pricelt != 'none' ? '<span>$'+ item.pricelt +'</span>' : ''}$${item.price}</h3>
                </div>
                
            </div>
            </a>
            
        </div>
            `
            count++;
            }
        })
        productrow.innerHTML = html;
        testfunc()
    })
})


let ctgnames = document.querySelectorAll('.ctgname');

ctgnames.forEach(item => {
    item.addEventListener('click', function() {
        if (category == item.innerHTML) {
            category = '';
            item.classList.remove('ctgactive');
        }else{
            category = item.innerHTML;
            let a = document.querySelector('.ctgactive');
            if (a != null) {
                a.classList.remove('ctgactive');
            }
            item.classList.add('ctgactive');
        }

        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            let html = '';
            let count = 0;
            data.forEach(item => {
                if(((page == 1 && count < 12) || (page == 2 && count < 24)) &&
                    (item.price >= minPrice && item.price <= maxPrice) && 
                    ( (category == '') || (category == item.category) ) && 
                    ( (bottlesize == '') || (bottlesize == item.bottlesize) ) && 
                    ( (vintage == '') || (vintage == item.vintage) ) 
                    ){
                    html += `
                <div id="a${item.id}" class="productitem ${colname}">
                <a href="productdetail.html">
                <div class="box">
                    <div class="img-div">
                        <img src=${item.image} alt="">
                        <img src=${item.imageabs} alt="">
                        ${item.hot == 'true' ? '<div class="hot"><h1>Hot</h1></div>' : ''} 
                        ${item.discount != 'none' ? '<div class="discount"><h1>-'+ item.discount +'%</h1></div>' : ''} 
                        <div class="bag addcard">
                            <i class="fa-solid fa-bag-shopping"></i>
                        </div>
                        <div class="heart">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <div class="search">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div class="body-div">
                        <div class="rating">
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <span>(${item.review} review)</span>
                        </div>
                        <h4>${item.title}</h4>
                        <h3>${item.pricelt != 'none' ? '<span>$'+ item.pricelt +'</span>' : ''}$${item.price}</h3>
                    </div>
                    
                </div>
                </a>
                
            </div>
                `
                count++;
                }
                let elem = document.querySelector('#page2');
                    if (count < 12) {
                        elem.style.display = 'none'
                    }else{
                        elem.style.display = 'flex'
                    }
            })
            productrow.innerHTML = html;
            testfunc()
            document.querySelector("#showing").innerHTML = `Showing ${count} results`
        })
    })
})

let bottle = document.querySelectorAll('.bottlesize .size-div span')

bottle.forEach(item => {
    item.addEventListener('click', function() {
        if (bottlesize == item.innerHTML.replace(' cl', '')) {
            bottlesize = '';
            item.classList.remove('btlactive');
        }else{
            bottlesize = item.innerHTML.replace(' cl', '');
            let a = document.querySelector('.btlactive');
            if (a != null) {
                a.classList.remove('btlactive');
            }
            item.classList.add('btlactive');
        }

        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            let html = '';
            let count = 0;
            data.forEach(item => {
                if(((page == 1 && count < 12) || (page == 2 && count < 24)) &&
                    (item.price >= minPrice && item.price <= maxPrice) && 
                    ( (category == '') || (category == item.category) ) && 
                    ( (bottlesize == '') || (bottlesize == item.bottlesize) ) && 
                    ( (vintage == '') || (vintage == item.vintage) ) 
                    ){
                    html += `
                <div id="a${item.id}" class="productitem ${colname}">
                <a href="productdetail.html">
                <div class="box">
                    <div class="img-div">
                        <img src=${item.image} alt="">
                        <img src=${item.imageabs} alt="">
                        ${item.hot == 'true' ? '<div class="hot"><h1>Hot</h1></div>' : ''} 
                        ${item.discount != 'none' ? '<div class="discount"><h1>-'+ item.discount +'%</h1></div>' : ''} 
                        <div class="bag addcard">
                            <i class="fa-solid fa-bag-shopping"></i>
                        </div>
                        <div class="heart">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <div class="search">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div class="body-div">
                        <div class="rating">
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <span>(${item.review} review)</span>
                        </div>
                        <h4>${item.title}</h4>
                        <h3>${item.pricelt != 'none' ? '<span>$'+ item.pricelt +'</span>' : ''}$${item.price}</h3>
                    </div>
                    
                </div>
                </a>
                
            </div>
                `
                count++;
                }
                let elem = document.querySelector('#page2');
                    if (count < 12) {
                        elem.style.display = 'none'
                    }else{
                        elem.style.display = 'flex'
                    }
            })
            productrow.innerHTML = html;
            testfunc()
            document.querySelector("#showing").innerHTML = `Showing ${count} results`
        })
    })
})

let vntglist = document.querySelectorAll('.vintage .size-div span')

vntglist.forEach(item => {
    item.addEventListener('click', function() {
        if (vintage == item.innerHTML) {
            vintage = '';
            item.classList.remove('vntgactive');
        }else{
            vintage = item.innerHTML;
            let a = document.querySelector('.vntgactive');
            if (a != null) {
                a.classList.remove('vntgactive');
            }
            item.classList.add('vntgactive');
        }

        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            let html = '';
            let count = 0;
            data.forEach(item => {
                if(((page == 1 && count < 12) || (page == 2 && count < 24)) &&
                    (item.price >= minPrice && item.price <= maxPrice) && 
                    ( (category == '') || (category == item.category) ) && 
                    ( (bottlesize == '') || (bottlesize == item.bottlesize) ) && 
                    ( (vintage == '') || (vintage == item.vintage) ) 
                    ){
                    html += `
                <div id="a${item.id}" class="productitem ${colname}">
                <a href="productdetail.html">
                <div class="box">
                    <div class="img-div">
                        <img src=${item.image} alt="">
                        <img src=${item.imageabs} alt="">
                        ${item.hot == 'true' ? '<div class="hot"><h1>Hot</h1></div>' : ''} 
                        ${item.discount != 'none' ? '<div class="discount"><h1>-'+ item.discount +'%</h1></div>' : ''} 
                        <div class="bag addcard">
                            <i class="fa-solid fa-bag-shopping"></i>
                        </div>
                        <div class="heart">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <div class="search">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div class="body-div">
                        <div class="rating">
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <span>(${item.review} review)</span>
                        </div>
                        <h4>${item.title}</h4>
                        <h3>${item.pricelt != 'none' ? '<span>$'+ item.pricelt +'</span>' : ''}$${item.price}</h3>
                    </div>
                    
                </div>
                </a>
                
            </div>
                `
                count++;
                }
                let elem = document.querySelector('#page2');
                    if (count < 12) {
                        elem.style.display = 'none'
                    }else{
                        elem.style.display = 'flex'
                    }
            })
            productrow.innerHTML = html;
            testfunc();
            document.querySelector("#showing").innerHTML = `Showing ${count} results`
        })
    })
})


function testfunc(){
    let buttons = document.querySelectorAll('.productitem');

    for (const btn of buttons) {
        let testid = btn.getAttribute('id');
        let a = document.querySelector(`#${testid} .box .img-div .addcard`)
        a.addEventListener('click', function(e){
            e.preventDefault();
            
            let Id = testid;
            let Image = document.querySelector(`#${testid} .box .img-div img:nth-child(1)`).src;
            let Title = document.querySelector(`#${testid} .box .body-div h4`).innerHTML;
            let Price = document.querySelector(`#${testid} .box .body-div h3`).getAttribute("data-price");
            let basket = JSON.parse(localStorage.getItem('basket'));

            let cntcart = document.getElementById('cart-count').innerHTML

            let findElement = basket.find((x => x.Id == Id));
            
            if (findElement === undefined) {
                basket.push({
                    Id: Id,
                    Image: Image,
                    Title: Title,
                    Price: Price,
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
        
    }
}

function testfunc2(){
    let buttons = document.querySelectorAll('.productitem2');

    for (const btn of buttons) {
        let testid = btn.getAttribute('id');
        let a = document.querySelector(`#${testid} .box .body-div .alar .addcard`)
        a.addEventListener('click', function(e){
            e.preventDefault();
            
            let Id = testid;
            let Image = document.querySelector(`#${testid} .box .img-div img:nth-child(1)`).src;
            let Title = document.querySelector(`#${testid} .box .body-div h4`).innerHTML;
            let Price = document.querySelector(`#${testid} .box .body-div h3`).getAttribute("data-price");
            let basket = JSON.parse(localStorage.getItem('basket'));

            let cntcart = document.getElementById('cart-count').innerHTML

            let findElement = basket.find((x => x.Id == Id));
            
            if (findElement === undefined) {
                basket.push({
                    Id: Id,
                    Image: Image,
                    Title: Title,
                    Price: Price,
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
        
    }
}


function ShowItemCount() {
    let cntcart = document.getElementById('cart-count')
    let cntcart2 = document.getElementById('cart-count2')
    cntcart.innerHTML = JSON.parse(localStorage.getItem('basket')).length;
    cntcart2.innerHTML = JSON.parse(localStorage.getItem('basket')).length;
}

ShowItemCount();


function ShowToast(msg){
    let toast = document.querySelector('#Toast');
    let txt = document.querySelector('#Toast p');
    txt.innerHTML = msg;
    toast.style.right = '20px'
    setTimeout(() => {
        toast.style.right = '-500px'
    }, 1500);
}




$(document).ready(function(){
    const rangeInput = document.querySelectorAll(".range-input input");
    const priceInput = document.querySelectorAll(".price-input .value");
    const range = document.querySelector(".slider .progress");
    let priceGap = 0;

    rangeInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minVal = parseInt(rangeInput[0].value);
            let maxVal = parseInt(rangeInput[1].value);
            if((maxVal - minVal) < priceGap){
                if(e.target.className === "range-min"){
                    rangeInput[0].value = maxVal - priceGap
                }else{
                    rangeInput[1].value = minVal + priceGap;
                }
            }else{
                priceInput[0].innerHTML = '$' + minVal;
                priceInput[1].innerHTML = '$' + maxVal;
                range.style.left = ((minVal / rangeInput[0].max) * 100 - 4.5) + "%";
                range.style.right = 105 - (maxVal / rangeInput[1].max) * 101 + "%";
            }
            minPrice = minVal;
            maxPrice = maxVal;
        });
        
        input.addEventListener('change', function() {
            fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                let html = '';
                let count = 0;
                data.forEach(item => {
                    if(((page == 1 && count < 12) || (page == 2 && count < 24)) &&
                        (item.price >= minPrice && item.price <= maxPrice) && 
                        ( (category == '') || (category == item.category) ) && 
                        ( (bottlesize == '') || (bottlesize == item.bottlesize) ) && 
                        ( (vintage == '') || (vintage == item.vintage) ) 
                        ){
                        html += `
                    <div id="${item.id}" class="productitem ${colname}">
                    <a href="productdetail.html">
                    <div class="box">
                        <div class="img-div">
                            <img src=${item.image} alt="">
                            <img src=${item.imageabs} alt="">
                            ${item.hot == 'true' ? '<div class="hot"><h1>Hot</h1></div>' : ''} 
                            ${item.discount != 'none' ? '<div class="discount"><h1>-'+ item.discount +'%</h1></div>' : ''} 
                            <div class="bag">
                                <i class="fa-solid fa-bag-shopping"></i>
                            </div>
                            <div class="heart">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <div class="search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                        <div class="body-div">
                            <div class="rating">
                                <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                                <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                                <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                                <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                                <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                                <span>(${item.review} review)</span>
                            </div>
                            <h4>In hac habitasse platea dictumst tempor vet</h4>
                            <h3>${item.pricelt != 'none' ? '<span>$'+ item.pricelt +'</span>' : ''}$${item.price}</h3>
                        </div>
                        
                    </div>
                    </a>
                    
                </div>
                    `
                    count++;
                    }
                })
                productrow.innerHTML = html;
                document.querySelector("#showing").innerHTML = `Showing ${count} results`
            })
        })
        
    });
})


let pagebtns = document.querySelectorAll('#Main .right .page span');

pagebtns.forEach(btn => {
    btn.addEventListener('click', function() {
        if(!btn.classList.contains('active-page')){
            let selected = document.querySelector('#Main .right .page .active-page');
            selected.classList.remove('active-page');
            btn.classList.add('active-page');
            page = Number(btn.innerHTML);
            fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                if (localStorage.getItem('products') === null) {
                    localStorage.setItem('products', JSON.stringify(data));
                }
                let html = '';
                let count = 0;
                data.forEach(item => {
                    if(((page == 1 && count < 12) || (page == 2 && count >= 12 && count < 24)) &&
                        (item.price >= minPrice && item.price <= maxPrice) && 
                        ( (category == '') || (category == item.category) ) && 
                        ( (bottlesize == '') || (bottlesize == item.bottlesize) ) && 
                        ( (vintage == '') || (vintage == item.vintage) ) 
                        ){
                        html += `
                    <div id="a${item.id}" class="productitem ${colname}">
                    <a href="productdetail.html">
                    <div class="box">
                    <div class="img-div">
                        <img src=${item.image} alt="">
                        <img src=${item.imageabs} alt="">
                        ${item.hot == 'true' ? '<div class="hot"><h1>Hot</h1></div>' : ''} 
                        ${item.discount != 'none' ? '<div class="discount"><h1>-'+ item.discount +'%</h1></div>' : ''} 
                        <div class="bag addcard">
                            <i class="fa-solid fa-bag-shopping"></i>
                        </div>
                        <div class="heart">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <div class="search">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div class="body-div">
                        <div class="rating">
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <i class="fa-${item.review != '0' ? 'solid' : 'regular'} fa-star"></i>
                            <span>(${item.review} review)</span>
                        </div>
                        <h4>${item.title}</h4>
                        <h3 data-price=${item.price}>${item.pricelt != 'none' ? '<span>$'+ item.pricelt +'</span>' : ''}$${item.price}</h3>
                    </div>
                    
                </div>
                </a>
                    
                </div>
                    `
                    }
                    count++;
                })
                productrow.innerHTML = html;
                testfunc();
            })
        }
    })

})