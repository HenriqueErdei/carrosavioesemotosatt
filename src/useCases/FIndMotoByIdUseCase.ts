import { MotosRepositoriesProps } from "../repositories/MotosRepositoriesProps";

export class FindMotoByIdUseCase {
    constructor(private motoRepositoriesProps: MotosRepositoriesProps) {}

    execute(id: string) {
        const moto = this.motoRepositoriesProps.findById(id);
        return moto; 
    }
}