window.addEventListener("load", () => {
    const registerName = document.querySelector("[name=name]");
    const registerEmail = document.querySelector("[name=email]");
    const registerPassword = document.querySelector("[name=password]");

    // const validationsEmptyFields = (e) => {
    //     const field = e.target;
    //     const fullName = field.value;
    //     const spanTagError = field.nextElementSibling;
    //     if(fullName.trim() === ""){
    //         if(field.classList.contains("valid") && spanTagError.classList.contains("text-valid")){
    //             field.classList.remove("valid");
    //             spanTagError.classList.remove("text-valid")
    //         }
    //         field.classList.add("invalid");
    //         spanTagError.classList.add("text-danger");
    //         spanTagError.innerText = `El campo Nombre Completo es obligatorio`;
    //     }
    // }

    registerName.addEventListener("blur", (e) => {
        const field = e.target;
        const fullName = field.value;
        const spanTagError = field.nextElementSibling;

        if(fullName.trim() === ""){
            if(field.classList.contains("valid") && spanTagError.classList.contains("text-valid")){
                field.classList.remove("valid");
                spanTagError.classList.remove("text-valid")
            }
            field.classList.add("invalid");
            spanTagError.classList.add("text-danger");
            spanTagError.innerText = `El campo Nombre Completo es obligatorio`;
        } else if (fullName.trim().length < 3) {
            if(field.classList.contains("valid") && spanTagError.classList.contains("text-valid")){
                field.classList.remove("valid");
                spanTagError.classList.remove("text-valid")
            }
            field.classList.add("invalid");
            spanTagError.classList.add("text-danger");
            spanTagError.innerText = `El campo debe tener al menos 3 caracteres`;
        } else {
            field.classList.remove("invalid");
            field.classList.add("valid");
            spanTagError.classList.remove("text-danger")
            spanTagError.classList.add("text-valid");
            spanTagError.innerText = `El campo es correcto`;
        }
    })

    registerEmail.addEventListener("blur", (e) => {
        const field = e.target;
        const email = field.value;
        const spanTagError = field.nextElementSibling;
        const emailFormat = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-])+@([a-zA-Z0-9-])+(.[a-z])+(?:\.[a-zA-Z0-9-]+)*$/

        if(email.trim() === ""){
            if(field.classList.contains("valid") && spanTagError.classList.contains("text-valid")){
                field.classList.remove("valid");
                spanTagError.classList.remove("text-valid")
            }
            field.classList.add("invalid");
            spanTagError.classList.add("text-danger");
            spanTagError.innerText = `El campo Email es obligatorio`;
        } else if (!email.match(emailFormat)) {
            if(spanTagError.classList.contains("text-valid") && field.classList.contains("valid")){
                spanTagError.classList.remove("text-valid");
                field.classList.remove("valid")
            }
            spanTagError.classList.add('text-danger');
            field.classList.add("invalid")
            spanTagError.innerText = `El campo debe ser un formato de email`;
        } else {
            field.classList.remove("invalid");
            field.classList.add("valid");
            spanTagError.classList.remove("text-danger")
            spanTagError.classList.add("text-valid");
            spanTagError.innerText = `El campo es correcto`;
        }
    })

    registerPassword.addEventListener("blur", (e) => {
        const field = e.target;
        const password = field.value;
        const spanTagError = field.nextElementSibling;
        const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,}$/
        
        if(password.trim() === ""){
            if(field.classList.contains("valid") && spanTagError.classList.contains("text-valid")){
                field.classList.remove("valid");
                spanTagError.classList.remove("text-valid")
            }
            field.classList.add("invalid");
            spanTagError.classList.add("text-danger");
            spanTagError.innerText = `El campo Contraseña es obligatorio`;
        } else if (!password.match(passwordFormat)) {
            if(spanTagError.classList.contains("text-valid") && field.classList.contains("valid")){
                spanTagError.classList.remove("text-valid");
                field.classList.remove("valid")
            }
            spanTagError.classList.add('text-danger');
            field.classList.add("invalid")
            spanTagError.innerText = `La contraseña debe contener al menos 8 caracteres, 1 mayúscula, 1 número y 1 un símbolo`;
        } else {
            field.classList.remove("invalid");
            field.classList.add("valid");
            spanTagError.classList.remove("text-danger")
            spanTagError.classList.add("text-valid");
            spanTagError.innerText = `El campo es correcto`;
        }
    })
})