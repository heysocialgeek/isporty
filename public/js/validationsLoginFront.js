window.addEventListener("load", () => {
    const emailLogin = document.querySelector("#emailLogin");
    const passwordLogin = document.querySelector("#passwordLogin");
    const loginForm = document.querySelector("#loginForm");

    // const validationsEmptyFields = (e) => {
    //     const field = e.target;
    //     const spanTagError = field.nextElementSibling;
    //     if (field.value.trim() === '') {
    //         spanTagError.classList.add('text-danger');
    //         field.classList.add("invalid")
    //         spanTagError.innerText = `El campo ${field.name} es obligatorio`;
    //     } else {
    //         spanTagError.classList.remove('text-danger');
    //         spanTagError.classList.add("text-valid")
    //         field.classList.remove("invalid")
    //         field.classList.add("valid")
    //         spanTagError.innerText = 'El password es válido';
    //     }
    // } 

    emailLogin.addEventListener("blur", (e) => {

        const field = e.target;
        const spanTagError = field.nextElementSibling;
        const email = field.value
        const emailFormat = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-])+@([a-zA-Z0-9-])+(.[a-z])+(?:\.[a-zA-Z0-9-]+)*$/
        
        if (field.value.trim() === '') {
            if(spanTagError.classList.contains("text-valid") && field.classList.contains("valid")){
                spanTagError.classList.remove("text-valid");
                field.classList.remove("valid")
            }
            spanTagError.classList.add('text-danger');
            field.classList.add("invalid")
            spanTagError.innerText = `El campo ${field.name} es obligatorio`;
        } else if (!email.match(emailFormat)) {
            if(spanTagError.classList.contains("text-valid") && field.classList.contains("valid")){
                spanTagError.classList.remove("text-valid");
                field.classList.remove("valid")
            }
            spanTagError.classList.add('text-danger');
            field.classList.add("invalid")
            spanTagError.innerText = `El campo ${field.name} debe tener un formato de email`;
        } else {
            spanTagError.classList.remove('text-danger');
            spanTagError.classList.add("text-valid")
            field.classList.remove("invalid")
            field.classList.add("valid")
            spanTagError.innerText = 'El mail es válido';
        };

    })

    passwordLogin.addEventListener("blur", (e) => {
        const field = e.target;
        const password = field.value;
        const spanTagError = field.nextElementSibling;
        if (field.value.trim() === '') {
            if(spanTagError.classList.contains("text-valid") && field.classList.contains("valid")){
                spanTagError.classList.remove("text-valid");
                field.classList.remove("valid")
            }
            spanTagError.classList.add('text-danger');
            field.classList.add("invalid")
            spanTagError.innerText = `El campo ${field.name} es obligatorio`;
        }  else {
            spanTagError.classList.remove('text-danger');
            spanTagError.classList.add("text-valid")
            field.classList.remove("invalid")
            field.classList.add("valid")
            spanTagError.innerText = 'El password es válido';
        }
    });

    loginForm.addEventListener("submit", (e) => {
        let thereAreErrors = 0;

        const formFields = [...loginForm.elements];
	    formFields.pop()

        formFields.forEach(oneField => {
            const spanTagError = oneField.nextElementSibling;
            if (oneField.value.trim() === '') {
                spanTagError.classList.add('text-danger');
                oneField.classList.add("invalid")
                spanTagError.innerText = `El campo ${oneField.name} es obligatorio`;

                thereAreErrors++;
            }
        })

        if (thereAreErrors > 0) {
            e.preventDefault()
        }
    })
})
