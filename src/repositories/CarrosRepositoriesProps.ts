import { Carros } from "../entities/Carros";
import { ICreateCarros } from "../interfaces/ICreateCarros";

export class CarrosRepositoriesProps {
    private carros: Carros[] = [];

    constructor() {
        this.carros = [];
    }

    create({ ano, cor, modelo }: ICreateCarros) {
        const carro = new Carros();

        Object.assign(carro, {
            ano,
            cor,
            modelo,
        });

        this.carros.push(carro);
        return carro;
    }

    list() {
        return this.carros;
    }

    findById(id: string) {
        const idCarro = this.carros.find(i => i.id == id);
        return idCarro;
    }
}