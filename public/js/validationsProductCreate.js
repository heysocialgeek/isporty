window.addEventListener("load", function () {

    const productCreateForm =document.querySelector("#createform");
    
    const productNameField =document.querySelector("[name=name]");
    const productPriceField =document.querySelector("[name=price]");
    const productDescriptionField = document.querySelector("[name=description]");
    const productGenderField = document.querySelector("[name=productGender]");
    const productBrandField = document.querySelector("[name=productBrand]");
    const productSizeField = document.querySelector("[name=productSize]");
    const productColorField = document.querySelector("[name=productColor]")
    const productCategoryField = document.querySelector("[name=productCategory]")

    const selectImage = document.querySelector("[name=image]")

    //validacion nombre
    productNameField.addEventListener("blur", (e) => {  
    const field = e.target;
    const spanTagError=field.nextElementSibling;
    if (field.value.trim().length <6){
        field.style.border ='red 2px solid';
        spanTagError.innerText= `El campo nombre es obligatorio y debe tener al menos 6 caracteres`;
        spanTagError.style.color="red"
    }else{
        field.style.border ='green 2px solid';
        spanTagError.style.color="green";
        spanTagError.innerText="valido"   
          
        }
    }); 
    //validacion precio 
    productPriceField.addEventListener("blur", (e) => {
    const field = e.target;
    const price = field.value;
    const spanTagError=field.nextElementSibling;
    if (isNaN(price) || price.trim() === ""){
        field.style.border ='red 2px solid';
        spanTagError.innerText= `El campo precio es obligatorio y debes ingresar solo numeros`;
        spanTagError.style.color="red"
    }else{
        field.style.border ='green 2px solid';
        spanTagError.style.color="green";
        spanTagError.innerText="valido";         
        }
    });

    //validacion descripcion
    productDescriptionField.addEventListener('blur', (e) => {
    const field = e.target;
    const spanTagError = field.nextElementSibling;
        if (field.value.trim().length < 21) {
            field.style.border = 'red 2px solid';
            spanTagError.innerText = `El campo descripción debe contener al menos 20 caracteres`;
            spanTagError.style.color = "red"
        } else {
            field.style.border = 'green 2px solid';
            spanTagError.style.color = "green";
            spanTagError.innerText = "válido"

        }
    });
   
    //validacion genero y marca
    const validateSelectOption = (e) => {
        const field = e.target;
        const spanTagError = field.nextElementSibling
        if (field.value === "Selecciona una opción") {
            spanTagError.innerText = `Debes seleccionar una opción`;
            field.style.border = 'red 2px solid';
            spanTagError.style.color = "red"
        } else {
            field.style.border = 'green 2px solid';
            spanTagError.style.color = "green";
            spanTagError.innerText = "Opción válida"

        }
    }
    
    
    productGenderField.addEventListener("blur", validateSelectOption)
    productBrandField.addEventListener("blur", validateSelectOption)


    //validacion imagen
    selectImage.addEventListener("change", (e) => {
        const field = e.target;
        const image = field.value;
        const spanTagError = field.nextElementSibling;

        let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
            if(!image.match(allowedExtensions)){
            spanTagError.innerText = `La imagen debe ser formato .jpg, .jpeg, .png o .gif`;
            field.style.border = 'red 2px solid';
            spanTagError.style.color = "red"
            }else{
                spanTagError.innerText = `La imagen es correcta`;
                field.style.border = 'green 2px solid';
                spanTagError.style.color = "green"
            }
    });

    //validacion del formulario
    productCreateForm.addEventListener("submit", function (e){
        let Error= 0;
        const formFields =[...productCreateForm.elements];
        formFields.pop();
        
        formFields.forEach(oneField =>{
            const spanTagError = oneField.nextElementSibling; 
            if (oneField.value.trim() === "") {
                field.style.border ='red 2px solid';
                spanTagError.innerText= `El campo es obligatorio`;
                spanTagError.style.color="red"
                
                Error++;
            } else {
                field.style.border ='green 2px solid';
            spanTagError.style.color="green";
            spanTagError.innerText="valido"
            }
        })
        if (Error>0){
            e.preventDefault();
        }
    })
})