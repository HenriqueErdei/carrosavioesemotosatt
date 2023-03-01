import { CreateAviaoUseCase } from "../useCases/CreateAviaoUseCase";
import { AvioesRepositoriesProps } from "../repositories/AvioesRepositoriesProps";  
import { Request, Response } from "express";

const avioesRepositoriesProps = new AvioesRepositoriesProps();

export class AvioesController {
    create(req: Request, res: Response) {
        const { ano, cor, modelo } = req.body;

        const aviao = avioesRepositoriesProps.create({ ano, cor, modelo});
        return res.status(201).json(aviao);
    }

    list (req: Request, res: Response) {
        const lista = avioesRepositoriesProps.list();
        return res.status(200).json(lista);
    }

    findById(req :Request, res: Response) {
        const { id } = req.params;

        const aviao = avioesRepositoriesProps.findById(id);
        return res.status(200).json(aviao);
    }

}