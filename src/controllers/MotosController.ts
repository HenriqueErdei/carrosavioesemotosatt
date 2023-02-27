import { CreateMotoUserCase } from "../useCases/CreateMotoUseCasse";
import { MotosRepositoriesProps } from "../repositories/MotosRepositoriesProps";
import { Request, Response } from "express";

const motosRepositoriesProps = new MotosRepositoriesProps();

export class MotosController {
    create(req:Request, res: Response) {
        const {ano, cor, modelo } = req.body;

        const moto = motosRepositoriesProps.create({ ano, cor, modelo});
        return res.status(201).json(moto);
    }

    list(req: Request, res: Response) {
        const lista = motosRepositoriesProps.list();
        return res.status(200).json(lista);
    }

    findById(req: Request, res: Response) {
        const { id } = req.params;

        const moto = motosRepositoriesProps.findById(id);
        return res.status(200).json(moto);
    }
}
