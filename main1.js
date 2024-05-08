document.addEventListener("DOMContentLoaded", ()=>{


    let kisskati = new Szemely("Kiss", "Katalin", 28, "");

    kisskati.setHobby("futás");

    document.getElementById("teljesnev").textContent = "Teljes neve: " + kisskati.getTeljesnev();
    document.getElementById("eletkor").textContent = "Életkora: " + kisskati.getEletkora();
    document.getElementById("hobby").textContent = "Kedvenc elfoglaltsága: " + kisskati.getHobby();
})