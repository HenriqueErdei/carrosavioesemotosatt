import { AvioesRepositoriesProps } from "../repositories/AvioesRepositoriesProps";

export class FindAviaoByUseCase {
    constructor(private avioesRepositoriesProps: AvioesRepositoriesProps) {}

    execute(id: string) {
        const aviao = this.avioesRepositoriesProps.findById(id);
        return aviao;
    }
}
