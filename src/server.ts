import { app } from "./app";
import { Signale } from "signale";


export default class Server {
    private app;
    private log;

    private ApplicationPort  = process.env.PORT;

    constructor() {
        this.app = app;
        this.log = new Signale();
    }

    async start() {
        try {
            this.app.listen(this.ApplicationPort, () => this.log.scope('AUTOMOVEIS').success('Lista de automoveis ON'));
        } catch (error) {
            this.log.scope('AUTOMOVEIS').fatal("Não foi possivel iniciar a lista.")
        }
    }
}
