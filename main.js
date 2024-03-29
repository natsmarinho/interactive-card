const userName = document.querySelector("#cardholder-name");
const cardNumber = document.querySelector("#card-number");
const dataUser = document.querySelectorAll(".client-data");
const msgErrorSpan = document.querySelectorAll(".msg-error");
const cvcNumber = document.querySelector("#cvc-data");
const year = new Date();
const currentYear = year.getFullYear();
const inputCvc = document.querySelector("#cvc-data");
const btnConfirm = document.querySelector("#btn-confirm");

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

    const nameSpan = document.querySelector(".nome-client")
    nameSpan.innerHTML = userName.value;
}

function validateCardNumber () {
    if(/[^0-9]/gi.test(cardNumber.value)){
        removeError(1);
        msgError = "";
        msgErrorSpan[1].innerHTML = msgError;
    } else if(cardNumber.value == 0) {
        msgError = '<span class="msg-error">Can not be empty</span>';
        msgErrorSpan[1].innerHTML = msgError;
        setError(1);
    } else {
        msgError = '<span class="msg-error">Wrong format.</span>';
        msgErrorSpan[1].innerHTML = msgError;
        setError(1);
    }

    const cardNumberSpan = document.querySelector(".numero-cartao");
    
    cardNumber.addEventListener("input", function (e) {
        const inputAlvo = e.target;
        const regexCard = inputAlvo.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formatado = "";

        for (let i = 0; i < regexCard.length; i++){
            if (i > 0 && i % 4 === 0) {
                formatado += " ";
            }

            formatado += regexCard[i];
        }

        inputAlvo.value = formatado;
        cardNumberSpan.innerHTML = inputAlvo.value;
    })
}

function validateDate() {
    if(dataUser[2].value == 0 || dataUser[3].value == 0) {
        msgError = '<span class="msg-error">Can’t be blank</span>';
        msgErrorSpan[2].innerHTML = msgError;
        setError(2);
    } else if(dataUser[2].value > 12 || dataUser[3].value < currentYear) {
        msgError = '<span class="msg-error">This date is not valid</span>';
        msgErrorSpan[2].innerHTML = msgError;
        setError(2);
    } else {
        removeError(2);
        msgError = "";
        msgErrorSpan[2].innerHTML = msgError;
    }

    const monthInput = document.querySelector("#month")
    let dateSpan = document.querySelector(".exp-date");
    dateSpan.innerHTML = monthInput.value;
    const yearInput = document.querySelector("#year");
    dateSpan.innerHTML += `/${yearInput.value}`
}

function validateCvc() {
    if(!/^[0-9]+$/.test(inputCvc.value)) {
        msgError = '<span class="msg-error">Wrong format, numbers only</span>';
        msgErrorSpan[3].innerHTML = msgError;
        setError(3);
    } else if(inputCvc.value == 0){
        msgError = '<span class="msg-error">Can’t be blank</span>';
        msgErrorSpan[3].innerHTML = msgError;
        setError(3);
    } else {
        removeError(3);
        msgError = "";
        msgErrorSpan[3].innerHTML = msgError;
    }

    const cvcNumberSpan = document.querySelector(".cvc-number");
    cvcNumberSpan.innerHTML = cvcNumber.value;
}

function displayMsgSuccess() {
    const formulario = document.querySelector(".form-user");
    const successContainerMsg = document.querySelector(".container-success");

    if(userName.value == 0 && cardNumber.value == 0 && cvcNumber.value == 0 && dataUser[2].value == 0) {
        formulario.style.display = "flex";
        successContainerMsg.style.display = "none";
    } else {
        formulario.style.display = "none" ;
        successContainerMsg.style.display = "block";
    }
}

btnConfirm.addEventListener("click", confirm);

function confirm() {
    validateName();
    validateCardNumber();
    validateDate();
    validateCvc();
    displayMsgSuccess();
}

const btnReload = document.querySelector(".continue").addEventListener("click", reloadPage);

function reloadPage() {
    location.reload();
}