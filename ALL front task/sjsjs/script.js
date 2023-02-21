const name=document.getElementById('name')
const password=document.getElementById('password')
const form =document.getElementById('form')
const error=document.getElementById('error')

form.addEventListener('submit', (e) => {
let messages=[]
if (name.value=== '' || name.value==null) {
    messages.push('ad yoxdur')
}
if (password.value.lenght<=6) {
    messages.push('duzgun yaz ae')
}else if(password.value.lenght>=20){
    messages.push('kod 6 dan az olmamalidir')
}
if (messages.length>0) {
    e.preventDefault()
    errorElement.innerText=messages.join(',')
}

})