window.addEventListener("load", function () {

    const productNameField = document.querySelector("[name=name]");
    const productPriceField = document.querySelector("[name=price]");
    const productDescriptionField = document.querySelector("[name=description]");
    const productGenderField = document.querySelector("[name=productGender]");
    const productBrandField = document.querySelector("[name=productBrand]");
    const productSizeField = document.querySelector("[name=productSize]");
    const productColorField = document.querySelector("[name=productColor]")
    const productCategoryField = document.querySelector("[name=productCategory]")
    const editForm = document.querySelector("#editForm")

    productNameField.addEventListener("blur", (e) => {
        const field = e.target;
        const TagError = field.nextElementSibling;
        if (field.value.trim().length < 6) {
            field.style.border = 'red 2px solid';
            TagError.innerText = `El campo nombre debe contener al menos 5 caracteres (front)`;
            TagError.style.color = "red"
        } else {
            field.style.border = 'green 2px solid';
            TagError.style.color = "green";
            TagError.innerText = "válido (front)"

        }
    });

    productDescriptionField.addEventListener('blur', (e) => {
        const field = e.target;
        const TagError = field.nextElementSibling;
        if (field.value.trim().length < 21) {
            field.style.border = 'red 2px solid';
            TagError.innerText = `El campo descripción debe contener al menos 20 caracteres (front)`;
            TagError.style.color = "red"
        } else {
            field.style.border = 'green 2px solid';
            TagError.style.color = "green";
            TagError.innerText = "válido (front)"

        }
    })

    productPriceField.addEventListener("blur", (e) => {
        const field = e.target;
        const price = field.value;
        const TagError = field.nextElementSibling;
        if (isNaN(price) || price.trim() === "") {
            field.style.border = 'red 2px solid';
            TagError.innerText = `Debes ingresar solo números (front)`;
            TagError.style.color = "red";
        } else {
            field.style.border = 'green 2px solid';
            TagError.style.color = "green";
            TagError.innerText = "válido (front)";

        }
    });

    const validateSelectOption = (e) => {

        const field = e.target;
        const TagError = field.nextElementSibling
        if (field.value === "Selecciona una opción") {
            TagError.innerText = `Debes seleccionar una opción (front)`;
            field.style.border = 'red 2px solid';
            TagError.style.color = "red"
        } else {
            field.style.border = 'green 2px solid';
            TagError.style.color = "green";
            TagError.innerText = "Opción válida (front)"

        }
    }

    const validateMultipleSelectOption = (e) => {

        const field = e.target;
        const TagError = field.nextElementSibling
        console.log(field.value)
        if (field.value === "") {
            TagError.innerText = `Debes seleccionar una opción (front)`;
            field.style.border = 'red 2px solid';
            TagError.style.color = "red"
        } else {
            field.style.border = 'green 2px solid';
            TagError.style.color = "green";
            TagError.innerText = `Opción válida (front)`

        }
    }

    productGenderField.addEventListener("blur", validateSelectOption)
    productBrandField.addEventListener("blur", validateSelectOption)
    productSizeField.addEventListener("blur", validateMultipleSelectOption)
    productColorField.addEventListener("blur", validateMultipleSelectOption)
    productCategoryField.addEventListener("blur", validateMultipleSelectOption)

    editForm.addEventListener("submit", (e) => {
        let thereAreErrors = 0;

        const formFields = [...editForm.elements];
	    formFields.pop()

        formFields.forEach(oneField => {
            const TagError = oneField.nextElementSibling;
            if (oneField.value.trim() === '') {
                TagError.style.color = "red"
                oneField.style.border = 'red 2px solid';
                TagError.innerText = "Este campo es obligatorio";
                thereAreErrors++;
            }
        })

        if (thereAreErrors > 0) {
            e.preventDefault()
        }
    })
})