import { AvioesRepositoriesProps } from "../repositories/AvioesRepositoriesProps";

export class ListAviaoUserCase {
    constructor(private avioesRepositoriesProps: AvioesRepositoriesProps) {}

    execute () {
        const lista = this.avioesRepositoriesProps.list();
        return lista;
    }
}