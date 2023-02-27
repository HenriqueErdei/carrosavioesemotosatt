import { Motos } from "../entities/Motos";
import { ICreateMotos } from "../interfaces/ICreateMotos";

export class MotosRepositoriesProps {
    private Motos: Motos [] = [];

    constructor() {
        this.Motos= [];
    }

    create({ ano, cor, modelo}: ICreateMotos) {
        const moto = new Motos();

        Object.assign(moto,{
            ano,
            cor,
            modelo,
        });

        this.Motos.push(moto);
        return moto;
    }
    
    list() {
        return this.Motos;
    }

    findById(id: string) {
        const idMoto = this.Motos.find(i => i.id == id);
        return idMoto;
    }
}
