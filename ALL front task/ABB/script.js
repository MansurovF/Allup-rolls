//task1
// let srch = document.getElementById('srch');
// let lgl= document.getElementById('lgl');
// let closedicon=document.getElementById('closedicon')

// srch.addEventListener('click',function(e){
//     e.preventDefault();
//     document.querySelector('#Head2').classList.toggle('active-')
// })
// lgl.addEventListener('click',function () {
//     document.querySelector('#Head2').classList.remove('active-')
// })
// closedicon.addEventListener('click',function(){
//     document.querySelector('#Head3').classList.toggle('active-')

//     document.querySelector('#middle').classList.toggle('active1')
// })






// task2
// let circle=document.querySelector('.circle')
// let squere=document.querySelector('.squere')
// let leftX=0;
// let TopY=0;

// document.addEventListener('keydown',function (e) {
//     let kvn;
//     let ort;
//     kvn=window.innerWidth;
//     ort=window.innerHeight;
//     if (e.key=='ArrowDown') {
//         TopY+=10;
//         squere.style.top=TopY+'px';
//         console.log('down');
//     }else if(e.key=='ArrowUp'){
//         TopY-=10;
//         squere.style.top=TopY+'px'
//          console.log('up');      
//     }else if (e.key=='ArrowLeft') {
//         leftX-=10;
//         squere.style.left=leftX+'px'
//         console.log('left');
//     }else if(e.key=='ArrowRight'){
//         leftX+=10;
//         squere.style.left=leftX+'px'
//         console.log('right'); 
//     }
//     if (leftX > kvn/2-200 && leftX < kvn/2+100 && TopY > ort/2-200 && TopY < ort/2+100) {
//        circle.style.backgroundColor = 'black'
//        }else {
//         circle.style.backgroundColor='rgb(238, 255, 0)'
//        }
    
// })
