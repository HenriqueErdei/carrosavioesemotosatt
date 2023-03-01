import { Aviao } from "../entities/Aviao";
import { ICreateAvioes } from "../interfaces/ICreateAvioes";

export class AvioesRepositoriesProps {
    private aviao: Aviao[] = [];

    constructor() {
        this.aviao = [];
    }

    create({ ano, cor, modelo }: ICreateAvioes) {
        const aviao = new Aviao();

        Object.assign(aviao, {
            ano,
            cor,
            modelo,
        });

        this.aviao.push(aviao);
        return aviao
    }

    list () {
        return this.aviao;
    }

    findById(id: string) {
        const idAviao = this.aviao.find(i => i.id == id);
        return idAviao;
    }
}
