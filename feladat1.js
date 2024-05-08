class Szemely{


    #vezeteknev;
    #keresztnev;
    #eletkor;
    #hobbi;

    constructor(vezeteknev, keresztnev, eletkor){
        this.#vezeteknev = vezeteknev,
        this.#keresztnev = keresztnev,
        this.#eletkor = eletkor
    }

    setHobby(valami){
        this.#hobbi = valami;
    }

    getTeljesnev(){
        return `${this.#vezeteknev} ${this.#keresztnev}`;
    }
    
    getEletkora(){
        return `${this.#eletkor}`;
    }

    getHobby(){
       return `${this.#hobbi}`;
    }
}
