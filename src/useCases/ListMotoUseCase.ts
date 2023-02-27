
import { MotosRepositoriesProps } from "../repositories/MotosRepositoriesProps";

export class ListMotoUseCase {
    constructor(private motosRepositoriesProps: MotosRepositoriesProps) {}

    execute() {
        const lista = this.motosRepositoriesProps.list();
        return lista;
    }
}
