
let a=document.getElementById('amount')
let b=document.getElementById('interest-rate')
let c=document.getElementById('months')
let rta=document.getElementById('interest-rate')
let btn=document.getElementById('button')

function Calculate(){
    a = Number(a.value);
    b = Number(b.value);
    c = Number(c.value);
    rta = Number(rta.value);
    console.log(a);
    console.log(b);
    console.log(c);
    if (a!=0 && b!=0 && c!=0) {
        
        if (a>0 && a<=1000000)
         {  
            if (rta>0 && rta<=29) {
                document.getElementById('prices').innerHTML= (a+a*b/100).toFixed(2);
                document.getElementById('for-mounths').innerHTML=((a+a*b/100)/c).toFixed(2);
            }
            else{
                document.getElementById('prices').innerHTML=('Faiz miqdarini daxil edin')
            }
        }else{
            document.getElementById('prices').innerHTML=('Meblegi duzgun daxil edin zehmet olmasa')
        }

    }else{
        alert('Please don`t leave the inputs blank')
    }
}
