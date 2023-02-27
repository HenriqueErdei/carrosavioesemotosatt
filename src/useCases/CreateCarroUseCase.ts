import { ICreateCarros } from "../interfaces/ICreateCarros";
import { CarrosRepositoriesProps } from "../repositories/CarrosRepositoriesProps";

export class CreateCarroUseCase {
    constructor(private carrosRepositoriesProps: CarrosRepositoriesProps) {}

    execute({ ano, cor, modelo }: ICreateCarros) {
        const carro = this.carrosRepositoriesProps.create({ ano, cor, modelo });
        return carro;
    }
}