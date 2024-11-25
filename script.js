function checkFirst() {
    var first = document.getElementById("first").value;
    var regex = /^[а-яА-ЯёЁ\s]{2,15}$/;

    if (regex.test(first)) { // if testing of first is true
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Все верно :)";
        return true;
    }
    else {// if it's not
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Введите от 2 до 15 символов на кириллице";
        return false;
    }
}

function checkEmail() {
    var email = document.getElementById("email").value;
    var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;

    if (regex.test(email)) { // if testing of first is true
        document.getElementById("email_Check").style.color = "green";
        document.getElementById("email_Check").innerHTML = "Все верно :)";
        return true;
    }
    else {// if it's not
        document.getElementById("email_Check").style.color = "red";
        document.getElementById("email_Check").innerHTML = "Введите настоящий email адресс";
        return false;
    }
}

function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone)) { // if testing of first is true
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Все верно :)";
        return true;
    }
    else {// if it's not
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Введите настоящий номер телефона";
        return false;
    }
}

function outputData() {
    var first = document.getElementById("first").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var quantity = document.getElementById("quantity").value;

    if (first != "" && phone != "" && email != "" && quantity != "") {
        alert("Привет " + first + "\n вот ваш адресс электронной почты "  + email + "\n вот ваш телефон " + phone + "\n вы заказали " + quantity + " товар(а)"); 
    }
    else {
        alert("Заполните все поля"); 
    }
}


var first_btn = document.getElementById("first_btn"); 
first_btn.onclick = function red(){ 
    this.style.backgroundColor = "red";
} 

var imd_phone = document.getElementById("imd_phone"); 
imd_phone.onclick = function big(){ 
    imd_phone.style.width = (imd_phone.offsetWidth * 1.1) + "px";
    imd_phone.style.height = (imd_phone.offsetHeight * 1.1) + "px";
} 