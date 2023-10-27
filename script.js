var email = document.getElementById('email');
var password = document.getElementById('Password'); // Corrected the id to match your HTML
var error1 = document.getElementById('err1');
var error2 = document.getElementById('err2');

let regex = /^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})$/;

function validate() {
    if (regex.test(email.value)) {
        error1.innerText = 'Email is valid';
        error1.style.color = 'green';
    } else {
        error1.innerText = 'Email is not valid';
        error1.style.color = 'red';
        return false;
    }
        if (password.value.length > 8) {
        error2.innerText = 'Password is valid';
        error2.style.color = 'green';
        return true;
    } else {
        error2.innerText = 'Password is not valid';
        error2.style.color = 'red';
        return false;
    }

    // If both email and password are valid, return true
    
}
