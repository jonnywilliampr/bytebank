import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Jonny", 10263693473); //cliente 1 e cliente 2 são uns objetos

const cliente2 = new Cliente("Neto", 10738348596); //estou pedindo para a partir do molde criar novos objetos

const contaCorrente1 = new ContaCorrente(1001, cliente1);
contaCorrente1.depositar(500);

const contaCorrente2 = new ContaCorrente(1002, cliente2);

let valor = 200;
contaCorrente1.transferir(valor, contaCorrente2);

console.log(ContaCorrente.numeroDeContas);