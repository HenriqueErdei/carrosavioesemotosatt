import { ICreateMotos } from "../interfaces/ICreateMotos";
import { MotosRepositoriesProps } from "../repositories/MotosRepositoriesProps";


export class CreateMotoUserCase{
    constructor(private MotosRepositoriesProps: MotosRepositoriesProps) {}

    execute ({ ano, modelo, cor}: ICreateMotos) {
        const moto = this.MotosRepositoriesProps.create({ano, cor, modelo});
        return moto;
    }
}
