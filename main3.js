document.addEventListener("DOMContentLoaded", ()=>{


    const formData = document.getElementById("form");
    const etelLista = [];
    let osszetevoArray = [];
    formData.addEventListener("submit", (event)=>{
        event.preventDefault();

        const nev =  document.getElementById("nev");
        const ar = document.getElementById("ar");
        const kategoria = document.getElementById("kategoria");
        const alma = document.getElementById("alma");
        const paradicsom = document.getElementById("paradicsom");
        const krumpli = document.getElementById("krumpli");
        const hagyma = document.getElementById("hagyma");

        if(alma.checked == true){
            osszetevoArray.push(alma.value);
        }
        if(paradicsom.checked == true){
            osszetevoArray.push(paradicsom.value);
        }
        if(krumpli.checked == true){
            osszetevoArray.push(krumpli.value);
        }
        if(hagyma.checked == true){
            osszetevoArray.push(hagyma.value);
        }
        
        let etel  = new Etel(nev.value, ar.value, kategoria.value);

        for (let index = 0; index < osszetevoArray.length; index++) {
            etel.osszetevokHozzadasa(osszetevoArray[index]);
        }

        etelLista.push(etel);
        osszetevoArray = [];
        
        kiiratas();
    })

    function kiiratas() {
        let table = "";
        for (let index = 0; index < etelLista.length; index++) {
            const element = etelLista[index];
            

            let tables =   
            `
                <tr>
                <th scope="row">${element.toStringNev()}</th>
                <td>${element.toStringAr()}</td>
                <td>${element.toStringKategoria()}</td>
                <td>${element.toStringOsszetovek()}</td>
                </tr>
            `
            
            


            table+= tables;
            

        }

        document.getElementById("tBody").innerHTML = table;
    }
    
    
   
    
    
  
})