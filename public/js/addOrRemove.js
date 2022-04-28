let inicio = 0;

let sumar = document.querySelector("#aumentar");
let restar = document.querySelector("#disminuir");
let cantidad = document.getElementById('cantidad');
let subTotal = document.querySelector('.subTotal');
let envio = document.querySelector('.envio');
let total = document.querySelector('.total');
let priceId = document.getElementById('priceId');


sumar.addEventListener("click", () => {
    cantidad.value = ++inicio;
})

restar.addEventListener("click", (e) => {
    if(cantidad.value > 0) {
        cantidad.value = --inicio
    } else {
        e.preventDefault()
    }
})