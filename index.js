import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js"

const cliente1 = new Cliente("Ricardo", 11122233309);

/*const cliente2 = new Cliente("Alice", 88822233309);
console.log(cliente2.cpf)*/

const contaCorrenteRicardo = new ContaCorrente(cliente1,101);
const contaPoupanca = new ContaPoupanca(50, cliente1, 101)
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);






/*const conta2 = new ContaCorrente(102, cliente2);*/

/*
contaCorrenteRicardo.depositar (100); 
contaCorrenteRicardo.depositar (100); 
contaCorrenteRicardo.depositar (100); 

const valorSacado = contaCorrenteRicardo.sacar(50);
instãncoa
console.log(valorSacado)
console.log(conta2)

let valor = 200;
contaCorrenteRicardo.transferir (200, conta2)
console.log(ContaCorrente.numeroDeContas)
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100)
contaPoupanca.sacar(10);


*/

