import { ICreateAvioes } from "../interfaces/ICreateAvioes";
import { AvioesRepositoriesProps } from "../repositories/AvioesRepositoriesProps";

export class CreateAviaoUseCase {
    constructor(private aviaoRepositoriesProps: AvioesRepositoriesProps) {}

    execute({ ano, cor, modelo}: ICreateAvioes) {
        const aviao = this.aviaoRepositoriesProps.create({ ano, cor, modelo});
        return aviao;
    }
}