const form = document.querySelector("form");
const iusername = document.querySelector("iusername");
const iemail = document.querySelector("iemail");
const ipassword = document.querySelector("ipassword");
const iConfirmPassword = document.querySelector("iconfirm-password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = iusername.value;
    const emailValue = iemail.value;
    const passwordValue = ipassword.value;
    const confirmPasswordValue = iConfirmPassword.value;

    if(usernameValue === ""){
        setErrorFor(iusername, "O nome de usuário é obrigatório.");
    } else {
        setSuccessFor(iusername);
    };

    if(emailValue === ""){
        setErrorFor(iemail, "O e-mail é obrigatório.")
    }else if(!checkEmail(emailValue)){
        setErrorFor(iemail, "Por favor, insira um e-mail válido.")
    }else{
        setSuccessFor(iemail)
    }

    if(passwordValue === ""){
        setErrorFor(ipassword, "A senha é obrigatória.")
    }else if(passwordValue.length < 7){
        setErrorFor(ipassword, "A senha precisa ter no mínimo 7 caracteres.")
    }else{
        setSuccessFor(ipassword);
    };

    if(confirmPasswordValue === ""){
        setErrorFor(iConfirmPassword, "A confirmação de senha obrigatória.")
    }else if(confirmPasswordValue.length < 7){
        setErrorFor(iConfirmPassword, "Confirmação de senha fora dos padrões obrigatórios.")
    }else if(confirmPasswordValue !== passwordValue){
        setErrorFor(iConfirmPassword, "As senhas não coicidem.")
    }else{
        setSuccessFor(iConfirmPassword);
    };

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [... formControls].every((formControls) => {
        return (formControls.className === "form-control success");
    });

    if(formIsValid){
        Swal.fire({
            title: "Bom trabalho!",
            text: "Cadastro 100% válido.",
            icon: "success",
            confirmButtonColor: "#008080",
            confirmButtonText: "Ok"
        })
    };
};

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //adicionar a mensagem de erro
    small.innerText = message;

    //Adicionar a classe de erro
    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    //Adicionar a classe de sucesso
    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
};
