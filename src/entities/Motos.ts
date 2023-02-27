import { v4 as uuid } from 'uuid';

export class Motos {
    id?: string;
    modelo: string | undefined;
    ano: string | undefined;
    cor: string | undefined;

    constructor() {
        if(!this.id) {
            this.id = uuid ();
        }
    }
}