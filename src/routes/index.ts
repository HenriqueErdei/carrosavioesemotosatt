import { Router } from "express";
import { AvioesController } from "../controllers/AvioesController";
import { CarrosController } from "../controllers/CarrosController";
import { MotosController } from "../controllers/MotosController";


const avioesController = new AvioesController();
const carrosController = new CarrosController();
const motosController = new MotosController();

const router = Router();

router.post('/carros', carrosController.create);
router.get('/carros', carrosController.list);
router.get('/carros/:id', carrosController.findById);

router.post('/motos', motosController.create);
router.get('/motos',  motosController.list);
router.get('/motos/:id', motosController.findById);

router.post('/aviao', avioesController.create);
router.get('/aviao', avioesController.list);
router.get('/aviao/:id', avioesController.findById);



export { router };

