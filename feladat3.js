class Etel{

    #nev;
    #ar;
    #kategoria;
    #osszetevok= [];
    


    constructor(nev,ar, kategoria){
        this.#nev = nev,
        this.#ar = ar,
        this.#kategoria = kategoria
        
    }


   osszetevokHozzadasa(osszetevok){
    this.#osszetevok.push(osszetevok);
   }

   toStringNev(){
    return `${this.#nev}`
   }
   toStringAr(){
    return `${this.#ar} `
   }
   toStringKategoria(){
    return `${this.#kategoria}`
   }
   toStringOsszetovek(){
    return `${this.#osszetevok}`
   }

}