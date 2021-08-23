import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente(); //cliente 1 e cliente 2 são uns objetos
const cliente2 = new Cliente(); //estou pedindo para a partir do molde criar novos objetos
const contaCorrente1 = new ContaCorrente();
const contaCorrente2 = new ContaCorrente();

cliente1.nome = "Jonny";
cliente1.cpf = 10263693473;
contaCorrente1.agencia = 1001;
contaCorrente1._saldo = 0;

cliente2.nome = "Neto";
cliente2.cpf = 10738348596;
contaCorrente2.agencia = 1002;
contaCorrente2._saldo = 100;

contaCorrente1.depositar(200);

const valorSacado = contaCorrente1.sacar(50);

console.log(valorSacado);

console.log(contaCorrente1);