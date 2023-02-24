import Server from "./src/server";
import { respostamoto } from "./src/veiculos/lmotos";
import { respostacarro } from "./src/veiculos/lcarros";

const server = new Server();

server.start();

//COSULTAR ANO DA MOTO
//const moto = respostamoto.filter(i => i.Ano == 2012)
//console.log(moto);

//CONSULTAR COR DA MOTO
// const moto2 = respostamoto.filter(i => i.Cor == 'Preto')
// console.log(moto2);


//CONSULTAR ANO DO CARRO
// const carro2 = respostacarro.filter(i => i.Ano == 2022)
// console.log(carro2);

//CONSULTAR COR DO CARRO
//const carro = respostacarro.filter(i  => i.Cor == 'Preto')
//console.log(carro);
