function GetItems() {
    let basket = JSON.parse(localStorage.getItem('products'));

    if(basket.length === 0) {
        document.getElementById('empty').classList.remove('d-none')
        document.getElementById('btn_delete').style.display = 'none'
    }
    else{
        document.querySelector('.table').classList.remove('d-none')
        let html = '';
        for(let item of basket) {
            html += `
                <tr>
                    <th scope="row">${item.Id}</th>
                    <td style="width:20%">
                        <img src=${item.Image} alt="">
                    </td>
                    <td>${item.Name}</td>
                    <td>
                    <input class="" type="number" value=${item.Count}>
                    </td>
                    <td>${item.Price}</td>
                </tr>
            `
        }
    
        document.querySelector('.table tbody').innerHTML = html
    }
}

GetItems();
document.getElementById('btn_delete').onclick = function(){
    localStorage.removeItem('products')
    location.reload();
}




// var minus=document.querySelectorAll('.minus')
// console.log(minus)


// var Minus = function(min){
//     let basket = JSON.parse(localStorage.getItem('products'));
//     console.log( min.nextElementSibling.innerHTML)
//     let idd = min.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
        
//     if(basket.length>1){
//         let exist_prod = basket.find(pr => pr.Id === idd);
//     if(Number(exist_prod.Count)>1){
//         exist_prod.Count -=1;
//         localStorage.setItem('products',JSON.stringify(basket));
//     }else{
//         let ubasket = basket.filter(function(obj){ 
//             return obj.Id != exist_prod.Id; 
//         });
//         localStorage.setItem('products',JSON.stringify(ubasket));        
//     }
//     }else{
//         let exist_prod = basket.find(pr => pr.Id === idd);
//     if(Number(exist_prod.Count)>1){
//         exist_prod.Count -=1;
//         localStorage.setItem('products',JSON.stringify(basket));
//     }else{
//         localStorage.removeItem('products')
//         location.reload();
//     }
//     }
//     GetItems()
// }

// var Plus = function(min){
//     let basket = JSON.parse(localStorage.getItem('products'));
//     console.log( min.previousElementSibling.innerHTML)
//     let idd = min.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
    
//     let exist_prod = basket.find(pr => pr.Id === idd);
//     exist_prod.Count += 1
//     localStorage.setItem('products',JSON.stringify(basket));
//     GetItems()
// }