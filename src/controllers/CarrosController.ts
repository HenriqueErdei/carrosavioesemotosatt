import { CreateCarroUseCase } from "../useCases/CreateCarroUseCase";
import { CarrosRepositoriesProps } from "../repositories/CarrosRepositoriesProps";
import { Request, Response } from "express";

const carrosRepositoriesProps = new CarrosRepositoriesProps();

export class CarrosController {
    create(req: Request, res: Response) {
        const { ano, cor, modelo } = req.body;

        const carro =carrosRepositoriesProps.create({ ano, cor, modelo });
        return res.status(201).json(carro);
    }

    list(req: Request, res: Response) {
        const lista = carrosRepositoriesProps.list();
        return res.status(200).json(lista);
    }

    findById(req: Request, res: Response) {
        const { id } = req.params;

        const carro = carrosRepositoriesProps.findById(id);
        return res.status(200).json(carro); 
    }
}