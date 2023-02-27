import { CarrosRepositoriesProps } from "../repositories/CarrosRepositoriesProps";

export class ListCarroUseCase {
    constructor(private carrosRepositoriesProps: CarrosRepositoriesProps) {}

    execute() {
        const lista = this.carrosRepositoriesProps.list();
        return lista;
    }
}