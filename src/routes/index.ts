import { Router } from "express";
import { CarrosController } from "../controllers/CarrosController";
import { MotosController } from "../controllers/MotosController";

const carrosController = new CarrosController();
const motosController = new MotosController();

const router = Router();

router.post('/carros', carrosController.create);
router.get('/carros', carrosController.list);
router.get('/carros/:id', carrosController.findById);

router.post('/motos', motosController.create);
router.get('/motos',  motosController.list);
router.get('/motos/:id', motosController.findById);



export { router };

