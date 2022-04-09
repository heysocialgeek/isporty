window.addEventListener("load", function () {

    const productCreateForm =document.querySelector("#createform");
    
    const productNameField =document.querySelector("[name=name]");
    const productPriceField =document.querySelector("[name=price]");
    
    const validateEmptyField = (e) => {  
    const field = e.target;
        const spanTagError=field.nextElementSibling;
        if (field.value.trim() === ""){
            field.style.border ='red 2px solid';
            spanTagError.innerText= `El campo ${field.name} es obligatorio`;
            spanTagError.style.color="red"
           }else{
            field.style.border ='green 2px solid';
            spanTagError.style.color="green";
            spanTagError.innerText="valido"   
          
           }
    } 
    
    productNameField.addEventListener ("blur",validateEmptyField );
    productPriceField.addEventListener("blur",validateEmptyField );

    
    productCreateForm.addEventListener("submit", function (e){
        let Error= 0;
        const formFields =[...productCreateForm.elements];
        formFields.pop();
        
        formFields.forEach(oneField =>{
            const spanTagError = oneField.nextElementSibling; 
            if (oneField.value.trim() === "") {
                field.style.border ='red 2px solid';
                spanTagError.innerText= `El campo ${field.name} es obligatorio`;
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
    });
}) 