window.addEventListener("load", () => {
    const emailLogin = document.querySelector("#emailLogin");
    const passwordLogin = document.querySelector("#passwordLogin");
    const buttonLogin = document.querySelector("#buttonLogin");
    const loginForm = document.querySelector("#loginForm")

    emailLogin.addEventListener("blur", (e) => {
        const field = e.target
        const email = field.value
        const spanTagError = field.nextElementSibling
        const emailFormat = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-])+@([a-zA-Z0-9-])+(.[a-z])+(?:\.[a-zA-Z0-9-]+)*$/
        
        // if(email === ""){
        //     emailLogin.style.borderColor= "red";
        //     spanTagError.innerText = "Tenes que escribir un mail"
        // }
        
        if (field.value.trim() === '') {
            // spanTagError.classList.add('text-danger');
            field.style.border ='red 1px solid';
            spanTagError.innerText = `El campo ${field.name} es obligatorio`;
        } else if (!email.match(emailFormat)) {
            // spanTagError.classList.add('text-danger');
            field.style.border ='red 1px solid';
            spanTagError.innerText = `El campo ${field.name} debe tener un formato de email`;
        } else {
            field.style.border ='none';
            // spanTagError.classList.remove('text-danger');
            spanTagError.innerText = '';
        };

    })

    passwordLogin.addEventListener("blur", (e) => {
        const field = e.target;
        const password = field.value;
        const spanTagError = field.nextElementSibling;

        if(field.value.trim() === ""){
            field.style.border ='red 1px solid';
            spanTagError.innerText = `El campo ${field.name} es obligatorio`;
        }
    });

    // loginForm.addEventListener("submit", (e) => {
    //     let thereAreErrors = false;

    //     const formFields = [...productCreateForm.elements];
	//     formFields.pop();

    // })
})
