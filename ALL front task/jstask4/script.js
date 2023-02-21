var Valideemail=email=>{
    const re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
 var ValidePassword=(password)=>{
     return password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{6,10}$/);
 }
const fullname=document.getElementById('Fullname');
const email=document.getElementById('Email');
const password=document.getElementById('Password');
const form=document.getElementById('form');
const button =document.getElementById('btn' )


button.addEventListener('click',(e)=>{
    let message=[]
    let check1=true
    let check2=true
    let check3=true
    if (fullname.value==='' || fullname.value===null) {
        alert('Ad daxil edin')
       fullname.style.border='2px solid red';
       check1=false;

    }else if(fullname.value[0]!=fullname.value[0].toUpperCase()){
        alert('Ilk herfi duzgun daxil edin')
        check1=false;
    }
    else if(fullname.value.length<=6){
        alert('duzgun yazin')
        check1=false;
    }
    else{
        fullname.style.border='2px solid green'
    }
    if (password.value === '') {
        alert(password,'Kod daxil edin')
        password.style.border='2px solid red'
        check2=false;
    }else if(password.value.length <=6){
        alert(password,'kod minimum 6 simvoldan consist of')
        check2=false;
    }else if (ValidePassword(password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{6,10}$/))) {
        console.log('Password duzdu')
        check2=false;  
    }
    else{
        password.style.border='2px solid green'
    }
    if (email.value==='' || email.value==null) {
        alert('xais olunur duzgun yazin')
        email.style.border='2px solid red'
        check3=false;
    }else if (Valideemail( re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        check3=false;
    }
    else{
        email.style.border='2px solid green'
    }

    console.log(check1);
    console.log(check2);
    console.log(check3);


    
    if(check1=true && check2==true &&check3==true){
        alert('truee')
    }


})

