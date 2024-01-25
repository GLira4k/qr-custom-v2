const iusername = document.getElementById("iusername");
const iemail = document.getElementById("iemail");
const ipassword = document.getElementById("ipassword");
const iConfirmPassword = document.getElementById("iconfirm-password");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = iusername.value;
    const emailValue = iemail.value;
    const passwordValue = ipassword.value;
    const confirmPasswordValue = iConfirmPassword.value;

    function setErrorFor(inputElement, message) {
        const formControl = inputElement.parentElement;
        const successElement = formControl.querySelector(".fa-check-circle");
        const errorElement = formControl.querySelector(".fa-exclamation-circle");
        const small = formControl.querySelector("small");
    
        small.innerText = message;
    
        inputElement.classList.remove("border-green-400");
        successElement.classList.add("invisible");
    
        inputElement.classList.add("border-red-400");
        errorElement.classList.remove("invisible");
    }
    
    function setSuccessFor(inputElement) {
        const formControl = inputElement.parentElement;
        const successElement = formControl.querySelector(".fa-check-circle");
        const errorElement = formControl.querySelector(".fa-exclamation-circle");
        const small = formControl.querySelector("small");
    
        small.innerText = "";
    
        inputElement.classList.remove("border-red-400");
        errorElement.classList.add("invisible");
    
        inputElement.classList.add("border-green-400");
        successElement.classList.remove("invisible");
    }
    
    
    if (usernameValue === "") {
        setErrorFor(iusername, "O nome de usuário é obrigatório.");
    } else {
        setSuccessFor(iusername);
    }

    if (emailValue === "") {
        setErrorFor(iemail, "O e-mail é obrigatório.");
    } else if (!checkEmail(emailValue)){
        setErrorFor(iemail, "Por favor, insira um e-mail válido.")
    } else{
        setSuccessFor(iemail)
    }

    

    if (formIsValid) {
        Swal.fire({
            title: "Bom trabalho!",
            text: "Cadastro 100% válido.",
            icon: "success",
            confirmButtonColor: "#008080",
            confirmButtonText: "Ok",
        });
    }
}



function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
