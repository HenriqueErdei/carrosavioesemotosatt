import { CarrosRepositoriesProps } from "../repositories/CarrosRepositoriesProps";

export class FindCarroByIdUseCase {
    constructor(private carrosRepositoriesProps: CarrosRepositoriesProps) {}

    execute(id: string) {
        const carro = this.carrosRepositoriesProps.findById(id);
        return carro;
    }
}