const userName = document.querySelector("#cardholder-name");
const cardNumber = document.querySelector("#card-number");
const dataUser = document.querySelectorAll(".client-data");
const msgErrorSpan = document.querySelectorAll(".msg-error")

function setError(i) {
    dataUser[i].style.border = "1px solid #FF5050";
}

function removeError(i) {
    dataUser[i].style.border = "1px solid #DFDEE0";
}

function validateName() {
    if (dataUser[0].value.length == 1) {
        let msgError = "<span class='msg-error'>it's too short for a name!</span>";
        msgErrorSpan[0].innerHTML = msgError;
        setError(0);
    } else if (dataUser[0].value.length > 2) {
        msgError = "";
        msgErrorSpan[0].innerHTML = msgError;
        removeError(0);
    } else if (dataUser[0].value.length == 0) {
        msgError = '<span class="msg-error">Can’t be blank</span>';
        msgErrorSpan[0].innerHTML = msgError;
        setError(0);
    }
}
