 if (localStorage.getItem('products')=== null) {
    localStorage.setItem('products',JSON.stringify([]))

 }
let buttons =document.querySelectorAll('.btn');

for (let btn of buttons ) {
    btn.onclick=function(e){
        e.preventDefault();

        let prod_id=this.parentElement.parentElement.id;
        let prod_name=this.previousElementSibling.previousElementSibling.innerHTML;
        let prod_price=this.previousElementSibling.innerHTML;
        let prod_image=this.parentElement.previousElementSibling.scr;

        let basket=JSON.parse(localStorage.getItem('products'));

        let exist_prod=basket.find(prod=>prod.Id== prod_id);
         if(exist_prod==undefined){
            basket.push({
                Id:prod_id,
                Name:prod_name,
                price:prod_price,
                Image:prod_image,
                Count:1
            })
             document.getElementById('alert p').innerHTML='Successfully completed'
             document.getElementById('alert ').style.right='-400px'
         }
          else{
            exist_prod.Count ++;
            document.getElementById('alert p').innerHTML=' We cant Successfully completed'
            document.getElementById('alert ').style.right='20px'
            document.getElementById('alert ').style.backgroundColor='#ff0033'
         }
        
        
        localStorage.setItem('products',JSON.stringify(basket));
        document.getElementById('alert').style.right='25px'
        setTimeout(() => {
            

        }, 1700);
        BasketCount();

    }
}
function BasketCount(){
  let basket=JSON.parse(localStorage.getItem('products'));
  document.getElementById('count').innerHTML=basket.lenght  
  BasketCount();
}


