window.addEventListener("load", function () {
    const buttonStorage = document.querySelectorAll("#button-storage");
    const imgStorage = document.querySelectorAll("#img-Storage");
    const titleStorage = document.querySelectorAll("#titleStorage");
    const priceStorage = document.querySelectorAll("#priceStorage")

    const storeItems = {
        title:  titleStorage[0].innerHTML,
        image: imgStorage[0].currentSrc,
        price: priceStorage[0].innerHTML
    }

    // localStorage.setItem("producto", JSON.stringify(storeItems))

    for (let i = 0; i < buttonStorage.length; i++) {
        buttonStorage[i].addEventListener("click", () => {
            if(localStorage.length > 0) {
                let allProducts = [Object.values(JSON.parse(localStorage.getItem("producto")))];
                allProducts.push(storeItems)
                console.log ("TODOS LOS PRODUCTOS",allProducts)
                localStorage.setItem("producto", JSON.stringify(allProducts))
            } else {
                localStorage.setItem("producto", JSON.stringify(storeItems))
            }
        })   
    }
})