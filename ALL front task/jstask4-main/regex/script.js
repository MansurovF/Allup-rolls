var validateEmail = (email) => {
    return email.match( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

var validatePhone = (phone) => {
    return phone.match(/^[+][9][9][4]{1,3}[-\s\./0-9]{9}$/);
}

var validatePassword = (password) => {
    return password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{6,10}$/);

}
var validateUsername = (username) => {
    return username.match(/^[A-Z]{1}[a-z0-9]{5,}$/);
}
var validate = () => {
    var result = '';
    var resultp = '';
    var resultps = '';
    var resultu = ''
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;

    if (validateEmail(email)) {
        result = '  is valid';
        document.getElementById('echeck').innerText = result
    } else {
        result = '  is not valid';
        document.getElementById('echeck').innerText = result
    }

    if (validateUsername(username)) {
        resultu = '  is valid';
        document.getElementById('ucheck').innerText = resultu
    } else {
        resultu = '  is not valid';
        document.getElementById('ucheck').innerText = resultu
    }


    if (validatePhone(phone)) {
        resultp = ' is valid';
        document.getElementById('pcheck').innerText = resultp
    } else {
        resultp = ' is not valid';
        document.getElementById('pcheck').innerText = resultp
    }

    if (validatePassword(password)) {
        resultps = ' is valid';
        document.getElementById('pscheck').innerText = resultps
    } else {
        resultps = ' is not valid';
        document.getElementById('pscheck').innerText = resultps
    }
}

