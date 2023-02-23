import Server from "./src/server";
import { respostamoto } from "./src/veiculos/lmotos";
import { respostacarro } from "./src/veiculos/lcarros";

const server = new Server();

server.start();

//COSULTAR ANO DA MOTO
//const moto = respostamoto.filter(i => i.Ano == 2012)
//console.log(moto);


//CONSULTAR COR DO CARRO
//const carro = respostacarro.filter(i  => i.Cor == 'Preto')
//console.log(carro);



