const name_error = document.getElementById("name-error");
const pass = document.getElementById("pass-error");
const email = document.getElementById("email-error");
const message_error = document.getElementById("message-error");
const fix_error = document.getElementById("fix-error");

function validatename() {
    var name = document.getElementById("user-name").value;
    if(name.length == 0){
        name_error.innerHTML = "Name is required"
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        name_error.innerHTML = "Write full name"
        return false
    }

    name_error.innerHTML = '<i class="fa-solid fa-check" style="color: #1dd72a;"></i>';

    return true
}

function validatephone() {
    var phone = document.getElementById("phone").value;
    if(phone.length == 0){
        pass.innerHTML = "Number is required"
        return false
    }
    if(phone.length !== 10) {
        pass.innerHTML = "Phone no should be 10 digits";
        return false
    }
    if(!phone.match(/^[0-9]{10}$/)) {
        pass.innerHTML = "Only Digits"
        return false
    }

    pass.innerHTML = '<i class="fa-solid fa-check" style="color: #1dd72a;"></i>';

    return true
}

function validatemail() {
    var mail = document.getElementById("mail").value;
    if(mail.length == 0){
        email.innerHTML = "Email is required"
        return false
    }
    if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        mail.innerHTML = "check email"
        return false
    }

    email.innerHTML = '<i class="fa-solid fa-check" style="color: #1dd72a;"></i>';

    return true
}

function validatmessage() {
    var message = document.getElementById("message").value;
    if(message.length == 0){
        message_error.innerHTML = "message is required"
        return false
    }
    if((30-message.length) >= 0) {
        message_error.innerHTML = `${30-message.length} characters left`;
        return false
    }
    message_error.innerHTML = '<i class="fa-solid fa-check" style="color: #1dd72a;"></i>';

    return true
}

function validateform() {
    if(!validatename()||!validatephone()||!validatemail()||!validatmessage()) {
        fix_error.style.display = "block"
        fix_error.innerHTML = "Please fix the error";
        setTimeout(function () {
            fix_error.style.display = "none"

        },3000)
        return false
    }
}